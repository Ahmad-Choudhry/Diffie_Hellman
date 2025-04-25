import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/cryptoanimation.json";

const TitleHeader: React.FC = () => (
  <div className="w-full flex flex-col items-center justify-center py-6">
    <div className="flex items-center gap-4">
      {/* <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "64px", width: "64px" }}
      /> */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white uppercase">
        Diffie-Hellman Key Exchange Demo
      </h1>
    </div>
    <p className="text-sm md:text-base text-slate-300 mt-2 font-mono text-center max-w-xl">
      Simulating secure shared key generation in plain sight.
    </p>
  </div>
);

export default TitleHeader;
