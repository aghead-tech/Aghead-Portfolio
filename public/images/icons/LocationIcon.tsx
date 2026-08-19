import React, { useId } from "react";

interface LocationIconProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  useGradient?: boolean;
}

function LocationIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  useGradient = false,
}: LocationIconProps) {
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
        d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default LocationIcon;
