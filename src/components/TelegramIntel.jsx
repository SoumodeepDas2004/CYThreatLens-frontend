import { useEffect, useState } from "react";
// fetch(`${API_URL}/your-endpoint`)
const API_URL = import.meta.env.VITE_API_URL;

export default function TelegramIntel() {

    const [messages, setMessages] = useState([]);

    const fetchTelegramIntel = () => {
        fetch(`${API_URL}/telegram/intel`)
            .then(res => res.json())
            .then(data => setMessages(data))
            .catch(err => console.log(err));
    };

    useEffect(() => {

        fetchTelegramIntel();

        const interval = setInterval(fetchTelegramIntel, 60000);

        return () => clearInterval(interval);

    }, []);

    return (
        <>
            {

        /* 
            {messages.length === 0 && (
                <p style={{ color: "#94a3b8" }}>Loading intelligence feed...</p>
            )}

            {messages.map((msg, index) => (

                <div key={index} className="news-item">

                    <div className="news-headline">
                        {msg.channel} 
                    </div>

                    <div style={{
                        marginTop: "5px",
                        lineHeight: "1.5"
                    }}>
                        {msg.text}
                    </div>
                    <div className="news-meta">
                        {new Date(msg.date).toLocaleString()}
                    </div>
                </div>


            ))} */}

            {

                messages.map((article, index) => (
                    <div key={index} className="news-item">
                        <div className="news-category">
                            {article.source?.toUpperCase()}
                        </div>

                        <div className="news-headline">
                            {article.title}
                        </div>

                        <div className="news-meta">
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Source_Link
                            </a>
                            {new Date(article.date).toLocaleString()}
                        </div>
                    </div>
                ))
            }
        </>

    );
}