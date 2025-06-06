import React, { FC, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "icon";

interface ButtonProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "px-4 py-2 bg-[#0075CA] text-white hover:bg-[#0062aa]",
  secondary: "px-4 py-2 bg-tansparent text-[#8F8F8F] hover:bg-gray-200",
  icon: "bg-transparent text-[#0075CA] p-2 hover:bg-gray-100",
};

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 rounded-lg transition
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
