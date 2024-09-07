import React from "react";

export default function CloseIcon() {
  return (
    // <div
    //   style={{
    //     position: "fixed",
    //     bottom: "32px",
    //     right: "32px",
    //     zIndex: 1000,
    //     cursor: "pointer",
    //   }}
    // >
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      <g filter="url(#filter0_d_1_4939)">
        <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
        <path
          d="M27 27.0012L47 47.0006M27 47.0006L47 27.0012"
          stroke="#0F0F0F"
          strokeWidth="3.99994"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <filter
          id="filter0_d_1_4939"
          x="0"
          y="0"
          width="76"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4939"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_4939"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    // </div>
  );
}
