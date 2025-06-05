import { Button, Card } from "../../ui";

import userSvg from "../../../assets/images/user.svg";
import unavailableSvg from "../../../assets/images/unavailable.svg";
import Navbar from "../navbar/navbar";

const Header = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <header>
      <section className="w-full h-[156px] flex items-start justify-between pl-10 pr-6 py-6 bg-[#F2F2F2]">
        <Card className="flex flex-col items-start gap-3">
          <div className="w-full flex items-start justify-between gap-[12px]">
            <img src={userSvg} alt="user" />
            <span className="w-[250px] font-bold text-wrap">
              Алтынбике <br /> Абилькаримова Алпысбаевна
            </span>
            <div>Radio</div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[#757575]">18.04.1994, 30 лет</p>

            <p className="text-[#757575]">Алматы</p>

            <p className="text-[#757575] flex items-center gap-1">
              <img src={unavailableSvg} alt="unavailable" />
              Неактивен
            </p>
          </div>
        </Card>

        <div>
          <Button onClick={() => handleClick}>
            Выбрать тематику <span className="text-[#A7C4F2] ml-2">T</span>
          </Button>
        </div>
      </section>

      <Navbar />
    </header>
  );
};

export default Header;
