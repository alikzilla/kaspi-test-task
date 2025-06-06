import { FC } from "react";
import { Order } from "../../../core/types/order";
import Badge from "../badge/badge";

const OrderItem: FC<Order> = ({ orderNumber, items, status }) => {
  return (
    <div className="pt-4">
      <p className="text-sm font-medium mb-1">{items.toString()}</p>
      <Badge title={status.title} type={status.type} />
    </div>
  );
};

export default OrderItem;
