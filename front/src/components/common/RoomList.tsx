import { useEffect, useState } from "react";
import PersonIcon from "../../assets/svg/PersonIcon";
import RollIcon from "../../assets/svg/RollIcon";
import useRoom from "../../hooks/useRoom";
import useAuth from "../../zustand/auth";

type Room = {
  id: string | number;
  name: string;
  gameName: string;
  max_players: number;
};

const RoomList = () => {
  const { access_token } = useAuth();
  const [rooms, setRooms] = useState<Room[]>([]);

  const { get } = useRoom(access_token);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await get();
        setRooms(data);
      } catch (error) {
        console.error("Failed to fetch rooms :", error);
      }
    };

    fetchRooms();
  }, [get]);

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
          </li>
        ))}
      </ul>
    );
  }
};
export default RoomList;
