import useModal from "../zustand/modal";
import RoomModal from "./common/modal/RoomCreateModal";

import PlusBtnIcon from "../assets/svg/PlusBtnIcon";

import RoomList from "./common/RoomList";

const Home = () => {
  const { show } = useModal();
  const handleClickCreateRoom = () => {
    show({ component: <RoomModal /> });
  };

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div>
        <button
          onClick={handleClickCreateRoom}
          className='mt-[20px] mb-[20px] bg-white w-[315px] h-[50px] flex items-center justify-center gap-[10px] border border-solid border-primary-font-color rounded-10'>
          <PlusBtnIcon />
          <p>방만들기</p>
        </button>
        {<RoomList />}
      </div>
    </div>
  );
};

export default Home;
