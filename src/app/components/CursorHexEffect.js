"use client";

import { useEffect } from "react";

function CursorHexEffect() {
  useEffect(() => {
    const root = document.documentElement;

    const handleMove = (event) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
      root.style.setProperty("--hex-glow-opacity", "1");
    };

    const handleLeave = () => {
      root.style.setProperty("--hex-glow-opacity", "0");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return null;
}

export default CursorHexEffect;
