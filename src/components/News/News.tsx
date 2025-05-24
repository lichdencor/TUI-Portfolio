import news from "./News.json";

export const News = () => (
  <div className="block news-container">
    <h2>Latest News</h2>
    <div>
      {news.map((item, idx) => (
        <div key={idx} className="news-item">
          <h3>{item.title}</h3>
          <small>{item.date}</small>
          <p>{item.description}</p>
          <a href={item.link}>Read more</a>
        </div>
      ))}
    </div>
  </div>
);

