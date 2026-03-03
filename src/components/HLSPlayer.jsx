import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HLSPlayer({ streamUrl }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(streamUrl);
            hls.attachMedia(videoRef.current);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoRef.current.play();
            });

            return () => hls.destroy();
        }
    }, [streamUrl]);

    return (
        <video
            ref={videoRef}
            controls
            muted
            style={{ width: "100%", borderRadius: "8px" }}
        />
    );
}