import _ from "lodash";
import { useState } from "react";

type Props = {
  id: string;
};

const MIN = 2;
const MAX = 6;

const NumberInput = ({ id }: Props) => {
  const [value, setValue] = useState(2);

  const updateValue = (delta: number) => {
    const nextValue = value + delta;
    if (_.inRange(nextValue, MIN, MAX)) setValue(nextValue);
  };

  const plus = () => updateValue(1);
  const minus = () => updateValue(-1);

  return (
    <div className='max-w-52 min-w-52 flex flex-row justify-between items-center'>
      <button onClick={minus}>-</button>
      <input
        className='cursor-default text-center '
        id={id}
        type='number'
        min={MIN}
        max={MAX}
        value={value}
      />
      <button onClick={plus}>+</button>
    </div>
  );
};

export default NumberInput;
