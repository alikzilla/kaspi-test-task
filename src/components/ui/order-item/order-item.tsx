import { FC, useState } from "react";
import { Order } from "../../../core/types/order";
import { Badge, OrderModal } from "../";

const OrderItem: FC<Order> = ({ orderNumber, items, status }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div
        className="pt-4 cursor-pointer hover:bg-gray-100 transition rounded-xl p-2"
        onClick={handleOpen}
      >
        <p className="text-sm font-medium mb-1">{items.join(", ")}</p>
        <Badge title={status.title} type={status.type} />
      </div>

      <OrderModal
        isOpen={showModal}
        onClose={handleClose}
        order={{ orderNumber, items, status }}
      />
    </>
  );
};

export default OrderItem;
