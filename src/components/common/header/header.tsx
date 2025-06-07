import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card } from "../../ui";
import Navbar from "../navbar/navbar";

import { settings, unavailable, user } from "../../../assets/icons";
import LanguageSelector from "../language-selector/language-selector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => console.log("Click");

  return (
    <header>
      <section className="w-full relative bg-[#F2F2F2] px-4 pt-4 md:px-10 md:py-6 flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="md:hidden w-full mb-2 flex justify-between items-center">
          <h2 className="font-bold text-lg">{t("header.profile")}</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-blue-600 text-sm font-medium"
          >
            {isOpen ? t("header.hide") : t("header.show")}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out w-full md:flex md:flex-row md:justify-between md:gap-4 ${
            isOpen ? "max-h-[600px] mb-4" : "max-h-0 mb-0"
          } md:max-h-full md:mb-0`}
        >
          <Card className="flex flex-col gap-3 w-full md:w-auto mb-4 md:mb-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex gap-3 items-start">
                <img src={user} alt="user" className="w-10 h-10" />
                <span className="font-bold text-wrap">
                  Алтынбике <br /> Абилькаримова Алпысбаевна
                </span>
              </div>
              <LanguageSelector />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#757575]">
              <p>{t("header.birthday")}</p>
              <p>{t("header.city")}</p>
              <p className="flex items-center gap-1">
                <img src={unavailable} alt="unavailable" />
                {t("header.status")}
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button variant="secondary" onClick={handleClick}>
              <img src={settings} alt="settings icon" />
              {t("header.settings")}
            </Button>
            <Button onClick={handleClick}>
              <span className="w-full sm:w-[150px]">
                {t("header.selectTheme")}
              </span>
              <span className="text-[#A7C4F2] ml-2">T</span>
            </Button>
          </div>
        </div>
      </section>

      <Navbar />
    </header>
  );
};

export default Header;
