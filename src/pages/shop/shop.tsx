import { Badge, Card } from "../../components/ui";
import starHalfSvg from "../../assets/images/star-half.svg";
import percent from "../../assets/images/percent.svg";

const Shop = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="w-[250px] flex flex-col items-start justify-start gap-[18px]">
          <h2 className="font-bold">Магазин</h2>
          <div className="w-full flex items-center justify-between">
            <p className="font-medium">ИП Liverpool</p>
            <Badge title="Активен" status="OK" />
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="font-medium">Касса</p>
            <Badge title="Подключена" status="OK" />
          </div>
        </Card>

        <Card className="w-[250px] flex flex-col items-start justify-start gap-[18px]">
          <h2 className="font-bold">Показатели качества</h2>

          <div className="flex item-start gap-8">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex items-start gap-[2px]">
                <span className="text-xl font-bold">4.5</span>
                <img src={starHalfSvg} alt="Half of star" />
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
            <input
              type="text"
              placeholder="412345678"
              className="w-full pl-10 pr-4 py-2 border rounded bg-gray-100 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm font-medium mb-1">
            Advanti T02-C03 универсальный красный, черный
          </p>
          <Badge title="Выдан" status="OK" />
        </div>
      </Card>
    </section>
  );
};

export default Shop;
