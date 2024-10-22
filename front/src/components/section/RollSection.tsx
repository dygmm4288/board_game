import { useState } from "react";
import { roll_flex } from "../../css/flex_roll";
import { roll_style } from "../../css/roll_style";
import { cn } from "../../util/cn";

const getRandomRoll = () => Math.floor(Math.random() * 6 + 1);
const setRoll = (
  setter: React.Dispatch<React.SetStateAction<number | undefined>>,
) => setter(getRandomRoll());

const RollSection = () => {
  const [firstNum, setFirstNum] = useState<number | undefined>();
  const [secondNum, setSecondNum] = useState<number | undefined>();
  const [thirdNum, setThirdNum] = useState<number | undefined>();

  const handleFirstRoll = () => {
    setRoll(setFirstNum);
  };

  const handleSecondRoll = () => {
    setRoll(setSecondNum);
    setRoll(setThirdNum);
  };

  return (
    <section className='p-[10px]'>
      <div className='flex flex-row items-center justify-center gap-[40px] text-primary-font-color text-[12px]'>
        <div
          onClick={handleFirstRoll}
          className={cn(roll_flex, "hover:cursor-pointer")}>
          <p>주사위 1</p>
          <div className={cn(roll_style)}>{firstNum}</div>
        </div>
        <div
          onClick={handleSecondRoll}
          className={cn(roll_flex, "hover:cursor-pointer")}>
          <p>주사위 2</p>
          <div className='flex flex-row gap-[10px]'>
            <div className={cn(roll_style)}>{secondNum}</div>
            <div className={cn(roll_style)}>{thirdNum}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollSection;
