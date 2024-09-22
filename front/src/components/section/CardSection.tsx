import { useMinivilleRoom } from "../../zustand/miniville";

const CardSection = () => {
  const { game_status } = useMinivilleRoom();
  console.log(game_status);

  return (
    <section className='grid grid-cols-5 justify-items-center gap-[12px] pt-[10px] px-[21px]'></section>
  );
};

export default CardSection;
