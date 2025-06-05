import { useLocation, useNavigate } from "react-router";

interface NavItemProps {
  title: string;
  url: string;
}

const navItems: NavItemProps[] = [
  {
    title: "Магазин",
    url: "/",
  },
  {
    title: "Счета",
    url: "/accounts",
  },
  {
    title: "Депозиты",
    url: "/deposits",
  },
  {
    title: "Red и Kredit",
    url: "/redAndKredit",
  },
  {
    title: "Рассрочка",
    url: "/installmentPlan",
  },
  {
    title: "Сообщения",
    url: "/messages",
  },
];

const NavItem = ({ item }: { item: NavItemProps }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      className={`py-3 px-[18px] flex items-center justify-center ${
        location.pathname === item.url
          ? "text-red-500 border-b-2 border-red-500"
          : "text-gray-500"
      }`}
      onClick={() => navigate(item.url)}
    >
      {item.title}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="h-[52px] px-10 flex items-center">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </nav>
  );
};

export default Navbar;
