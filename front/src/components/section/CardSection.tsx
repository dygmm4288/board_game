import { card_roll } from "../../css/card_roll";
import { _ESTABLISHMENTS } from "../../miniville_meta_data/establishments/metadata";

import { EstColor } from "../../miniville_meta_data/establishments/types";

import { cn } from "../../util/cn";

const CardSection = () => {
  const getRandomNum = () => {
    const totalCard = 20;
    const randomNums = new Set();

    while (randomNums.size < 15) {
      const randomNum = Math.floor(Math.random() * totalCard);
      randomNums.add(randomNum);
    }

    return Array.from(randomNums);
  };

  const randomIds = getRandomNum();

  const getRandomCard = _ESTABLISHMENTS.filter((card) =>
    randomIds.includes(card._id)
  );

  const RandomCard = () => {
    return getRandomCard.map((item) => {
      const bgColor = () => {
        if (item.color === EstColor.Blue) {
          return "bg-[#D1E0F5]";
        } else if (item.color === EstColor.Red) {
          return "bg-[#F5D1D1]";
        } else if (item.color === EstColor.Green) {
          return "bg-[#C8E9C8]";
        } else return "bg-[#E6D1F5]";
      };
      const RollsLength = () => {
        if (item.rolls.length === 1) {
          return (
            <div className='flex flex-row gap-[3px] justify-center'>
              <div className={cn(card_roll)}>{item.rolls}</div>
            </div>
          );
        } else if (item.rolls.length === 2) {
          return (
            <div className='flex flex-row gap-[3px] justify-center'>
              <div className={cn(card_roll)}>{item.rolls[0]}</div>
              <div className={cn(card_roll)}>{item.rolls[1]}</div>
            </div>
          );
        }
      };
      return (
        <div
          key={item._id}
          className={
            "relative w-[54px] h-[72px] p-[4px] text-center  " + bgColor()
          }>
          <div
            className={
              "text-[12px] flex flex-col items-center " +
              `${item.name.length < 5 ? "gap-[10px]" : "gap-[3px]"}`
            }>
            <div>{<RollsLength />}</div>
            <p className='leading-tight'>{item.name}</p>
          </div>
          <p className='absolute bottom-[2px] left-[50%] translate-x-[-50%] text-10 text-[#808080]'>
            {item.cost}$
          </p>
        </div>
      );
    });
  };

  return (
    <section className='grid grid-cols-5 gap-[12px] pt-[10px] px-[21px]'>
      <RandomCard />
    </section>
  );
};

export default CardSection;
