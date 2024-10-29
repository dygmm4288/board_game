import _ from "lodash";
import { useParams } from "react-router-dom";
import useErrorModal from "../../hooks/useErrorModal";
import useGameJson from "../../hooks/useGameStatus";
import useRoom from "../../hooks/useRoom";
import { p_btn } from "../../style/button";
import { cn } from "../../util/cn";
import PlayerHeader from "../common/PlayerHeader";
import CardSection from "../section/CardSection";
import GameLogSection from "../section/GameLogSection";
import RollSection from "../section/RollSection";

const MinivilleRoom = () => {
  const params = useParams();
  const id = _.toNumber(_.get(params, "id"));
  useGameJson(id);
  const { put, isShowStartBtn } = useRoom({
    id,
  });
  const { showError } = useErrorModal();

  const handleStartGame = () => {
    if (!id) {
      showError("올바르지 않은 접근입니다.", "실패");
      return;
    }

    put({ id, body: { confirm: "게임시작" } }).catch((error) =>
      showError(error, "게임시작 실패"),
    );
  };

  return (
    <div className='relative h-screen'>
      <PlayerHeader />
      <RollSection />
      <CardSection />
      {isShowStartBtn && (
        <section className='w-full h-[100px] relative my-10'>
          <button
            className={cn(p_btn, "absolute right-[8px] bottom-0")}
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
