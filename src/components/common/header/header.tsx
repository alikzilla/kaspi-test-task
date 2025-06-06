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
      <section className="w-full h-[156px] flex items-start justify-between pl-10 pr-6 py-6 bg-[#F2F2F2]">
        <Card className="flex flex-col items-start gap-3">
          <div className="w-full flex items-start justify-between gap-[12px]">
            <img src={user} alt="user" />
            <span className="w-[250px] font-bold text-wrap mr-6">
              Алтынбике <br /> Абилькаримова Алпысбаевна
            </span>
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[#757575]">18.04.1994, 30 лет</p>

            <p className="text-[#757575]">Алматы</p>

            <p className="text-[#757575] flex items-center gap-1">
              <img src={unavailable} alt="unavailable" />
              Неактивен
            </p>
          </div>
        </Card>

        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => handleClick}>
            <img src={settings} alt="settings icon" />
            Настройки
          </Button>
          <Button onClick={() => handleClick}>
            <span className="w-[150px]">Выбрать тематику</span>{" "}
            <span className="text-[#A7C4F2] ml-2">T</span>
          </Button>
        </div>
      </section>

      <Navbar />
    </header>
  );
};

export default Header;
