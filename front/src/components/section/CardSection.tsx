import useMiniville from "../../zustand/miniville";
import EstablishmentCard from "../miniville/EstablishmentCard";

const CardSection = () => {
  const { field_16, field_712 } = useMiniville();

  const EstablishmentCards = (cards: { [key: number]: number }) => {
    return Object.keys(cards).map((id) => (
      <EstablishmentCard key={`establish-card-${id}`} id={id} />
    ));
  };

  return (
    <section className='grid grid-cols-5 justify-items-center gap-[12px] pt-[10px] px-[21px]'>
      {EstablishmentCards(field_16)}
      {EstablishmentCards(field_712)}
    </section>
  );
};

export default CardSection;
