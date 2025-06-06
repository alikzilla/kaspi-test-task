import { useState } from "react";
import { RadioGroup } from "../../ui";

const LanguageSelector = () => {
  const [lang, setLang] = useState("ru");

  const options = [
    { label: "Қаз", value: "kz" },
    { label: "Рус", value: "ru" },
  ];

  return (
    <section>
      <RadioGroup options={options} selected={lang} onChange={setLang} />
    </section>
  );
};

export default LanguageSelector;
