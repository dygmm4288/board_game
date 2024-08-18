import _ from "lodash";

import MinusIcon from "../../assets/svg/MinusIcon";
import PlusIcon from "../../assets/svg/PlusIcon";
import { border_primary } from "../../css/border";
import { items_center } from "../../css/flex";
import { cn } from "../../util/cn";

interface NumberInputProps {
  totalMember: number;
  setTotalMember: React.Dispatch<React.SetStateAction<number>>;
}

const MIN = 2;
const MAX = 4;

const NumberInput: React.FC<NumberInputProps> = ({
  totalMember,
  setTotalMember,
}) => {
  const updateValue = (delta: number) => {
    const nextValue = totalMember + delta;
    if (_.inRange(nextValue, MIN, MAX + 1)) setTotalMember(nextValue);
  };

  const plus = () => updateValue(1);
  const minus = () => updateValue(-1);

  return (
    <div className='flex flex-row justify-between items-center'>
      <label htmlFor='max-players' className='label text-primary-font-color'>
        최대인원
      </label>
      <div
        className={cn(
          "max-w-[52px] min-w-[52px] justify-evenly label text-primary-font-color",
          items_center,
          border_primary
        )}>
        <button type='button' onClick={minus}>
          <MinusIcon />
        </button>
        <input
          className='cursor-default text-center '
          id='max-players'
          type='number'
          min={MIN}
          max={MAX}
          value={totalMember}
          onChange={() => setTotalMember}
        />
        <button type='button' onClick={plus}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
