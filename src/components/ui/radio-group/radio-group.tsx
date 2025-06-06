import { FC } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  selected: string;
  onChange: (value: string) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex">
      {options.map((option) => {
        const isSelected = option.value === selected;

        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              px-2 py-1 rounded-3xl border border-[2px]
              text-sm font-medium
              transition
              ${
                isSelected
                  ? "border-[#F14635] text-[#F14635]"
                  : "border-transparent text-black"
              }
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default RadioGroup;
