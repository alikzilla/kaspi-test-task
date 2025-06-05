import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <section
      className={`p-4 rounded-xl bg-white border border-[#F2F2F2] ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;
