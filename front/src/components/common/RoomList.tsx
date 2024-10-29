import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "../../assets/svg/PersonIcon";
import RollIcon from "../../assets/svg/RollIcon";
import useLoading from "../../hooks/useLoading";
import useRoom from "../../hooks/useRoom";

const RoomList = () => {
  const { rooms, roomsIsPending, remove, put } = useRoom({
    isRoomsFetch: true,
  });

  const navigate = useNavigate();
  useLoading({ isShow: roomsIsPending });

  const handleDelete =
    (id: number) => async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      try {
        await remove(id);
      } catch (error) {
        console.error("fail", error);
      }
    };

  const handleClick = (id: number) => async () => {
    await put({ id, body: { confirm: "참여" } });
    navigate(`/miniville_room/${id}`);
  };

  return (
    <ul className='w-[315px] flex flex-wrap justify-between gap-y-[20px]'>
      {rooms?.data?.map((room) => (
        <li
          key={room.id}
          className='w-[150px] h-[80px] bg-white border border-solid border-primary-font-color rounded-10 pt-[5px] pl-[12px] text-[14px] cursor-pointer'
          onClick={handleClick(room.id)}>
          <h3 className='text-[16px]'>room number {room.id}</h3>
          <div className='flex flex-col justify-center text-primary-font-color'>
            <div className='flex flex-row gap-[4px]'>
              <RollIcon />
              <p>{room.game_name}</p>
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
