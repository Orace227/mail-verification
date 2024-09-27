// components/CurvedUnderline.js
import React from "react";

const CurvedUnderline = ({ mainKeyword }) => {
  return (
    <div className="relative inline-block">
      <span className="text-black">{mainKeyword}</span>
      <svg
        className="absolute left-0 -bottom-1 w-full h-2 "
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q50,20 100,10"
          stroke="url(#gradient)"
          strokeWidth="9"
          fill="transparent"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#a855f7", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#f97316", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CurvedUnderline;
