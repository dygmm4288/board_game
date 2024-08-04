import { useEffect, useState } from "react";

type Props = {
  options: string[];
  setSelectValue: (option: string) => void;
};

const Select = ({ options, setSelectValue }: Props) => {
  const [selectedOption, setOption] = useState(options[0]);

  const handleSelectOption = (option: string) => () => {
    if (selectedOption === option) return;
    setOption(option);
  };

  useEffect(() => {
    setSelectValue(selectedOption);
  }, [selectedOption]);

  return (
    <select>
      {options.map((option) => (
        <option
          key={`options-${option}`}
          selected={selectedOption === selectedOption}
          onClick={handleSelectOption(option)}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
