import PlayerHeader from "./common/PlayerHeader";
import CardSection from "./section/CardSection";
import RollSection from "./section/RollSection";

const MinivilleRoom = () => {
  return (
    <div>
      <PlayerHeader />
      <RollSection />
      <CardSection />
      <div>게임 로그</div>
    </div>
  );
};

export default MinivilleRoom;
