import React from "react";

export default function EditIcon() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 1000, // Ensures it appears above other content
        cursor: "pointer",
      }}
    >
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_4860)">
          <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
          <g clipPath="url(#clip0_1_4860)">
            <path
              d="M44.7452 22H27.323C26.04 22 25 23.04 25 24.323V49.8755C25 51.1584 26.04 52.1984 27.323 52.1984H44.7452C46.0281 52.1984 47.0682 51.1584 47.0682 49.8755V24.323C47.0682 23.04 46.0281 22 44.7452 22Z"
              fill="#0F0F0F"
            />
            <path
              d="M28.4844 28.969L42.4222 28.969"
              stroke="#F8F8F8"
              strokeWidth="1.74222"
              strokeLinecap="round"
            />
            <path
              d="M28.4844 33.615H42.4222"
              stroke="#F8F8F8"
              strokeWidth="1.74222"
              strokeLinecap="round"
            />
            <path
              d="M28.4844 38.261H42.4222"
              stroke="#F8F8F8"
              strokeWidth="1.74222"
              strokeLinecap="round"
            />
            <path
              d="M28.4844 42.9067H35.4533"
              stroke="#F8F8F8"
              strokeWidth="1.74222"
              strokeLinecap="round"
            />
            <path
              d="M50.2995 35.6118L41.5793 50.7155L41.9482 55.0538C42.0167 55.8594 42.8669 56.3503 43.5989 56.0068L47.5404 54.1571L56.2606 39.0535C56.902 37.9424 56.5214 36.5217 55.4103 35.8803L53.4727 34.7616C52.3616 34.1201 50.9409 34.5008 50.2995 35.6118Z"
              fill="#0F0F0F"
              stroke="#F8F8F8"
              strokeWidth="1.16148"
              strokeLinecap="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1_4860"
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
              result="effect1_dropShadow_1_4860"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_4860"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_1_4860">
            <rect
              width="32"
              height="34"
              fill="white"
              transform="translate(25 22)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
