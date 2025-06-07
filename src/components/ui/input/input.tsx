import React, { FC } from "react";
import { search } from "../../../assets/icons";

interface InputProps {
  type: "text" | "password" | "email" | "number";
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="relative">
      <img src={search} alt="search icon" className="absolute top-2 left-4" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pl-[52px] pr-4 py-2 border rounded-xl bg-gray-100 focus:outline-none focus:ring ${className}`}
      />
    </div>
  );
};

export default Input;
