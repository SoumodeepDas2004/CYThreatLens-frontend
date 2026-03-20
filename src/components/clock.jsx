import { useEffect, useState } from "react";

export default function UTCClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();

            const utcTime = now.toLocaleTimeString("en-GB", {
                timeZone: "UTC",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });

            setTime(utcTime + " UTC");
        };

        updateClock(); // initial call
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={clockStyle}>
             TIME: {time}
        </div>
    );
}

const clockStyle = {
    fontSize: "14px",
    color: "#d4d472",
    fontWeight: "500",
    letterSpacing: "1px",
};