import PlayerHeader from "./common/PlayerHeader";
import RollSection from "./section/RollSection";

const MinivilleRoom = () => {
  return (
    <div>
      <PlayerHeader />
      <RollSection />
      <div>카드 섹션</div>
      <div>게임 로그</div>
    </div>
  );
};

export default MinivilleRoom;
