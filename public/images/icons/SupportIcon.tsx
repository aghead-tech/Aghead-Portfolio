"use client";
import React, { useId } from "react";

interface SupportIconProps {
  width?: number;
  height?: number;
  className?: string;
}

function SupportIcon({
  width = 32,
  height = 32,
  className = "",
}: SupportIconProps) {
  const uniqueId = useId();
  const gradientId = `support_gradient_${uniqueId}`;
  const clipId = `support_clip_${uniqueId}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M16 26.2L19.3 24H23V14H9V24H12.7L16 26.2ZM20 18C20.6 18 21 18.4 21 19C21 19.6 20.6 20 20 20C19.4 20 19 19.6 19 19C19 18.4 19.4 18 20 18ZM16 18C16.6 18 17 18.4 17 19C17 19.6 16.6 20 16 20C15.4 20 15 19.6 15 19C15 18.4 15.4 18 16 18ZM11 19C11 18.4 11.4 18 12 18C12.6 18 13 18.4 13 19C13 19.6 12.6 20 12 20C11.4 20 11 19.6 11 19Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M32 15.6L30 13.6V12H29V11C29 4.9 23.2 0 16 0C8.8 0 3 4.9 3 11V12H2V13.6L0 15.6V20.4L2 22.4V24H7V12H5V11C5 8.7 6 6.7 7.7 5.1L9.9 7.3L10.6 6.8C12.2 5.6 14 5 16 5C18 5 19.8 5.6 21.4 6.8L22.1 7.3L24.3 5.1C26 6.7 27 8.7 27 11V12H25V24H27V26C27 27.7 25.7 29 24 29H21V28H11V32H21V31H24C26.8 31 29 28.8 29 26V24H30V22.4L32 20.4V15.6Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <linearGradient
          id={gradientId}
          x1={16.5149}
          y1={5.39246}
          x2={34.0875}
          y2={15.363}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start, #EC9A48)" />
          <stop offset={0.5} stopColor="var(--theme-mid, #EAB953)" />
          <stop offset={1} stopColor="var(--theme-end, #EDAE4D)" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="32" height="32" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SupportIcon;
