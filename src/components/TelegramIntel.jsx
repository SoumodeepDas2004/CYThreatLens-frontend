import { useEffect, useState } from "react";

export default function TelegramIntel() {

    const [messages, setMessages] = useState([]);

    const fetchTelegramIntel = () => {
        fetch("http://127.0.0.1:8000/telegram/intel")
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
        <div style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "10px"
        }}>

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


            ))}

        </div>
    );
}