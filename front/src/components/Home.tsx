import useModal from "../zustand/modal";
import RoomModal from "./common/modal/RoomCreateModal";

const Home = () => {
  const { show } = useModal();
  const handleClickCreateRoom = () => {
    show({ component: <RoomModal /> });
  };

  return (
    <div className='w-full h-screen bg-primary-background-color'>
      <button onClick={handleClickCreateRoom}>방만들기</button>
    </div>
  );
};

export default Home;
