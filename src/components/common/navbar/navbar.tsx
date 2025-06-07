import { useLocation, useNavigate } from "react-router";

interface NavItemProps {
  title: string;
  url: string;
}

const navItems: NavItemProps[] = [
  {
    title: "Магазин",
    url: "/shop",
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

  const isActive = location.pathname.startsWith(item.url);

  return (
    <button
      className={`relative py-2 px-4 text-sm md:text-base ${
        isActive ? "text-red-500" : "text-gray-500"
      }`}
      onClick={() => navigate(item.url)}
    >
      {item.title}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500" />
      )}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full h-auto md:h-[52px] px-4 md:px-10 overflow-x-auto whitespace-nowrap no-scrollbar">
      <div className="flex flex-nowrap gap-2 md:gap-0 items-center min-w-max">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
