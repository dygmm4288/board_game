import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGameStatus from "../../hooks/useGameStatus";
import useRoom from "../../hooks/useRoom";
import { useMinivilleRoom } from "../../zustand/miniville";
import PlayerHeader from "../common/PlayerHeader";
import CardSection from "../section/CardSection";
import GameLogSection from "../section/GameLogSection";
import RollSection from "../section/RollSection";

const MinivilleRoom = () => {
  // const {} = useMiniville();
  // const { get } = useRoom();
  const params = useParams();
  const { id } = params;
  useGameStatus(id);
  const { room } = useRoom({ id: Number(id) });
  const { setter } = useMinivilleRoom();

  useEffect(() => {
    if (room) {
      setter(room);
    }
  }, [room]);

  return (
    <div className='relative h-screen'>
      <PlayerHeader />
      <RollSection />
      <CardSection />
      <section className='w-full h-[100px] relative my-10'>
        <button className='w-[100px] h-[43px] bg-primary-color text-white rounded-[5px] absolute right-[8px] bottom-0 '>
          게임시작
        </button>
      </section>
      <GameLogSection />
    </div>
  );
};

export default MinivilleRoom;
