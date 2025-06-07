import { Button, Card } from "../../ui";
import Navbar from "../navbar/navbar";

import { settings, unavailable, user } from "../../../assets/icons";
import LanguageSelector from "../language-selector/language-selector";

const Header = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <header>
      <section className="w-full bg-[#F2F2F2] px-4 md:px-10 py-6 flex flex-col md:flex-row gap-4 items-start md:items-start justify-between">
        {/* Левая карточка */}
        <Card className="flex flex-col gap-3 w-full md:w-auto">
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

        {/* Кнопки справа */}
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
      </section>

      <Navbar />
    </header>
  );
};

export default Header;
