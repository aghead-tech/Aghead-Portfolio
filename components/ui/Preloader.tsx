"use client";
import React, { useEffect, useState } from "react";
import { ThemeColor, themeColors } from "@/data/themeData";
import { useTheme } from "@/components/ui/ThemeContext";
import { usePreload } from "@/hooks/usePreloadContext";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const { color } = useTheme();
  const { setIsPreloaded } = usePreload();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Notify that preloading is complete
      setIsPreloaded(true);
    }, 1500); // 1.5s generic loading simulation
    return () => clearTimeout(timer);
  }, [setIsPreloaded]);

  if (!isVisible) return null;

  // Resolve color for the loader
  const activeTheme =
    themeColors.find((t) => t.value === color) || themeColors[0];
  const gradientClass =
    color === "luxurious"
      ? "from-yellow-400 to-orange-500"
      : color === "blue"
        ? "from-blue-400 to-cyan-500"
        : "from-red-400 to-pink-500";

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          <div
            className={`absolute inset-0 rounded-full border-4 border-transparent border-t-transparent border-l-transparent animate-spin bg-linear-to-r ${gradientClass}`}
            style={{ maskImage: "linear-gradient(transparent, black)" }} // Fading tail effect
          ></div>
          <div
            className={`absolute inset-0 rounded-full border-4 border-t-4 border-r-transparent border-b-transparent border-l-transparent animate-spin border-primary opacity-50`}
          ></div>
          {/* Inner Dot */}
          <div
            className={`absolute inset-[35%] rounded-full bg-linear-to-br ${gradientClass} animate-pulse`}
          ></div>
        </div>

        {/* Loading Text */}
        <span className="text-sm font-medium tracking-[0.2em] animate-pulse text-muted-foreground">
          LOADING..
        </span>
      </div>
    </div>
  );
}
