import React, { useId } from "react";

interface APIsIconProps {
  width?: number;
  height?: number;
  className?: string;
  colorMode?: "theme" | "gradient";
}

function APIsIcon({
  width = 36,
  height = 36,
  className = "",
  colorMode = "theme",
}: APIsIconProps) {
  const baseGradientId = useId();
  const gradientIds = [
    `${baseGradientId}-0`,
    `${baseGradientId}-1`,
    `${baseGradientId}-2`,
    `${baseGradientId}-3`,
    `${baseGradientId}-4`,
    `${baseGradientId}-5`,
    `${baseGradientId}-6`,
  ];

  const baseColor =
    colorMode === "gradient" ? `url(#${gradientIds[0]})` : "currentColor";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 6C18.8284 6 19.5 5.32843 19.5 4.5C19.5 3.67157 18.8284 3 18 3C17.1716 3 16.5 3.67157 16.5 4.5C16.5 5.32843 17.1716 6 18 6Z"
        fill={`url(#${gradientIds[0]})`}
      />
      <path
        d="M30 13.5C30.8284 13.5 31.5 12.8284 31.5 12C31.5 11.1716 30.8284 10.5 30 10.5C29.1716 10.5 28.5 11.1716 28.5 12C28.5 12.8284 29.1716 13.5 30 13.5Z"
        fill={`url(#${gradientIds[1]})`}
      />
      <path
        d="M30 25.5C30.8284 25.5 31.5 24.8284 31.5 24C31.5 23.1716 30.8284 22.5 30 22.5C29.1716 22.5 28.5 23.1716 28.5 24C28.5 24.8284 29.1716 25.5 30 25.5Z"
        fill={`url(#${gradientIds[2]})`}
      />
      <path
        d="M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z"
        fill={`url(#${gradientIds[3]})`}
      />
      <path
        d="M6 25.5C6.82843 25.5 7.5 24.8284 7.5 24C7.5 23.1716 6.82843 22.5 6 22.5C5.17157 22.5 4.5 23.1716 4.5 24C4.5 24.8284 5.17157 25.5 6 25.5Z"
        fill={`url(#${gradientIds[4]})`}
      />
      <path
        d="M30 21.0001V15.0001C29.4199 15.0024 28.8517 14.8358 28.3647 14.5207C27.8777 14.2056 27.493 13.7555 27.2574 13.2254C27.0219 12.6953 26.9457 12.1081 27.0383 11.5355C27.1308 10.9628 27.388 10.4295 27.7785 10.0006L20.604 5.96558C20.347 6.43113 19.9698 6.81927 19.5118 7.08956C19.0539 7.35986 18.5318 7.50243 18 7.50243C17.4682 7.50243 16.9461 7.35986 16.4882 7.08956C16.0302 6.81927 15.653 6.43113 15.396 5.96558L8.2215 10.0006C8.612 10.4295 8.86921 10.9628 8.96174 11.5355C9.05426 12.1081 8.97811 12.6953 8.74256 13.2254C8.50702 13.7555 8.12227 14.2056 7.63527 14.5207C7.14827 14.8358 6.58006 15.0024 6 15.0001V21.0001C6.58006 20.9977 7.14827 21.1643 7.63527 21.4794C8.12227 21.7946 8.50702 22.2446 8.74256 22.7747C8.97811 23.3048 9.05426 23.892 8.96174 24.4647C8.86921 25.0373 8.612 25.5706 8.2215 25.9996L15.396 30.0346C15.5936 29.6845 15.8595 29.3777 16.178 29.1323C16.4965 28.887 16.8611 28.7082 17.25 28.6066V20.8936C16.543 20.711 15.9269 20.2769 15.517 19.6726C15.1072 19.0682 14.9319 18.3352 15.0239 17.6108C15.1159 16.8865 15.4689 16.2205 16.0168 15.7378C16.5647 15.2551 17.2698 14.9888 18 14.9888C18.7302 14.9888 19.4353 15.2551 19.9832 15.7378C20.5311 16.2205 20.8841 16.8865 20.9761 17.6108C21.0681 18.3352 20.8928 19.0682 20.483 19.6726C20.0731 20.2769 19.457 20.711 18.75 20.8936V28.6066C19.1391 28.7084 19.5037 28.8874 19.8222 29.133C20.1407 29.3786 20.4066 29.6857 20.604 30.0361L27.7785 26.0011C27.3875 25.5722 27.1299 25.0387 27.0371 24.4658C26.9443 23.8929 27.0203 23.3054 27.2559 22.775C27.4915 22.2447 27.8765 21.7944 28.3638 21.4792C28.8511 21.1639 29.4196 20.9975 30 21.0001Z"
        fill={baseColor}
      />
      <path
        d="M18 33C18.8284 33 19.5 32.3284 19.5 31.5C19.5 30.6716 18.8284 30 18 30C17.1716 30 16.5 30.6716 16.5 31.5C16.5 32.3284 17.1716 33 18 33Z"
        fill={`url(#${gradientIds[5]})`}
      />
      <path
        d="M18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z"
        fill={`url(#${gradientIds[6]})`}
      />
      <defs>
        <linearGradient
          id={gradientIds[0]}
          x1="18.1103"
          y1="0.883393"
          x2="22.1103"
          y2="2.86113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <linearGradient
          id={gradientIds[1]}
          x1="30.1103"
          y1="8.38339"
          x2="34.1103"
          y2="10.3611"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <linearGradient
          id={gradientIds[2]}
          x1="30.1103"
          y1="20.3834"
          x2="34.1103"
          y2="22.3611"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <linearGradient
          id={gradientIds[3]}
          x1="6.11034"
          y1="8.38339"
          x2="10.1103"
          y2="10.3611"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <linearGradient
          id={gradientIds[4]}
          x1="6.11034"
          y1="20.3834"
          x2="10.1103"
          y2="22.3611"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <linearGradient
          id={gradientIds[5]}
          x1="18.1103"
          y1="27.8834"
          x2="22.1103"
          y2="29.8611"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid)" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <linearGradient
          id={gradientIds[6]}
          x1="18.1103"
          y1="14.3834"
          x2="22.1103"
          y2="16.3611"
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

export default APIsIcon;
