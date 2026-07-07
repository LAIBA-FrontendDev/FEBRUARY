import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 
      bg-gradient-to-r from-[#3b2f2f] to-[#2a1f3d] 
      text-[#d4af37] hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30
      ${className}`}
    >
      {children}
    </button>
  );
}
