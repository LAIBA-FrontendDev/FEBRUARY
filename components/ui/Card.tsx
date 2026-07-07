import React from "react";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-white/5 border border-white/10 
      backdrop-blur-md rounded-xl p-5 
      hover:scale-105 transition-all duration-300 
      hover:shadow-lg hover:shadow-yellow-500/20"
    >
      {children}
    </div>
  );
}
