import React from "react";

interface CurvedArrowIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

function CurvedArrowIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: CurvedArrowIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      {/* Main shape */}
      <path
        d="M21.0477 3.05293C18.8697 0.707361 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
        fill="currentColor"
      />

      {/* Arrow line */}
      <path
        d="M11.5 12.5L15 9"
        stroke="url(#arrowGradient)"
        strokeWidth="1.5"
      />

      <defs>
        <linearGradient
          id="arrowGradient"
          x1="13.3787"
          y1="6.53062"
          x2="18.0453"
          y2="8.83799"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CurvedArrowIcon;
