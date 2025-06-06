import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Input, OrderItem } from "../../components/ui";

import { percent, settings, starHalf } from "../../assets/icons";
import { Order } from "../../core/types/order";

const Shop = () => {
  const [orderNumber, setOrderNumber] = useState<string | undefined>();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/orders.json")
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

  if (loading) return <p>Загрузка...</p>;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Click");
  };

  const handleOrderNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderNumber(e.target.value);
  };

  return (
    <section className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="w-[250px] flex flex-col items-start justify-start gap-[18px]">
          <div className="w-full flex items-center justify-between">
            <h2 className="font-bold">Магазин</h2>
            <Button variant="icon" onClick={() => handleClick}>
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

        <Card className="w-[250px] flex flex-col items-start justify-start gap-[18px]">
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

        <Card className="w-[250px] flex flex-col items-start justify-start gap-2">
          <h2 className="font-bold">Доставка</h2>
          <ul className="text-sm text-[#757575] space-y-[6px]">
            <li>Самовывоз</li>
            <li>Моя доставка</li>
            <li>Экспресс-доставка</li>
          </ul>
        </Card>
      </div>

      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Заказы</h1>

        <div className="mb-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Введите номер заказа"
              onChange={handleOrderNumber}
            />
          </div>
        </div>

        {loading ? (
          <p>Загрузка</p>
        ) : (
          orders.map((order, index) => (
            <OrderItem
              key={index}
              orderNumber={order.orderNumber}
              items={order.items}
              status={order.status}
            />
          ))
        )}
      </Card>
    </section>
  );
};

export default Shop;
