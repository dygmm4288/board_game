import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input = ({ onChange, label, ...inputProps }: CustomInputProps) => {
  const [value, setValue] = useState("");
  const { id } = inputProps;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <div className='flex flex-col gap-2 w-full'>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...inputProps}
        className='border border-blue-100 rounded-lg p-2'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
