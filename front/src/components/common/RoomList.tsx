import { useEffect } from "react";
import PersonIcon from "../../assets/svg/PersonIcon";
import RollIcon from "../../assets/svg/RollIcon";
import useRoom from "../../hooks/useRoom";
import useModal from "../../zustand/modal";
import LoadingSpinner from "./modal/LoadingSpinner";

const RoomList = () => {
  const { rooms, roomsIsPending, remove } = useRoom();
  const { show, hide } = useModal();

  const handleDelete = async (id: number) => {
    try {
      await remove(id);
    } catch (error) {
      console.error("fail", error);
    }
  };

  useEffect(() => {
    if (roomsIsPending) {
      show({ component: <LoadingSpinner /> });
      return;
    }
    hide();
  }, [roomsIsPending]);

  return (
    <ul className='w-[315px] flex flex-wrap justify-between gap-y-[20px]'>
      {rooms?.data?.map((room) => (
        <li
          key={room.id}
          className='w-[150px] h-[80px] bg-white border border-solid border-primary-font-color rounded-10 pt-[5px] pl-[12px] text-[14px]'>
          <h3 className='text-[16px]'>room number {room.id}</h3>
          <div className='flex flex-col justify-center text-primary-font-color'>
            <div className='flex flex-row gap-[4px]'>
              <RollIcon />
              <p>{room.game}</p>
            </div>
            <div className='flex flex-row gap-[6px]'>
              <PersonIcon />
              <p>{room.max_players}</p>
            </div>
          </div>
          <button onClick={() => handleDelete(room.id)}>지우기</button>
        </li>
      ))}
    </ul>
  );
};
export default RoomList;
