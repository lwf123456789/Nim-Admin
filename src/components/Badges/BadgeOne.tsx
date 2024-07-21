import React from "react";

interface BadgeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  rounded?: boolean;
}

const BadgeOne: React.FC<BadgeProps> = ({
  text,
  bgColor = "bg-primary",
  textColor = "text-white",
  borderColor,
  rounded = false,
}) => {
  return (
    <button
      className={`inline-flex px-2 py-1 text-sm font-medium ${bgColor} ${textColor} ${borderColor ? `border ${borderColor}` : ''} ${rounded ? 'rounded-full' : 'rounded'} hover:opacity-80`}
    >
      {text}
    </button>
  );
};

export default BadgeOne;
