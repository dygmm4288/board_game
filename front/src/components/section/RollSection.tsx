import { roll_flex } from "../../css/flex_roll";
import { border_roll } from "../../css/roll_border";
import { cn } from "../../util/cn";

const RollSection = () => {
  return (
    <section className='p-[10px]'>
      <div className='flex flex-row justify-center gap-[40px] text-primary-font-color text-[12px]'>
        <div className={cn(roll_flex)}>
          <p>주사위 1</p>
          <div className={cn(border_roll)}></div>
        </div>
        <div className={cn(roll_flex)}>
          <p>주사위 2</p>
          <div className='flex flex-row gap-[10px]'>
            <div className={cn(border_roll)}></div>
            <div className={cn(border_roll)}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollSection;
