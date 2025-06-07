import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

interface NavItemProps {
  title: string;
  url: string;
}

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navItems: NavItemProps[] = [
    { title: t("navbar.shop"), url: "/shop" },
    { title: t("navbar.accounts"), url: "/accounts" },
    { title: t("navbar.deposits"), url: "/deposits" },
    { title: t("navbar.redAndKredit"), url: "/redAndKredit" },
    { title: t("navbar.installmentPlan"), url: "/installmentPlan" },
    { title: t("navbar.messages"), url: "/messages" },
  ];

  const NavItem = ({ item }: { item: NavItemProps }) => {
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
