import _ from "lodash";
import { useParams } from "react-router-dom";
import useGameJson from "../../hooks/useGameStatus";
import useRoom from "../../hooks/useRoom";
import { getErrorMsg } from "../../util/error";
import useModal from "../../zustand/modal";
import AlertModal from "../common/modal/AlertModal";
import PlayerHeader from "../common/PlayerHeader";
import CardSection from "../section/CardSection";
import GameLogSection from "../section/GameLogSection";
import RollSection from "../section/RollSection";

const MinivilleRoom = () => {
  const params = useParams();
  const id = _.toNumber(_.get(params, "id"));
  useGameJson(id);
  const { put /* is_show_start_btn */ } = useRoom({
    id,
  });
  const { show } = useModal();

  const handleStartGame = () => {
    console.log(id);
    if (!id) {
      console.error("id가 없습니다.");
      return;
    }

    put({ id, body: { confirm: "게임시작" } }).catch((err) => {
      show({
        component: <AlertModal title={"실패"} content={getErrorMsg(err)} />,
      });
    });
  };

  return (
    <div className='relative h-screen'>
      <PlayerHeader />
      <RollSection />
      <CardSection />
      {
        <section className='w-full h-[100px] relative my-10'>
          <button
            className='w-[100px] h-[43px] bg-primary-color text-white rounded-[5px] absolute right-[8px] bottom-0'
            onClick={handleStartGame}>
            게임시작
          </button>
        </section>
      }
      <GameLogSection />
    </div>
  );
};

export default MinivilleRoom;
