import { useNavigate, useParams } from "react-router-dom";
import useRoom from "../../hooks/useRoom";
import PlayerHeader from "../common/PlayerHeader";
import CardSection from "../section/CardSection";
import GameLogSection from "../section/GameLogSection";
import RollSection from "../section/RollSection";

const MinivilleRoom = () => {
  const { put, remove } = useRoom();
  const navigate = useNavigate();

  const params = useParams();

  const roomId = Number(params.id);

  const handleExitRoom = async () => {
    try {
      put({
        id: roomId,
        body: { confirm: "방나가기", updates: { key: "value" } },
      });
      await remove(roomId);
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className='relative h-screen'>
      <PlayerHeader />
      <RollSection />
      <CardSection />
      <section className='my-10'>
        <button onClick={handleExitRoom}>방나가기</button>
      </section>
      <GameLogSection />
    </div>
  );
};

export default MinivilleRoom;
