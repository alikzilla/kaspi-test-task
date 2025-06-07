import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Input, OrderItem } from "../../components/ui";
import { Order } from "../../core/types/order";

import { percent, settings, starHalf } from "../../assets/icons";

const Shop = () => {
  const [orderItems, setOrderItems] = useState<string>("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/orders.json`)
      .then((res) => res.json())
      .then((data: Order[]) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке заказов", err);
        setLoading(false);
      });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Click");
  };

  const handleOrderItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderItems(e.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.items.some((item) =>
      item.toLowerCase().includes(orderItems.toLowerCase())
    )
  );

  return (
    <section className="w-full md:w-[800px] max-w-screen-lg flex flex-col gap-5 px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[25px]">
        <Card className="w-full md:w-[250px] flex flex-col items-start justify-start gap-[18px]">
          <div className="w-full flex items-center justify-between">
            <h2 className="font-bold">Магазин</h2>
            <Button variant="icon" onClick={handleClick}>
              <img src={settings} alt="settings icon" />
            </Button>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="font-medium">ИП Liverpool</p>
            <Badge title="Активен" type="OK" />
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="font-medium">Касса</p>
            <Badge title="Подключена" type="OK" />
          </div>
        </Card>

        <Card className="w-full md:w-[250px] flex flex-col items-start justify-start gap-[18px]">
          <h2 className="font-bold">Показатели качества</h2>
          <div className="flex item-start gap-8">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex items-start gap-[2px]">
                <span className="text-xl font-bold">4.5</span>
                <img src={starHalf} alt="Half of star" />
              </div>
              <p className="text-sm text-gray-600 mb-2">144 оценок</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex items-start gap-[2px]">
                <span className="text-xl font-bold">4.2</span>
                <img src={percent} alt="Percent" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Доля отмен</p>
            </div>
          </div>
        </Card>

        <Card className="w-full md:w-[250px] flex flex-col items-start justify-start gap-[18px]">
          <h2 className="font-bold">Доставка</h2>
          <ul className="text-sm text-[#757575] space-y-[6px]">
            <li className="w-auto cursor-pointer transition-all duration-100 hover:text-gray-900">
              Самовывоз
            </li>
            <li className="w-auto cursor-pointer transition-all duration-100 hover:text-gray-900">
              Моя доставка
            </li>
            <li className="w-auto cursor-pointer transition-all duration-100 hover:text-gray-900">
              Экспресс-доставка
            </li>
          </ul>
        </Card>
      </div>

      <Card className="w-full p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Заказы</h1>

        <div className="mb-4">
          <Input
            type="text"
            placeholder="Введите название товара"
            value={orderItems}
            onChange={handleOrderItems}
            className="w-full"
          />
        </div>

        {loading ? (
          <p>Загрузка...</p>
        ) : filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <OrderItem
              key={index}
              orderNumber={order.orderNumber}
              items={order.items}
              status={order.status}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">Заказов не найдено</p>
        )}
      </Card>
    </section>
  );
};

export default Shop;
