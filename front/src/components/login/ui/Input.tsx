import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { border_primary } from "../../../css/border";
import { cn } from "../../../util/cn";

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
        <label htmlFor={id} className={cn("label", isFocus ? "focus" : "")}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={cn(border_primary, "rounded-lg p-2")}
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
