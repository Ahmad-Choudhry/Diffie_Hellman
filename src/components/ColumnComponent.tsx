import React from "react";

interface ColumnComponentProps {
  title: string;
  children?: React.ReactNode;
}

const ColumnComponent: React.FC<ColumnComponentProps> = ({ title, children }) => {
  return (
    <div className="bg-black border border-white rounded-none p-6 shadow-inner shadow-white/10 h-full min-w-0 
                    bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:14px_14px]">
      <h2 className="text-xl font-semibold mb-4 text-center border-b border-white pb-2">
        {title}
      </h2>
      <div className="text-left text-sm font-mono overflow-x-auto whitespace-nowrap">
        {children ?? <p className="opacity-80">Content goes here</p>}
      </div>
    </div>
  );
};

export default ColumnComponent;
