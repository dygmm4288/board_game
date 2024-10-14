import { useState } from "react";

const useToggle = (defaultValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const handleToggle = () => {
    setValue(!value);
  };

  return [value, handleToggle];
};

export default useToggle;
