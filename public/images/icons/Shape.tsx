"use client";

import { useId } from "react";

interface ShapeProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Shape({
  width = 602,
  height = 583,
  className = "",
}: ShapeProps) {
  const id = useId();
  const paintId = `paint0_${id}`;
  const maskId = `mask0_${id}`;
  const clipId = `clip0_${id}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 602 583"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M455.848 412.195C558.894 336.718 557.113 246.541 497.868 165.656C438.624 84.7714 253.668 90.3745 150.622 165.851C47.576 241.328 76.353 375.268 135.597 456.153C194.842 537.038 352.802 487.671 455.848 412.195Z"
        fill={`url(#${paintId})`}
      />
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="602"
        height="583"
      >
        <g opacity="0.08">
          <g clipPath={`url(#${clipId})`}>
            <path
              d="M455.16 210.488C452.55 237.471 441.61 295.432 418.73 311.414C390.129 331.392 377.337 312.514 377.061 280.687C376.785 248.861 353.131 240.322 340.608 275.015C328.085 309.709 340.562 371.598 308.939 385.137C283.64 395.969 279.998 368.786 284.484 351.749"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M359.091 294.264C357.076 302.627 353.08 324.002 353.218 342.594C353.392 365.833 344.501 408.896 309.26 419.035C281.067 427.147 277.879 408.263 269.991 389.941"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M301.468 356.783C301.546 353.603 303.396 342.109 312.242 327.478C321.088 312.847 294.501 291.434 297.4 281.429C300.298 271.424 315.691 275.91 322.568 262.994C325.782 256.958 323.267 247.011 321.277 241.658"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M184.861 369.103C199.777 372.157 241.571 387.504 248.305 379.439C256.721 369.357 246.421 357.423 204.375 347.759C162.329 338.094 131.042 327.162 139.537 314.935C148.031 302.709 199.375 289.816 249.336 321.524C291.78 348.462 294.956 308.356 279.257 299.608C268.28 293.492 252.679 273.831 280.924 264.543C309.168 255.256 308.563 242.375 290.87 227.127C276.716 214.928 212.557 196.431 182.247 188.707"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M269.478 191.591C293.079 209.497 344.428 240.533 361.021 221.425C381.763 197.542 315.681 189.018 335.697 173.071C355.712 157.124 394.614 190.787 420.858 166.032C441.619 146.449 413.987 111.503 383.019 104.326C319.87 89.6915 332.233 70.6133 344.427 61.6821C375.892 38.6352 383.661 63.3602 405.945 37.5079"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M337.468 122.734C332.62 140.115 319.511 175.643 305.859 178.7C288.794 182.522 279.155 164.783 298.09 128.127C317.026 91.4704 317.038 47.9833 281.043 66.718C245.049 85.4528 260.905 152.136 235.261 138.245C214.746 127.132 224.257 104.209 231.576 94.1362"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M414.241 278.422C419.918 256.111 426.938 210.852 409.606 208.303C392.274 205.755 384.452 231.902 382.708 245.294"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M450.668 177.499C457.643 167.065 473.354 152.178 480.401 176.111C489.209 206.027 466.472 246.302 469.47 253.801C472.467 261.299 472.388 264.48 495.688 244.371C518.989 224.263 528.276 299.269 505.382 345.904"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M381.279 341.3C375.637 362.197 369.508 405.711 390.128 412.583C415.902 421.174 426.474 384.645 438.637 343.049C450.799 301.453 466.819 278.646 481.502 298.693C498.832 322.353 477.16 388.743 446.382 432.532C415.603 476.321 391.661 479.443 358.42 451.046"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M373.018 431.968C365.462 422.943 348.518 418.379 336.85 427.001C322.265 437.779 328.425 449.162 334.354 465.791C341.795 486.658 334.128 516.16 305.926 498.494C283.364 484.361 262.302 461.002 254.592 451.089"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M311.797 468.371C293.497 450.596 261.387 417.008 245.479 425.525C225.594 436.172 224.214 457.232 240.651 478.851C257.089 500.47 238.05 528.711 222.98 516.141C207.911 503.572 199.743 475.049 189.163 469.971C179.916 465.534 170.774 473.733 166.115 490.589"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M175.233 412.872L171.373 412.466"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M152.559 227.36C146.224 224.682 132.065 223.734 126.118 241.368C118.685 263.411 138.59 277.537 148.925 282.076C159.259 286.614 115.452 286.567 111.557 313.357C107.258 342.923 141.269 355.9 156.33 360.801C171.39 365.701 135.628 357.135 127.919 392.763C120.21 428.39 136.988 435.596 143.077 443.91"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M183.121 124.736C172.757 125.047 152.048 130.023 152.127 147.438C152.227 169.206 137.724 186.462 135.43 205.002"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M179.38 275.283C170.624 271.885 153.156 263.393 153.323 256.609C153.532 248.129 167.005 239.445 185.333 248.913C203.661 258.38 227.477 274.668 239.791 248.455C249.642 227.485 212.456 214.181 182.854 210.269C168.463 206.025 145.735 193.737 166.527 176.43C192.517 154.797 211.878 183.276 229.407 182.117C246.937 180.958 271.192 165.116 288.766 97.6666"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.437 238.549C32.4569 251.187 58.5695 272.479 82.8607 256.541C107.152 240.603 114.685 227.09 115.415 222.326"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M112.135 274.875C96.4578 284.649 70.1114 310.747 90.1413 336.955C115.179 369.714 115.047 393.302 107.342 405.087"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M252.526 404.616C244.314 400.701 223.704 392.791 213.934 423.034"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M264.252 355.174C249.855 344.036 212.253 321.86 177.029 322.264"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M275.625 240.429C264.575 244.046 251.119 260.824 247.869 272.199C243.806 286.418 246.698 298.157 256.572 306.355"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M223.639 286.981L202.622 279.038"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M220.587 244.976C217.193 239.236 201.868 230.494 177.993 226.807"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M239.365 165.392C227.714 164.751 203.998 158.686 202.349 139.554"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M386.082 194.466L365.064 186.523"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M337.936 211.31L312.914 193.722"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M325.115 107.579L308.712 149.07"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M439.486 222.303C438.445 214.323 434.378 197.145 426.437 192.283"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M361.878 121.584C354.342 130.013 353.851 141.239 358.168 148.934"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M392.104 294.317L394.053 258.303"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M540.714 327.214C541.624 323.824 546.33 243.546 520.236 227.794C513.305 223.609 501.712 218.362 493.456 219.745"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M499.674 301.623C500.943 293.168 501.398 274.724 493.064 268.579"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M436.701 403.907C432.854 416.541 419.213 442.085 395.426 443.195"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M454.578 366.954L467.958 319.024"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M414.22 338.929L401.9 386.886"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M223.25 487.571L198.699 446.968"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M169.071 457.451L154.72 461.627"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M511.174 203.932L498.407 183.994"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="23.4624"
              cy="23.4624"
              r="23.4624"
              transform="matrix(0.590903 0.806743 0.806743 -0.590903 142.405 409.962)"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="15.8675"
              cy="15.8675"
              r="15.8675"
              transform="matrix(0.590903 0.806743 0.806743 -0.590903 369.62 138.503)"
              stroke="#F6F6F6"
              strokeWidth="10.7497"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          d="M455.818 412.216C558.864 336.74 557.083 246.562 497.838 165.678C438.594 84.7929 253.638 90.3961 150.592 165.873C47.5462 241.349 76.3232 375.29 135.568 456.175C194.812 537.059 352.772 487.693 455.818 412.216Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id={paintId}
          x1="-141.356"
          y1="631.949"
          x2="354.431"
          y2="939.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--theme-start)" />
          <stop offset="0.5" stopColor="var(--theme-mid, var(--theme-start))" />
          <stop offset="1" stopColor="var(--theme-end)" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="602" height="583" rx="18.6951" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
