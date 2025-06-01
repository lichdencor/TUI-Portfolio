import { useEffect, useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./Tweets.css";

interface TweetData {
  id: string;
}

export const Tweets = () => {
  const [tweetIds, setTweetIds] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTweets = () => {
    setLoading(true);
    setError(null);

    fetch("/.netlify/functions/getTweets")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data)) {
          const ids = data.data.map((tweet: TweetData) => tweet.id);
          if (ids.length > 0) {
            setTweetIds(ids.slice(0, 3));
          } else {
            setError("No tweets found.");
          }
        } else {
          setError("No tweets found.");
        }
      })
      .catch((err) => {
        console.error("Error fetching tweets:", err);
        setError("Failed to load tweets.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="block tweet-list">
      <h2>Tweets</h2>

      {loading ? (
        <div className="spinner">Loading tweets...</div>
      ) : error ? (
        <div>
          <p>{error}</p>
          <button onClick={fetchTweets} className="retry-button">Retry</button>
        </div>
      ) : (
        tweetIds.map((id) => (
          <div key={id} className="tweet-wrapper" style={{ marginBottom: "1rem" }}>
            <TwitterTweetEmbed tweetId={id} />
          </div>
        ))
      )}
    </div>
  );
};

