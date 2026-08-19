import React, { useId } from "react";

interface UserStarIconProps {
  width?: number;
  height?: number;
  className?: string;
}

function UserStarIcon({
  width = 24,
  height = 24,
  className = "",
}: UserStarIconProps) {
  const gradientId = useId();
  const clipPathId = useId();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M9.33333 14C5.47283 14 2.33333 10.8605 2.33333 7C2.33333 3.1395 5.47283 0 9.33333 0C13.1938 0 16.3333 3.1395 16.3333 7C16.3333 10.8605 13.1938 14 9.33333 14ZM17.2013 28C16.9552 28 16.709 27.9218 16.5013 27.7667C16.1047 27.4703 15.9402 26.9547 16.0883 26.4822L17.1862 22.9635L14.413 20.7072C14.0397 20.391 13.9032 19.8753 14.0723 19.4157C14.2415 18.956 14.6778 18.6515 15.1667 18.6515H18.6678L19.9068 15.1748C20.0772 14.7187 20.5135 14.4153 21 14.4153C21.4865 14.4153 21.9228 14.7187 22.0932 15.1748L23.3322 18.6515H26.8333C27.3233 18.6515 27.7608 18.9583 27.9288 19.418C28.0968 19.8777 27.9592 20.3945 27.5847 20.7107L24.8243 22.9588L25.9665 26.4355C26.1228 26.9057 25.9642 27.4237 25.571 27.7258C25.1778 28.028 24.6365 28.049 24.2223 27.7795L21.0093 25.6877L17.85 27.8017C17.654 27.9335 17.4277 28 17.2013 28ZM11.5932 28H1.16667C0.522667 28 0 27.4773 0 26.8333C0 21.0443 4.711 16.3333 10.5 16.3333H11.5932C11.9968 16.3333 12.3713 16.5433 12.5848 16.8863C12.7972 17.2293 12.817 17.6587 12.6373 18.0192C11.9933 19.3142 11.6667 20.7107 11.6667 22.1667C11.6667 23.6227 11.9933 25.018 12.6373 26.3142C12.817 26.6758 12.7972 27.1052 12.5848 27.4482C12.3725 27.7912 11.9968 28 11.5932 28Z"
          fill={`url(#${gradientId})`}
        />
      </g>
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{ stopColor: "var(--theme-start)" }} />
          <stop offset="50%" style={{ stopColor: "var(--theme-mid)" }} />
          <stop offset="100%" style={{ stopColor: "var(--theme-end)" }} />
        </linearGradient>
        <clipPath id={clipPathId}>
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default UserStarIcon;
