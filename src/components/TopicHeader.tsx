import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/cryptoanimation.json";

interface TopicHeaderProps {
  title: string;
  subtitle?: string;
}

const TopicHeader: React.FC<TopicHeaderProps> = ({ title, subtitle }) => (
  <div className="w-full flex flex-col items-center justify-center py-6">
    <div className="flex items-center gap-4">
      {/* <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "56px", width: "56px" }}
      /> */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white uppercase">
        <span className="text-[#646cff]">Topic:</span> {title}
      </h1>
    </div>
    {subtitle && (
      <p className="text-sm md:text-base text-slate-300 mt-2 font-mono text-center max-w-2xl">
        {subtitle}
      </p>
    )}
  </div>
);

export default TopicHeader;
