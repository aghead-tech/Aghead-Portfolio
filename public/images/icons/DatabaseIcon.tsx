import React, { useId } from "react";

interface DatabaseIconProps {
  width?: number;
  height?: number;
  className?: string;
  colorMode?: "theme" | "gradient";
}

function DatabaseIcon({
  width = 32,
  height = 32,
  className = "",
  colorMode = "theme",
}: DatabaseIconProps) {
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
        d="M26.6666 24.0001C26.6666 26.9467 21.8906 29.3334 15.9999 29.3334C10.1093 29.3334 5.33325 26.9467 5.33325 24.0001V18.6321C6.00259 19.4547 6.95325 20.1374 8.01058 20.6654C10.1066 21.7134 12.9333 22.3334 15.9999 22.3334C19.0666 22.3334 21.8932 21.7134 23.9892 20.6667C25.0466 20.1374 25.9972 19.4534 26.6666 18.6321V24.0001Z"
        fill={accentColor}
      />
      <path
        d="M15.9999 14.3334C19.0666 14.3334 21.8932 13.7134 23.9892 12.6667C25.0466 12.1374 25.9972 11.4534 26.6666 10.6321V16.0001C26.6666 16.6667 24.2852 18.1214 23.0946 18.8774C21.3306 19.7587 18.8239 20.3334 15.9999 20.3334C13.1759 20.3334 10.6693 19.7601 8.90525 18.8774C7.33325 18.0907 5.33325 16.6667 5.33325 16.0001V10.6321C6.00259 11.4547 6.95325 12.1374 8.01058 12.6654C10.1066 13.7134 12.9333 14.3334 15.9999 14.3334Z"
        fill={baseColor}
      />
      <path
        d="M23.0947 10.8774C21.3307 11.7587 18.8241 12.3334 16.0001 12.3334C13.1761 12.3334 10.6694 11.7601 8.90541 10.8774C8.21875 10.6081 6.67475 9.75341 5.60275 8.37208C5.51153 8.25645 5.44525 8.12319 5.40808 7.98069C5.3709 7.83819 5.36364 7.68953 5.38675 7.54408C5.41741 7.34675 5.46008 7.14275 5.51475 7.01608C6.43741 4.54141 10.7814 2.66675 16.0001 2.66675C21.2187 2.66675 25.5628 4.54141 26.4854 7.01608C26.5401 7.14275 26.5828 7.34675 26.6134 7.54408C26.6365 7.68953 26.6293 7.83819 26.5921 7.98069C26.5549 8.12319 26.4886 8.25645 26.3974 8.37208C25.3254 9.75341 23.7814 10.6081 23.0947 10.8774Z"
        fill={baseColor}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="16.7846"
          y1="11.0819"
          x2="34.7386"
          y2="28.779"
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

export default DatabaseIcon;
