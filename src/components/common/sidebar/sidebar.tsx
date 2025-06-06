import { useLocation, useNavigate } from "react-router";
import { shevronDown } from "../../../assets/icons";

interface NavItemProps {
  title: string;
  url: string;
}

const navItems: NavItemProps[] = [
  {
    title: "Главная",
    url: "/shop",
  },
  {
    title: "Заказы",
    url: "/shop/orders",
  },
  {
    title: "Моя Доставка",
    url: "/shop/delivery",
  },
  {
    title: "Товары",
    url: "/shop/products",
  },
];

const NavItem = ({ item }: { item: NavItemProps }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      className={`${
        location.pathname === item.url ? "text-red-500 font-bold" : ""
      }`}
      onClick={() => navigate(item.url)}
    >
      {item.title}
    </button>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-[200px] flex flex-col items-start justify-start gap-8">
      <h1 className="flex items-center gap-2 font-bold">
        <span>ИП LIVERPOOL</span>
        <img src={shevronDown} alt="shevron down" />
      </h1>

      <nav className="flex flex-col items-start justify-start gap-5">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
