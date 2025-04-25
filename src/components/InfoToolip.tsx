import React from "react";
import { Info } from "lucide-react";

interface InfoTooltipProps {
  text: string;
  link?: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ text, link }) => (
  <span className="relative group inline-block ml-1 align-middle">
    <Info size={16} className="text-gray-400 group-hover:text-blue-400" />
    <span className="absolute z-10 hidden group-hover:block bg-gray-900 text-white text-xs rounded p-2 w-64 top-full border border-gray-600">
      {text}
      {link && (
        <span className="mt-1 block text-blue-400 underline">
          <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
        </span>
      )}
    </span>
  </span>
);

export default InfoTooltip;
