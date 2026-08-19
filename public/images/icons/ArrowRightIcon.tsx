import React, { useId } from "react";

interface ArrowRightIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  useGradient?: boolean;
}

function ArrowRightIcon({
  width = 25,
  height = 10,
  color = "currentColor",
  className = "",
  useGradient = false,
}: ArrowRightIconProps) {
  const gradientId = useId();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      {useGradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--theme-start)" />
            <stop offset="100%" stopColor="var(--theme-end)" />
          </linearGradient>
        </defs>
      )}
      <g clipPath="url(#clip0)">
        <path
          d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979853C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665H0.598757C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335H19.633L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
          fill={useGradient ? `url(#${gradientId})` : "currentColor"}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="25" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRightIcon;
