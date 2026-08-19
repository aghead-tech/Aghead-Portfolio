"use client";
import React, { useId } from "react";

interface ArchitectureIconProps {
  width?: number;
  height?: number;
  className?: string;
}

function ArchitectureIcon({
  width = 32,
  height = 32,
  className = "",
}: ArchitectureIconProps) {
  const uniqueId = useId();
  const gradientId0 = `architecture_gradient0_${uniqueId}`;
  const gradientId1 = `architecture_gradient1_${uniqueId}`;

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
        d="M23.9998 10.6667H18.6665V29.3334H23.9998C26.514 29.3334 27.771 29.3334 28.5521 28.5523C29.3332 27.7713 29.3332 26.5142 29.3332 24.0001V16.0001C29.3332 13.4859 29.3332 12.2288 28.5521 11.4478C27.771 10.6667 26.514 10.6667 23.9998 10.6667Z"
        fill={`url(#${gradientId0})`}
        stroke={`url(#${gradientId1})`}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M18.6665 29.3334V10.6667C18.6665 6.89551 18.6665 5.00989 17.4949 3.83832C16.3233 2.66675 14.4377 2.66675 10.6665 2.66675C6.89526 2.66675 5.00965 2.66675 3.83808 3.83832C2.6665 5.00989 2.6665 6.89551 2.6665 10.6667V21.3334C2.6665 25.1046 2.6665 26.9902 3.83808 28.1618C5.00965 29.3334 6.89526 29.3334 10.6665 29.3334H18.6665Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M8.66683 14.6666H7.3335M14.0002 14.6666H12.6668M8.66683 9.33325H7.3335M8.66683 19.9999H7.3335M14.0002 9.33325H12.6668M14.0002 19.9999H12.6668"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M24.6668 20.0001H23.3335M24.6668 14.6667H23.3335"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id={gradientId0}
          x1={24.3922}
          y1={-2.50325}
          x2={40.7826}
          y2={2.1277}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start, #EC9A48)" />
          <stop offset={0.5} stopColor="var(--theme-mid, #EAB953)" />
          <stop offset={1} stopColor="var(--theme-end, #EDAE4D)" />
        </linearGradient>
        <linearGradient
          id={gradientId1}
          x1={24.3922}
          y1={-2.50325}
          x2={40.7826}
          y2={2.1277}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start, #EC9A48)" />
          <stop offset={0.5} stopColor="var(--theme-mid, #EAB953)" />
          <stop offset={1} stopColor="var(--theme-end, #EDAE4D)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ArchitectureIcon;
