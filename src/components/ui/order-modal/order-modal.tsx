import { FC, useEffect } from "react";
import { Order } from "../../../core/types/order";
import Badge from "../badge/badge";
import Button from "../button/button";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

const OrderModal: FC<OrderModalProps> = ({ isOpen, onClose, order }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !order) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="icon"
          className="absolute top-2 right-3"
          onClick={onClose}
        >
          &#10005;
        </Button>

        <div className="mb-2">
          <h2 className="text-xl font-bold mb-2">
            Заказ № {order.orderNumber}
          </h2>
          <Badge title={order.status.title} type={order.status.type} />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Товары:</h3>
          <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
            {order.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
