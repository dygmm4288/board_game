import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
  error?: string;
}

const Input = ({
  onChange,
  label,
  value,
  error,
  ...inputProps
}: CustomInputProps) => {
  const { id } = inputProps;
  const [isFocus, setFocus] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div className='flex flex-col gap-2 w-full'>
      {label && (
        <label htmlFor={id} className=''>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className='border border-blue-100 rounded-lg p-2'
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && <p className='text-red-300'>{error}</p>}
    </div>
  );
};

export default Input;
