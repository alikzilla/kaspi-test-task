import { FC } from "react";
import { OrderStatus } from "../../../core/types/order";

const Badge: FC<OrderStatus> = ({ title, type }) => {
  return (
    <div
      className={`px-2 inline-flex items-center justify-start gap-1 rounded-lg ${
        type === "OK"
          ? "bg-[#D5EEDB] text-[#328845]"
          : "bg-red-400 text-red-900"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full inline-block ${
          type === "OK" ? "bg-[#328845]" : "bg-red-900"
        }`}
      />
      {title}
    </div>
  );
};

export default Badge;
