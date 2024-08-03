import React from "react";
import PlusBtnIcon from "../assets/svg/PlusBtnIcon";
import RollIcon from "../assets/svg/RollIcon";

const Home = () => {
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const RoomList = ({ gameName = "miniville" }) => {
    if (rooms.length > 0) {
      return (
        <ul className='w-[315px] flex flex-wrap justify-between gap-y-[20px]'>
          {rooms.map((room) => (
            <li
              key={room}
              className='w-[150px] h-[80px] bg-white border border-solid border-primary-font-color rounded-10 p-[10px]'>
              <h3>room number {room}</h3>
              <div>
                <div className='flex'>
                  <RollIcon />
                  <p>{gameName}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  };
  return (
    <div className='w-full h-screen bg-primary-background-color flex flex-col items-center'>
      <div>
        <button className='mt-[20px] mb-[20px] bg-white w-[315px] h-[50px] flex items-center justify-center gap-[10px] border border-solid border-primary-font-color rounded-10'>
          <PlusBtnIcon />
          <p>방만들기</p>
        </button>
        {<RoomList />}
      </div>
    </div>
  );
};

export default Home;
