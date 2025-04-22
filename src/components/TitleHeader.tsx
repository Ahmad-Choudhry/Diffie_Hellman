import React from "react";

const TitleHeader: React.FC = () => (
  <div className="w-full text-center py-6">
    <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white uppercase">
      🔐 Diffie-Hellman Key Exchange Demo
    </h1>
    <p className="text-sm md:text-base text-slate-300 mt-1 font-mono">
      Simulating secure shared key generation in plain sight.
    </p>
  </div>
);

export default TitleHeader;
