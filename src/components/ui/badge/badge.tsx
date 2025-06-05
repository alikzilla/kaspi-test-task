import { FC, ReactNode } from "react";

interface BadgeProps {
  title: ReactNode;
  status: "OK" | "BAD";
}

const Badge: FC<BadgeProps> = ({ title, status }) => {
  return (
    <div
      className={`px-2 flex items-center justify-center gap-1 rounded-lg ${
        status === "OK" ? "bg-[#D5EEDB] text-[#328845]" : "bg-red-500"
      }`}
    >
      <span className="w-2 h-2 rounded-full bg-[#328845] inline-block" />
      {title}
    </div>
  );
};

export default Badge;
