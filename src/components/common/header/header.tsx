import { useState } from "react";
import { Button, Card } from "../../ui";
import Navbar from "../navbar/navbar";

import { settings, unavailable, user } from "../../../assets/icons";
import LanguageSelector from "../language-selector/language-selector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => console.log("Click");

  return (
    <header>
      <section className="w-full bg-[#F2F2F2] px-4 md:px-10 pt-3 flex flex-col md:flex-row gap-4 items-start justify-between relative">
        <div className="md:hidden w-full mb-2 flex justify-between items-center">
          <h2 className="font-bold text-lg">Профиль</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-blue-600 text-sm font-medium"
          >
            {isOpen ? "Скрыть" : "Показать"}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out w-full md:flex md:flex-row md:gap-4 ${
            isOpen ? "max-h-[500px] mb-4" : "max-h-0 mb-0"
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
              <p>18.04.1994, 30 лет</p>
              <p>Алматы</p>
              <p className="flex items-center gap-1">
                <img src={unavailable} alt="unavailable" />
                Неактивен
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button variant="secondary" onClick={handleClick}>
              <img src={settings} alt="settings icon" />
              Настройки
            </Button>
            <Button onClick={handleClick}>
              <span className="w-full sm:w-[150px]">Выбрать тематику</span>
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
