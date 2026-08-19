"use client";

interface FlameIconProps {
  width?: number;
  height?: number;
  useGradient?: boolean;
  className?: string;
}

export function FlameIcon({
  width = 27,
  height = 36,
  useGradient = true,
  className = "",
}: FlameIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_flame)">
        <path
          d="M8.93652 0C15.5495 5.6448 19.74 11.1744 20.0947 17.251C20.9003 15.9966 21.6292 14.4561 22.332 12.4014V12.4023L22.7422 13.0098C26.9036 19.3969 28.3958 28.9916 19.4121 36V35.999L19.4854 35.5947C19.792 33.5477 19.1635 31.105 15.2998 26.7266C11.1788 22.0587 13.1604 17.7716 14.9453 14.6436C9.62308 20.8172 9.50133 26.658 11.4072 30.9141L11.5977 31.3203C10.8537 30.9566 10.2211 30.5651 9.67383 30.1416C9.12661 29.7182 8.66418 29.2634 8.25879 28.7754C8.18706 28.6891 8.11908 28.6002 8.05078 28.5117C7.87025 30.5206 8.01035 32.9233 8.80566 35.5781L8.93652 36C1.67723 33.5413 -1.60538 26.6525 0.757812 20.1465C0.757974 20.1453 0.758627 20.1438 0.758789 20.1426H0.759766V20.1436C1.22477 20.7652 1.83019 21.2891 2.42676 21.7119C3.2199 13.2179 11.4304 7.00735 9.22559 0.702148C9.13966 0.46719 9.04372 0.232971 8.93652 0Z"
          fill={useGradient ? "url(#flame_gradient)" : "currentColor"}
        />
      </g>
      <defs>
        <linearGradient
          id="flame_gradient"
          x1="13.973"
          y1="-25.3993"
          x2="52.2704"
          y2="-11.707"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <clipPath id="clip0_flame">
          <rect width="26.0308" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
