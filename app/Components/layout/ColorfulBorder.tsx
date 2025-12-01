import React from 'react';

export default function ColorfulBorder() {
  // Exact Gamocha pattern: traditional Assamese design with red-amber-white
  return (
    <div className="w-full h-3 relative overflow-hidden">
      <div className="absolute inset-0 flex">
        {[...Array(400)].map((_, i) => (
          <div key={i} className="flex-shrink-0 flex">
            <div className="w-4 h-3 bg-gradient-to-r from-red-700 via-red-600 to-red-700" />
            <div className="w-2 h-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
            <div className="w-1 h-3 bg-white" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-around">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white/80 rotate-45" />
        ))}
      </div>
    </div>
  );
}
