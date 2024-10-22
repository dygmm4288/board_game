import _ from "lodash";
import { useParams } from "react-router-dom";
import useGameJson from "../../hooks/useGameStatus";
import useRoom from "../../hooks/useRoom";
import PlayerHeader from "../common/PlayerHeader";
import CardSection from "../section/CardSection";
import GameLogSection from "../section/GameLogSection";
import RollSection from "../section/RollSection";

const MinivilleRoom = () => {
  const params = useParams();
  const id = _.toNumber(_.pick(params, "id"));
  useGameJson(id);
  const { put, is_show_start_btn } = useRoom({
    id,
  });

  const handleStartGame = () => {
    if (!id) {
      console.error("id가 없습니다.");
      return;
    }

    put({ id, body: { confirm: "게임시작" } });
  };

  return (
    <div className='relative h-screen'>
      <PlayerHeader />
      <RollSection />
      <CardSection />
      {is_show_start_btn && (
        <section className='w-full h-[100px] relative my-10'>
          <button
            className='w-[100px] h-[43px] bg-primary-color text-white rounded-[5px] absolute right-[8px] bottom-0'
            onClick={handleStartGame}>
            게임시작
          </button>
        </section>
      )}
      <GameLogSection />
    </div>
  );
};

export default MinivilleRoom;
