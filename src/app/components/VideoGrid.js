"use client";
import { useState, useCallback, useEffect, useRef } from "react";

const videos = [
  { id: "cO1F6TnuEmA", label: "Project Overview", img: "/images/VIDEOS1frame.jpg" },
  { id: "cO1F6OnuEmg", label: "Treatment Process", img: "/images/VIDEOS2frame.jpg" },
  { id: "cO1F6OnuEmk", label: "Site Work", img: "/images/VIDEOS3frame.jpg" },
  { id: "cO1F6OnuEmp", label: "Installation", img: "/images/VIDEOS4frame.jpg" },
  { id: "cO1F6OnuEm5", label: "Final Output", img: "/images/VIDEOS5frame.jpg" },
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
    iframe.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;border:0;pointer-events:none;";
    iframe.scrolling = "no";
    iframe.allow = "autoplay; encrypted-media";
    iframeRef.current = iframe;
    wrapRef.current.appendChild(iframe);

    if (!document.querySelector(`script[data-sp="${v.id}"]`)) {
      const script = document.createElement("script");
      script.src = `https://go.screenpal.com/consumption/player_appearance/${v.id}/1.806723`;
      script.dataset.sp = v.id;
      script.async = true;
      document.body.appendChild(script);
    }

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
          hasPlayedRef.current = true;
          injectPlayer();
        }
      },
      { threshold: 0.6 },
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
      className="group relative overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br from-[rgba(62,39,35,0.8)] to-[rgba(62,39,35,0.5)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
      onClick={() => onOpen(v)}
      style={{ aspectRatio: "16/9" }}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        src={v.img}
        alt={v.label}
        onError={(e) => (e.target.style.display = "none")}
      />
      <div className="absolute inset-0 flex items-center justify-center z-[3]">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[52px] h-[52px] text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] transition duration-200 group-hover:scale-110 group-hover:text-algae"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className="absolute bottom-0 left-0 right-0 text-[0.75rem] font-medium tracking-[0.08em] uppercase text-[rgba(217,203,176,0.8)] bg-gradient-to-t from-[rgba(62,39,35,0.9)] to-transparent pt-[1.4rem] pb-[0.6rem] px-[0.7rem] text-center z-[2]">
        {v.label}
      </span>
    </div>
  );
}

function ScreenPalModal({ v, onClose }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    wrapRef.current.innerHTML = "";

    const container = document.createElement("div");
    container.style.cssText = "position:relative;width:100%;padding-top:55.35%;height:0;border-radius:6px;overflow:hidden;";

    const iframe = document.createElement("iframe");
    iframe.src = `https://go.screenpal.com/player/${v.id}?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1&autoplay=1`;
    iframe.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;border:0;";
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
    <div
      className="fixed inset-0 z-[200] bg-black/85 flex items-center justify-center p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-[800px] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 bg-transparent border-none text-white/60 text-[2rem] cursor-pointer leading-none hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <div ref={wrapRef} />
        <p className="text-center text-white/50 text-[0.8rem] mt-3 tracking-[0.05em]">
          {v.label}
        </p>
      </div>
    </div>
  );
}

export default function VideoGrid() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="text-center mb-12">
        <p className="text-base font-semibold tracking-[0.25em] uppercase text-algae">
          Media
        </p>
        <h2 className="font-oswald text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-white">
          Project Videos
        </h2>
        <p className="text-[0.9rem] text-white max-w-[500px] mx-auto mt-2 leading-[1.7]">
          Watch our lake restoration and water treatment projects in action.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        {videos.map((v, i) => (
          <VideoCard key={i} v={v} onOpen={setActive} />
        ))}
      </div>

      {active && <ScreenPalModal v={active} onClose={() => setActive(null)} />}
    </>
  );
}
