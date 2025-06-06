export interface OrderStatus {
  title: string;
  type: "OK" | "BAD";
}

export interface Order {
  orderNumber: string;
  items: string[];
  status: OrderStatus;
}
