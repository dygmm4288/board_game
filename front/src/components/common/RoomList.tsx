import PersonIcon from "../../assets/svg/PersonIcon";
import RollIcon from "../../assets/svg/RollIcon";

const rooms = [1];
const RoomList = ({ gameName = "miniville" }, { number = 4 }) => {
  if (rooms.length > 0) {
    return (
      <ul className='w-[315px] flex flex-wrap justify-between gap-y-[20px]'>
        {rooms.map((room) => (
          <li
            key={room}
            className='w-[150px] h-[80px] bg-white border border-solid border-primary-font-color rounded-10 pt-[5px] pl-[12px] text-[14px]'>
            <h3 className='text-[16px]'>room number {room}</h3>
            <div className='flex flex-col justify-center text-primary-font-color'>
              <div className='flex flex-row gap-[4px]'>
                <RollIcon />
                <p>{gameName}</p>
              </div>
              <div className='flex flex-row gap-[6px]'>
                <PersonIcon />
                <p>{number}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
};
export default RoomList;
