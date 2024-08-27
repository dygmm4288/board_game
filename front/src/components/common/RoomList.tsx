import PersonIcon from "../../assets/svg/PersonIcon";
import RollIcon from "../../assets/svg/RollIcon";
import useRoom from "../../hooks/useRoom";

const RoomList = () => {
  const { rooms } = useRoom();

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
        </li>
      ))}
    </ul>
  );
};
export default RoomList;
