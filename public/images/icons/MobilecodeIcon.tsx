import React, { useId } from "react";

interface MobilecodeIconProps {
  width?: number;
  height?: number;
  className?: string;
  colorMode?: "theme" | "gradient";
}

function MobilecodeIcon({
  width = 32,
  height = 32,
  className = "",
  colorMode = "theme",
}: MobilecodeIconProps) {
  const gradientId = useId();

  const baseColor =
    colorMode === "gradient" ? `url(#${gradientId})` : "currentColor";
  const accentColor = `url(#${gradientId})`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5144 27.2724C21.8932 27.6742 21.8932 28.3258 21.5144 28.7276C21.1355 29.1294 20.5212 29.1294 20.1424 28.7276L17.3139 25.7276C16.9351 25.3258 16.9351 24.6742 17.3139 24.2724L20.1424 21.2724C20.5212 20.8705 21.1355 20.8705 21.5143 21.2724C21.8932 21.6742 21.8932 22.3258 21.5144 22.7276L19.3719 25L21.5144 27.2724ZM24.1424 22.7276C23.7635 22.3258 23.7635 21.6743 24.1424 21.2724C24.5212 20.8706 25.1355 20.8706 25.5144 21.2724L28.3428 24.2724C28.7216 24.6743 28.7216 25.3258 28.3428 25.7276L25.5144 28.7276C25.1355 29.1295 24.5212 29.1295 24.1424 28.7276C23.7635 28.3258 23.7635 27.6742 24.1424 27.2724L26.2848 25L24.1424 22.7276Z"
        fill={accentColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C7 4.34314 8.34315 3 10 3H22C23.6569 3 25 4.34315 25 6V18C25 18.5523 24.5523 19 24 19H19.8284C19.5632 19 19.3089 19.1054 19.1213 19.2929L14.7264 23.6878C14.4221 23.9922 14.3466 24.4571 14.5391 24.8421L15.8944 27.5528C16.0494 27.8628 16.0329 28.2309 15.8507 28.5257C15.6684 28.8205 15.3466 29 15 29H10C8.34315 29 7 27.6569 7 26V6ZM13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7H19C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5H13Z"
        fill={baseColor}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="23.2549"
          y1="15.2857"
          x2="36.0291"
          y2="24.3758"
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

export default MobilecodeIcon;
