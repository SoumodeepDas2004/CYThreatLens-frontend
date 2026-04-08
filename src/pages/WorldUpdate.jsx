import { useEffect, useState } from "react";
import { getGlobalNews, getTechNews,getRssNews,getintels } from "../services/api";
import NewsMap from "../components/NewsMap";
import TelegramIntel from "../components/TelegramIntel";
const API_URL = import.meta.env.VITE_API_URL;

export default function WorldUpdate() {

  const [globalNews, setGlobalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [RssNews, setRssNews] = useState([]);
  const [intels, setintels] = useState([]);

  const loadNews = async () => {
    const g = await getGlobalNews();
    const t = await getTechNews();
    const r = await getRssNews();
    const i=await getintels();
    setGlobalNews(g);
    setTechNews(t);
    setRssNews(r);
    setintels(i);
  };

  useEffect(() => {
    loadNews();
    const interval = setInterval(loadNews, 100000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">

      <h1 style={{ color: "#72d4cf", fontSize: "40px" }}> Global News Impact Map</h1>
      <NewsMap articles={intels} />
      <h2 style={{ marginTop: "30px" }}>Global Headlines</h2>
      <h2 className="section-title">
        WORLD NEWS <span className="live-dot">● LIVE</span>
      </h2>

      <div className="news-feed">
        {globalNews.map((article, index) => (
          <div key={index} className="news-item">
            <div className="news-category">
              {article.source?.toUpperCase()}
              <span>{article.Date}</span>
            </div>

            <div className="news-headline">
              {article.title}
            </div>

            <div className="news-meta">

              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Source_Link
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 style={{ marginTop: "40px" }}>Live Intelligence</h2>
      <h3 className="section-title" > Telegram OSINT Feed <span className="live-dot">● LIVE</span></h3>
      <div className="news-feed" >
        <TelegramIntel />
      </div>
      <h2 style={{ marginTop: "40px" }}> Cyber & Tech News</h2>

      <h3 className="section-title">
        CYBER & TECH <span className="live-dot">● LIVE</span>
      </h3>

      <div className="news-feed">
        {techNews.map((article, index) => (
          <div key={index} className="news-item">
            <div className="news-category">
              {article.source?.toUpperCase()}
              
            </div>

            <div className="news-headline">
              {article.title}
              {/* <span>{article.url}</span> */}
              
            </div>

            <div className="news-meta">
             <span className="news-meta">

                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Source_Link
                </a>
              </span> {new Date(article.publishedAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <h2 style={{ marginTop: "40px" }}> RSS News</h2>

      <h3 className="section-title">
        News<span className="live-dot">● LIVE</span>
      </h3>
      <div className="news-feed">
        {RssNews.map((article, index) => (
          <div key={index} className="news-item">
            <div className="news-category">
              {article.source?.toUpperCase()}
              
            </div>

            <div className="news-headline">
              {article.title}
              {/* <span>{article.url}</span> */}
              
            </div>

            <div className="news-meta">
             <span className="news-meta">

                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Source_Link
                </a>
              </span> 
              {/* {new Date(article.publishedAt).toLocaleString()} */}
            </div>
          </div>
        ))}
      </div>



    </div>
  );
}