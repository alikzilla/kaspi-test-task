import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { shevronDown } from "../../../assets/icons";

interface NavItemProps {
  title: string;
  url: string;
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navItems: NavItemProps[] = [
    { title: t("sidebar.home"), url: "/shop" },
    { title: t("sidebar.orders"), url: "/shop/orders" },
    { title: t("sidebar.delivery"), url: "/shop/delivery" },
    { title: t("sidebar.products"), url: "/shop/products" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="fixed md:hidden z-40 bottom-4 right-4 p-2 rounded-md bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed md:relative z-40 w-[200px] h-screen flex flex-col items-start justify-start gap-8 bg-white border md:border-none p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="flex items-center gap-2 font-bold">
          <span>{t("sidebar.title")}</span>
          <img src={shevronDown} alt="shevron down" className="w-4 h-4" />
        </h1>

        <nav className="flex flex-col items-start justify-start gap-5">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`${
                location.pathname === item.url ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => navigate(item.url)}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
