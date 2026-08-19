import React, { forwardRef } from "react";
import { LucideProps } from "lucide-react";

const DownloadIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 22, className = "", strokeWidth = 2, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M2.74951 15.5835C2.74951 16.436 2.74951 16.8622 2.84322 17.212C3.09751 18.1609 3.83876 18.9022 4.78777 19.1565C5.13747 19.2502 5.56371 19.2502 6.41618 19.2502H15.5829C16.4354 19.2502 16.8616 19.2502 17.2113 19.1565C18.1602 18.9022 18.9016 18.1609 19.1558 17.212C19.2495 16.8622 19.2495 16.436 19.2495 15.5835"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.125 10.5418C15.125 10.5418 12.087 14.6668 10.9999 14.6668C9.91296 14.6668 6.875 10.5418 6.875 10.5418M10.9999 13.7502V2.75012"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

DownloadIcon.displayName = "DownloadIcon";

export default DownloadIcon;
