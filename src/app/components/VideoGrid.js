"use client";
import { useState, useRef, useCallback } from "react";

const videos = [
  { src: "/videos/VIDEOS1.mp4", label: "Project Overview" },
  { src: "/videos/VIDEOS2.mp4", label: "Treatment Process" },
  { src: "/videos/videos3.mp4", label: "Site Work" },
  { src: "/videos/VIDEOS4.mp4", label: "Installation" },
  { src: "/videos/videos5.mp4", label: "Operation Demo" },
  { src: "/videos/videos55.mp4", label: "Final Output" },
];

export default function VideoGrid() {
  const [active, setActive] = useState(null);
  const modalRef = useRef(null);

  const open = useCallback((v) => setActive(v), []);
  const close = useCallback(() => {
    setActive(null);
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.play();
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  };

  return (
    <>
      <div className="video-grid">
        {videos.map((v, i) => (
          <div key={i} className="video-item" onClick={() => open(v)}>
            <video
              src={v.src}
              muted
              loop
              playsInline
              autoPlay
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <span className="video-label">{v.label}</span>
          </div>
        ))}
      </div>

      {active && (
        <div className="video-modal" onClick={close} ref={modalRef}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close" onClick={close}>
              &times;
            </button>
            <video
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
