"use client";
import { useState, useCallback, useEffect, useRef } from "react";

const videos = [
  {
    id: "cO1F6TnuEmA",
    label: "Project Overview",
    img: "/images/VIDEOS1frame.jpg",
  },
  {
    id: "cO1F6OnuEmg",
    label: "Treatment Process",
    img: "/images/VIDEOS2frame.jpg",
  },
  {
    id: "cO1F6OnuEmk",
    label: "Site Work",
    img: "/images/VIDEOS3frame.jpg",
  },
  {
    id: "cO1F6OnuEmp",
    label: "Installation",
    img: "/images/VIDEOS4frame.jpg",
  },
  {
    id: "cO1F6OnuEm5",
    label: "Final Output",
    img: "/images/VIDEOS5frame.jpg",
  },
];

function VideoCard({ v, onOpen }) {
  const wrapRef = useRef(null);
  const iframeRef = useRef(null);
  const timerRef = useRef(null);
  const hasPlayedRef = useRef(false);

  const injectPlayer = useCallback(() => {
    if (!wrapRef.current || iframeRef.current) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://go.screenpal.com/player/${v.id}?ff=1&ahc=1&dcc=1&tl=0&controls=0&bg=transparent&embed=1&cl=1&autoplay=1&mute=1`;
    iframe.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;border:0;pointer-events:none;";
    iframe.scrolling = "no";
    iframe.allow = "autoplay; encrypted-media";
    iframeRef.current = iframe;
    wrapRef.current.appendChild(iframe);

    // Inject ScreenPal init script once
    if (!document.querySelector(`script[data-sp="${v.id}"]`)) {
      const script = document.createElement("script");
      script.src = `https://go.screenpal.com/consumption/player_appearance/${v.id}/1.806723`;
      script.dataset.sp = v.id;
      script.async = true;
      document.body.appendChild(script);
    }

    // Stop after 10 seconds
    timerRef.current = setTimeout(() => {
      removePlayer();
    }, 10000);
  }, [v.id]);

  const removePlayer = useCallback(() => {
    clearTimeout(timerRef.current);
    if (iframeRef.current) {
      iframeRef.current.remove();
      iframeRef.current = null;
    }
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true; // play once per mount
          injectPlayer();
        }
      },
      { threshold: 0.6 }, // 60% visible before playing
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      removePlayer();
    };
  }, [injectPlayer, removePlayer]);

  return (
    <div
      ref={wrapRef}
      className="video-item"
      onClick={() => onOpen(v)}
      style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}
    >
      {/* Poster/thumbnail shown when iframe is not active */}
      <img
        className="video-poster"
        src={v.img}
        alt={v.label}
        onError={(e) => (e.target.style.display = "none")}
      />
      <div className="video-play-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className="video-label">{v.label}</span>
    </div>
  );
}

function ScreenPalModal({ v, onClose }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    wrapRef.current.innerHTML = "";

    const container = document.createElement("div");
    container.style.cssText =
      "position:relative;width:100%;padding-top:55.35%;height:0;border-radius:6px;overflow:hidden;";

    const iframe = document.createElement("iframe");
    iframe.src = `https://go.screenpal.com/player/${v.id}?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1&autoplay=1`;
    iframe.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;border:0;";
    iframe.scrolling = "no";
    iframe.allowFullscreen = true;
    iframe.allow = "autoplay; encrypted-media";
    iframe.title = v.label;
    container.appendChild(iframe);

    if (!document.querySelector(`script[data-sp="${v.id}"]`)) {
      const script = document.createElement("script");
      script.src = `https://go.screenpal.com/consumption/player_appearance/${v.id}/1.806723`;
      script.dataset.sp = v.id;
      script.async = true;
      document.body.appendChild(script);
    }

    wrapRef.current.appendChild(container);
    return () => {
      if (wrapRef.current) wrapRef.current.innerHTML = "";
    };
  }, [v.id]);

  return (
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          &times;
        </button>
        <div ref={wrapRef} />
        <p className="video-modal-label">{v.label}</p>
      </div>
    </div>
  );
}

export default function VideoGrid() {
  const [active, setActive] = useState(null);

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
          <VideoCard key={i} v={v} onOpen={setActive} />
        ))}
      </div>

      {active && <ScreenPalModal v={active} onClose={() => setActive(null)} />}
    </>
  );
}
