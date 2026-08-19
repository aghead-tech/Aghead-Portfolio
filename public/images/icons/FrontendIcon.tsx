import React, { useId } from "react";

interface FrontendIconProps {
  width?: number;
  height?: number;
  className?: string;
  colorMode?: "theme" | "gradient";
}

function FrontendIcon({
  width = 32,
  height = 32,
  className = "",
  colorMode = "theme",
}: FrontendIconProps) {
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
        d="M26.6666 4H5.33329C3.86263 4 2.66663 5.196 2.66663 6.66667V25.3333C2.66663 26.804 3.86263 28 5.33329 28H26.6666C28.1373 28 29.3333 26.804 29.3333 25.3333V6.66667C29.3333 5.196 28.1373 4 26.6666 4ZM5.33329 25.3333V9.33333H26.6666L26.6693 25.3333H5.33329Z"
        fill={baseColor}
      />
      <path
        d="M12.3907 12.3906L7.448 17.3333L12.3907 22.276L14.276 20.3906L11.2187 17.3333L14.276 14.276L12.3907 12.3906ZM19.6093 12.3906L17.724 14.276L20.7813 17.3333L17.724 20.3906L19.6093 22.276L24.552 17.3333L19.6093 12.3906Z"
        fill={accentColor}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="16.6291"
          y1="5.41617"
          x2="33.0159"
          y2="19.4352"
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

export default FrontendIcon;
