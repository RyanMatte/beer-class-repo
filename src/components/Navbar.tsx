import React from "react";

export default function Navbar() {
  const textColor = "#000000"; // Placeholder since bgColor is not used
  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 overflow-hidden"
      style={{
        minHeight: "96px",
        backgroundColor: "transparent", // bottom color that shows through the translucent part of the foam
      }}
      aria-label="Beer foam navbar"
    >
      {/* Foam image fills the navbar and fades out toward the bottom so bgColor shows through */}
      <img
        src="/images/foam.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          zIndex: 10,
          // mask so the top of the image is fully visible and the bottom fades to transparent
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />

      {/* Optional subtle tint so foam slightly matches page coloring (very low opacity) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 15,
          background: textColor ? `${textColor}10` : "transparent", // low-opacity tint (hex/rgba + 10 for ~6% opacity)
        }}
      />

      {/* Empty content area (keeps spacing). If you want title/links, place them inside this div */}
      <div className="relative z-20 w-full px-8 py-6 flex items-center justify-between" style={{ minHeight: "140px" }}>
      </div>
    </nav>
      );
}