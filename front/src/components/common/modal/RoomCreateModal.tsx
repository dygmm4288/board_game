import { FormEvent, useState } from "react";
import { getRoom, putRoom } from "../../../api/room";
import { flex_center } from "../../../css/flex";
import useRoom from "../../../hooks/useRoom";
import { cn } from "../../../util/cn";
import NumberInput from "../../form/NumberInput";

const RoomModal = () => {
  const [totalMember, setTotalMember] = useState(2);

  const [selectedGame, setSelectedGame] = useState("miniville"); // 기본값 설정

  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(e.target.value);
  };

  const { create } = useRoom();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 서버로 요청을 보냅니다.
      const res = await create(totalMember, selectedGame);
      console.log(res.data.game, res.data.max_players, res.data.id);
      const room = res.data;
      getRoom(room.id);
      putRoom(room.id, { confirm: "참여" });
    } catch (error) {
      console.error("Failed to create room:", error);
    }
  };

  return (
    <article className='px-[50px] py-[20px] w-[240px] flex flex-col gap-[20px] bg-white rounded-10'>
      <h1 className='text-center title'>방 만들기</h1>
      <form className='flex flex-col gap-[30px]' onSubmit={handleSubmit}>
        <select value={selectedGame} onChange={handleGameChange}>
          <option value='miniville'>miniville</option>
        </select>
        <NumberInput
          totalMember={totalMember}
          setTotalMember={setTotalMember}
        />
        <button
          type='submit'
          className={cn(
            "w-full h-[40px] bg-secondary-bg-color rounded-[5px]",
            flex_center
          )}>
          만들기
        </button>
      </form>
    </article>
  );
};

export default RoomModal;
