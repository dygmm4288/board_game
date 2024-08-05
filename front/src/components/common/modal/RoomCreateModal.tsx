import { FormEvent } from "react";
import { flex_center } from "../../../css/flex";
import useRoom from "../../../hooks/useRoom";
import { cn } from "../../../util/cn";
import NumberInput from "../../form/NumberInput";

const RoomModal = () => {
  const {createRoom} = useRoom();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createRoom()
  };
  
  return (
    <article className='px-[50px] py-[20px] w-[240px] flex flex-col gap-[20px] bg-white rounded-10'>
      <h1 className='text-center title'>방 만들기</h1>
      <form className='flex flex-col gap-[30px]' onSubmit={handleSubmit}>
        <select>
          <option>Minibill2</option>
        </select>
        <NumberInput />
        <button type="submit" className={cn("w-full h-[40px] bg-secondary-bg-color rounded-[5px]", flex_center)}>만들기</button>
      </form>
    </article>
  );
};

export default RoomModal;