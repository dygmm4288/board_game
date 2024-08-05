import { useState } from "react";
import NablaIcon from "../../assets/svg/NablaIcon";
import PolygonIcon from "../../assets/svg/PolygonIcon";

const PlayerHeader = () => {
  const players = ["mirae", "mirae2", "mirae3", "player123456789"];

  const [nabla, setNabla] = useState(true);
  const isClicked = () => {
    setNabla(!nabla);
  };

  return (
    <header
      className={
        "relative top-0 w-full bg-[#f5f5f5] shadow-header-nav mb-[10px] pt-[8px] " +
        (nabla ? "h-[72px]" : "h-[420px]")
      }>
      <div className='w-[250px] mx-auto flex justify-between'>
        {players.map((player) => (
          <div key={player} className='w-[60px] flex flex-col items-center'>
            <p className='w-full text-center text-14 truncate ...'>{player}</p>
            <p className='text-14 text-[#E18F00]'>3$</p>
          </div>
        ))}
      </div>
      <div className='absolute left-[50%] translate-x-[-50%] bottom-0 w-[326px] h-[22px] flex flex-col items-center gap-[4px] '>
        <hr className='w-full' />
        <button onClick={isClicked}>
          {nabla ? <NablaIcon /> : <PolygonIcon />}
        </button>
      </div>
    </header>
  );
};

export default PlayerHeader;
