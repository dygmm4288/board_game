import { card_roll } from "../../css/card_roll";
import { _ESTABLISHMENTS } from "../../miniville_meta_data/establishments/metadata";
import { EstColor } from "../../miniville_meta_data/establishments/types";
import { cn } from "../../util/cn";

interface Card {
  id: number | string;
}

const EstablishmentCard = ({ id }: Card) => {
  const card = _ESTABLISHMENTS.find((item) => String(item._id) === String(id));

  const bgColor = (color: EstColor) => {
    if (color === EstColor.Blue) {
      return "bg-[#D1E0F5]";
    } else if (color === EstColor.Red) {
      return "bg-[#F5D1D1]";
    } else if (color === EstColor.Green) {
      return "bg-[#C8E9C8]";
    } else return "bg-[#E6D1F5]";
  };

  if (!card) return <div>카드정보없음</div>;

  return (
    <div
      className={cn(
        "relative w-[54px] h-[72px] p-[4px] text-center",
        bgColor(card.color),
      )}>
      <div
        className={
          "text-[12px] flex flex-col items-center " +
          `${card.name.length < 6 ? "gap-[10px]" : "gap-[3px]"}`
        }>
        <div>
          <RollInfo rolls={card.rolls} />
        </div>
        <p className='leading-tight'>{card.name}</p>
      </div>
      <p className='absolute bottom-[2px] left-[50%] translate-x-[-50%] text-10 text-[#808080]'>
        {card.cost}$
      </p>
    </div>
  );
};

const RollInfo = ({ rolls }: { rolls: number[] }) => {
  return (
    <div className='flex flex-row gap-[3px] justify-center'>
      {rolls.map((roll) => (
        <div className={cn(card_roll)}>{roll}</div>
      ))}
    </div>
  );
};

export default EstablishmentCard;
