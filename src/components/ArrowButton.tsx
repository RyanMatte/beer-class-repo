import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
textColor: string;
}

export default function ArrowButton({ direction, onClick, textColor }: ArrowButtonProps) {
const Icon = direction === "left" ? ArrowLeft : ArrowRight;
return (
    <div>
        <button
            onClick={onClick}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition shadow-xl backdrop-blur-lg border border-white/30 flex items-center justify-center group"
            aria-label={direction === "left" ? "Previous Beer" : "Next Beer"}
            style={{
                color: textColor,
                background: "rgba(255,255,255,0.12)",
                boxShadow: "0 4px 24px 0 rgba(255,255,255,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(16px) saturate(180%)",
                transition: "transform 0.2s cubic-bezier(.4,0,.2,1), box-shadow 0.2s cubic-bezier(.4,0,.2,1)",
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08) translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px 0 rgba(255,255,255,0.22), 0 3px 12px 0 rgba(0,0,0,0.14)";
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1) translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px 0 rgba(255,255,255,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)";
            }}
        >
            <Icon size={32} className="transition-transform group-hover:scale-110" />
        </button>
    </div>
);

}