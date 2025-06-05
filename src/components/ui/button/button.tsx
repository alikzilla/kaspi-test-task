import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-8 py-2 flex items-center justify-between bg-[#0075CA] text-white rounded-lg ${className}`}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export default Button;
