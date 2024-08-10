import { _ESTABLISHMENTS } from "../../establishments/metadata";

const CardSection = () => {
  const getRandomNum = () => {
    const totalCard = 39;
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
      return (
        <div key={item._id} className='w-[54px] h-[54px] bg-slate-400'>
          <div>{item.name}</div>
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
