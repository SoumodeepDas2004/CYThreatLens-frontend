import { useEffect, useState } from "react";
import { getGlobalNews, getTechNews } from "../services/api";
import NewsMap from "../components/NewsMap";

export default function WorldUpdate() {

  const [globalNews, setGlobalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);

  const loadNews = async () => {
    const g = await getGlobalNews();
    const t = await getTechNews();
    setGlobalNews(g);
    setTechNews(t);
  };

  useEffect(() => {
    loadNews();
    const interval = setInterval(loadNews, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="world-container">

      <h1> Global News Impact Map</h1>
      <NewsMap articles={globalNews} />
      <h2 style={{marginTop:"40px"}}>📰 Global Headlines</h2>
<h2 className="section-title">
  WORLD NEWS <span className="live-dot">● LIVE</span>
</h2>

<div className="news-feed">
  {globalNews.map((article, index) => (
    <div key={index} className="news-item">
      <div className="news-category">
        {article.source?.toUpperCase()}
      </div>

      <div className="news-headline">
        {article.title}
      </div>

      <div className="news-meta">
        {new Date(article.publishedAt).toLocaleString()}
      </div>
    </div>
  ))}
</div>
      <h2 style={{marginTop:"40px"}}>📰 Cyber & Tech News</h2>

      <h2 className="section-title">
  CYBER & TECH <span className="live-dot">● LIVE</span>
</h2>

<div className="news-feed">
  {techNews.map((article, index) => (
    <div key={index} className="news-item">
      <div className="news-category">
        {article.source?.toUpperCase()}
      </div>

      <div className="news-headline">
        {article.title}
      </div>

      <div className="news-meta">
        {new Date(article.publishedAt).toLocaleString()}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}