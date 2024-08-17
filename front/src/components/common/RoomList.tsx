import { useEffect, useState } from "react";
import PersonIcon from "../../assets/svg/PersonIcon";
import RollIcon from "../../assets/svg/RollIcon";
import useRoom from "../../hooks/useRoom";
import { Room } from "../../api/room";

const RoomList = () => {
  const getLocalInfo = localStorage.getItem("auth");
  const token = JSON.parse(getLocalInfo as string).access_token;

  const [rooms, setRooms] = useState<Room[]>([]);

  const { get } = useRoom(token);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await get();
        console.log(data);
        setRooms(data);
      } catch (error) {
        console.error("Failed to fetch rooms :", error);
      }
    };

    fetchRooms();
  }, []);

  const { remove } = useRoom(token);

  const handleDelete = async (id: string | number) => {
    try {
      await remove(id);
      setRooms((prev) => prev.filter((room) => room.id !== id));
    } catch (error) {
      console.error("fail", error);
    }
  };

  if (rooms.length > 0) {
    return (
      <ul className='w-[315px] flex flex-wrap justify-between gap-y-[20px]'>
        {rooms.map((room) => (
          <li
            key={room.id}
            className='w-[150px] h-[80px] bg-white border border-solid border-primary-font-color rounded-10 pt-[5px] pl-[12px] text-[14px]'>
            <h3 className='text-[16px]'>room number {room.id}</h3>
            <div className='flex flex-col justify-center text-primary-font-color'>
              <div className='flex flex-row gap-[4px]'>
                <RollIcon />
                <p>{room.gameName}</p>
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
  }
};
export default RoomList;
