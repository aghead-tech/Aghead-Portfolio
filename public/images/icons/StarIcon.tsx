import React from "react";

interface StarIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

function StarIcon({
  width = 30,
  height = 30,
  color = "currentColor",
  className = "",
}: StarIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <path
        d="M15 0L19.0514 10.9486L30 15L19.0514 19.0514L15 30L10.9486 19.0514L0 15L10.9486 10.9486L15 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default StarIcon;
