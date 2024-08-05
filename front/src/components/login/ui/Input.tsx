import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({onChange, ...inputProps}: CustomInputProps) => {
  const [value,setValue] = useState('');
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };

  return <input {...inputProps} value={value} onChange={handleChange}/>;
};


export default Input;