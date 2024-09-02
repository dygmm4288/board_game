import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGameStatus from "../../hooks/useGameStatus";
import PlayerHeader from "../common/PlayerHeader";
import CardSection from "../section/CardSection";
import GameLogSection from "../section/GameLogSection";
import RollSection from "../section/RollSection";

const MinivilleRoom = () => {
  // const {} = useMiniville();
// const { get } = useRoom();
  const params = useParams();
  const { id } = params;
  const { data } = useGameStatus(id);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
