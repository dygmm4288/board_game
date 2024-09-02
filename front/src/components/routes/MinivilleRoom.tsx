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
      <section className='my-10'></section>
      <GameLogSection />
    </div>
  );
};

export default MinivilleRoom;
