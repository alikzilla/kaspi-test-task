import { useTranslation } from "react-i18next";
import { RadioGroup } from "../../ui";

const options = [
  { label: "Қаз", value: "kz" },
  { label: "Рус", value: "ru" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <section>
      <RadioGroup
        options={options}
        selected={i18n.language}
        onChange={handleChange}
      />
    </section>
  );
};

export default LanguageSelector;
