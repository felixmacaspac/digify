import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Pacman-style loader */}
        <div className="w-12 h-12 border-8 border-t-primary border-r-primary border-b-primary border-l-transparent rounded-full animate-spin" />

        {/* Retro Loading Text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-bold text-lg text-primary animate-pulse">
          LOADING...
        </div>
      </div>
    </div>
  );
};

export default Loading;
