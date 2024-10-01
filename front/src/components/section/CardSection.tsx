import useMiniville from "../../zustand/miniville";

const CardSection = () => {
  const { field_16, field_712 } = useMiniville();
  console.log(field_16, field_712);

  return (
    <section className='grid grid-cols-5 justify-items-center gap-[12px] pt-[10px] px-[21px]'></section>
  );
};

export default CardSection;
