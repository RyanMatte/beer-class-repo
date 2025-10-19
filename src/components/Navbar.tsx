import React from "react";

export default function Navbar() {
  return (
    <nav
      className="w-full fixed top-0 left-0 z-0 overflow-hidden"
      style={{
        minHeight: "96px",
        backgroundColor: "transparent",
      }}
    >
      <img
        src="/images/foam.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          zIndex: 10,
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      {/* Spacer to prevent content jump */}
      <div style={{ minHeight: "140px" }}>
      </div>
    </nav>
      );
}