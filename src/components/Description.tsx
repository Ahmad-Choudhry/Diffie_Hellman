import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
  title?: string; // ✅ add this
}

const Description: React.FC<DescriptionProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-4xl bg-black border border-white rounded-none p-6 shadow-inner shadow-white/10 min-w-0 
                    bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:14px_14px]">
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-center border-b border-white pb-2">
          {title}
        </h2>
      )}
      <div className="text-left text-sm font-mono whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
};

export default Description;
