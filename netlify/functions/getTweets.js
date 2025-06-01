const { Redis } = require("@upstash/redis");
const fetch = require("node-fetch");

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});

const CACHE_KEY = "tweets_cache_v2";
const CACHE_TTL = 3600;

function logDebug(message) {
  const timestamp = new Date().toISOString();
  console.log(`[getTweets] [${timestamp}] ${message}`);
}

async function getCache() {
  try {
    const cached = await redis.get(CACHE_KEY);
    if (cached) {
      logDebug("Serving tweets from Redis cache");
      return cached;
    } else {
      logDebug("No cache found in Redis");
      return null;
    }
  } catch (err) {
    logDebug(`Redis GET error: ${err.message}`);
    return null;
  }
}

async function setCache(data) {
  try {
    await redis.set(CACHE_KEY, data, { ex: CACHE_TTL });
    logDebug(`Tweets stored in Redis cache (TTL ${CACHE_TTL}s)`);
  } catch (err) {
    logDebug(`Redis SET error: ${err.message}`);
  }
}

exports.handler = async function (event, context) {
  const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
  if (!BEARER_TOKEN) {
    logDebug("Missing TWITTER_BEARER_TOKEN");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing Twitter API token" }),
    };
  }

  const twitterUrl = "https://api.twitter.com/2/users/912779852561965058/tweets?max_results=5";
  logDebug(`Fetching tweets from Twitter API: ${twitterUrl}`);

  try {
    const response = await fetch(twitterUrl, {
      headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
    });

    logDebug(`Twitter API responded with status: ${response.status}`);

    if (response.status === 429) {
      logDebug("Rate limit hit. Falling back to Redis cache...");
      const fallbackCache = await getCache();

      if (fallbackCache) {
        return {
          statusCode: 200,
          body: JSON.stringify(fallbackCache),
        };
      }

      return {
        statusCode: 429,
        body: JSON.stringify({
          error: "Rate limit exceeded, and no cached tweets available.",
        }),
      };
    }

    if (!response.ok) {
      const errorText = await response.text();
      logDebug(`Twitter API error: ${errorText}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to fetch tweets", details: errorText }),
      };
    }

    const data = await response.json();

    await setCache(data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    logDebug(`Twitter fetch error: ${error.message}`);
    const fallbackCache = await getCache();

    if (fallbackCache) {
      logDebug("Returning stale cache after fetch error");
      return {
        statusCode: 200,
        body: JSON.stringify(fallbackCache),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

