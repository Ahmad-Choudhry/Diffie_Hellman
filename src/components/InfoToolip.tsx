import React from "react";
import { Info } from "lucide-react";

interface InfoTooltipProps {
  text: string;
  link?: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ text, link }) => (
  <div className="relative group inline-block ml-1 cursor-pointer">
    <Info size={16} className="text-gray-400 group-hover:text-blue-400" />
    <div className="absolute z-10 hidden group-hover:block bg-gray-900 text-white text-xs rounded p-2 w-64 top-full border border-gray-600">
      {text}
      {link && (
        <div className="mt-1 text-blue-400 underline">
          <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      )}
    </div>
  </div>
);

export default InfoTooltip;
