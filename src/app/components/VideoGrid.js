"use client";
import { useState, useRef, useCallback } from "react";

const videos = [
  { src: "/videos/VIDEOS1.mp4", label: "Project Overview" },
  { src: "/videos/VIDEOS2.mp4", label: "Treatment Process" },
  { src: "/videos/videos3.mp4", label: "Site Work" },
  { src: "/videos/VIDEOS4.mp4", label: "Installation" },
  { src: "/videos/videos55.mp4", label: "Final Output" },
];

export default function VideoGrid() {
  const [active, setActive] = useState(null);
  const videoRefs = useRef([]);

  const open = useCallback((v) => setActive(v), []);
  const close = useCallback(() => {
    setActive(null);
  }, []);

  const handleMouseEnter = (i) => {
    videoRefs.current[i]?.play();
  };
  const handleMouseLeave = (i) => {
    const el = videoRefs.current[i];
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  };

  return (
    <>
      <div className="video-section-header">
        <p className="lake-label">Media</p>
        <h2 className="section-title">Project Videos</h2>
        <p className="video-section-desc">
          Watch our lake restoration and water treatment projects in action.
        </p>
      </div>
      <div className="video-grid">
        {videos.map((v, i) => (
          <div key={i} className="video-item" onClick={() => open(v)}>
            <div className="video-play-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={v.src}
              muted
              loop
              playsInline
              preload="metadata"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            />
            <span className="video-label">{v.label}</span>
          </div>
        ))}
      </div>

      {active && (
        <div className="video-modal" onClick={close}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close" onClick={close}>
              &times;
            </button>
            <video
              key={active.src}
              src={active.src}
              controls
              autoPlay
              playsInline
              className="video-modal-player"
            />
            <p className="video-modal-label">{active.label}</p>
          </div>
        </div>
      )}
    </>
  );
}
