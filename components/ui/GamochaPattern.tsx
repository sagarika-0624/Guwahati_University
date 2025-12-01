import React from 'react';

export default function GamochaPattern({ className = "", variant = "horizontal" }: { className?: string, variant?: "horizontal" | "vertical" }) {
    if (variant === "horizontal") {
        return (
            <div className={`w-full h-3 relative overflow-hidden ${className}`}>
                <div className="absolute inset-0 flex">
                    {[...Array(50)].map((_, i) => (
                        <div key={i} className="flex-shrink-0 flex">
                            <div className="w-4 h-3 bg-gradient-to-r from-red-700 via-red-600 to-red-700" />
                            <div className="w-2 h-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                            <div className="w-1 h-3 bg-white" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-around">
                    {[...Array(25)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white/80 rotate-45" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`w-3 h-full relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 flex flex-col">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="flex-shrink-0 flex flex-col">
                        <div className="w-3 h-4 bg-gradient-to-b from-red-700 via-red-600 to-red-700" />
                        <div className="w-3 h-2 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-400" />
                        <div className="w-3 h-1 bg-white" />
                    </div>
                ))}
            </div>
        </div>
    );
}
