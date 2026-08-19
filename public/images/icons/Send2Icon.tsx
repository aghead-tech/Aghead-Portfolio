import React from "react";

interface Send2IconProps {
  size?: number;
  color?: string;
  className?: string;
}

function Send2Icon({
  size = 24,
  color = "currentColor",
  className = "",
}: Send2IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <g clipPath="url(#clip0_126_437)">
        <path
          d="M10.3533 24.9159C10.5812 24.9387 10.8081 24.9403 11.03 24.9223C12.5163 24.8026 14.108 23.7599 14.314 21.7011L14.9504 15.3389L21.2977 15.9738C23.3583 16.181 24.6958 14.8264 25.1076 13.3922C25.5193 11.9591 25.104 10.1025 23.2493 9.18336L7.61288 0.792289C6.20243 0.093424 4.60251 0.244072 3.41042 1.25026C2.21634 2.22626 1.72245 3.7577 2.12022 5.24669L7.24822 22.3018C7.72484 23.9756 9.05179 24.7857 10.3533 24.9159Z"
          fill="currentColor"
        />
      </g>

      <defs>
        <clipPath id="clip0_126_437">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-0.995034 -0.0995369 -0.0995369 0.995034 26.2697 2.38892)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Send2Icon;
