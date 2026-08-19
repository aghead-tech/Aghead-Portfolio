import React, { useId } from "react";

interface ProfileCardIconProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  useGradient?: boolean;
}

function ProfileCardIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  useGradient = false,
}: ProfileCardIconProps) {
  const gradientId = useId();
  const strokeColor = useGradient ? `url(#${gradientId})` : color;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {useGradient && (
        <defs>
          {/* Light mode gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              className="[stop-color:var(--theme-start)] dark:[stop-color:var(--theme-end)]"
            />
            <stop
              offset="50%"
              className="[stop-color:var(--theme-mid)] dark:[stop-color:var(--theme-mid)]"
            />
            <stop
              offset="100%"
              className="[stop-color:var(--theme-end)] dark:[stop-color:var(--theme-start)]"
            />
          </linearGradient>
        </defs>
      )}
      <path
        d="M17.5 2H8C5.79086 2 4 3.79086 4 6V18C4 20.2091 5.79086 22 8 22H17.5C19.7091 22 21.5 20.2091 21.5 18V6C21.5 3.79086 19.7091 2 17.5 2Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M10.59 13.7408C9.96125 14.162 8.31261 15.0221 9.31674 16.0983C9.80725 16.624 10.3536 17 11.0404 17H14.9596C15.6464 17 16.1928 16.624 16.6833 16.0983C17.6874 15.0221 16.0388 14.162 15.41 13.7408C13.9355 12.7531 12.0645 12.7531 10.59 13.7408Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M15 9C15 10.1046 14.1046 11 13 11C11.8954 11 11 10.1046 11 9C11 7.89543 11.8954 7 13 7C14.1046 7 15 7.89543 15 9Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M5 6H2.5M5 12H2.5M5 18H2.5"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default ProfileCardIcon;
