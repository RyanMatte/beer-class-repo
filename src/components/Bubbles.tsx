// Generate bubbles!
const bubbles = Array.from({ length: 50 }, () => {
  const size = 10 + Math.random() * 8; // random size between 8 and 16
  return {
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.2,
    size: size,
  };
});

export default function Bubbles() {
    return (
        <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ overflow: "visible", width: "100vw", height: "100vh" }}
      >
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: "-40px",
              opacity: bubble.opacity,
              filter: "blur(2px)",
              animation: `rise ${bubble.duration}s linear ${bubble.delay}s infinite`,
              willChange: "transform",
            }}
          />
        ))}
        <style>{`
          @keyframes rise {
            0% { transform: translateY(0); opacity: 0.2; }
            10% { opacity: 0.4; }
            90% { opacity: 0.4; }
            100% { transform: translateY(-120vh); opacity: 0.2; }
          }
        `}</style>
      </div>
    );
}