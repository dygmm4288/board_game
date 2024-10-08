import { useState } from "react";
import NablaIcon from "../../assets/svg/NablaIcon";
import PolygonIcon from "../../assets/svg/PolygonIcon";

const PlayerHeader = () => {
  const players = ["mirae", "mirae2", "mirae3", "player123456789"];

  const [isOpen, setOpen] = useState(true);
  const isClicked = () => {
    setOpen(!isOpen);
  };

  return (
    <header
      className={
        "w-full bg-[#f5f5f5] shadow-header-nav pt-[8px] " +
        (isOpen ? "relative h-[72px]" : "absolute h-[550px] z-10")
      }>
      <div className='w-[250px] mx-auto flex justify-between'>
        {players.map((player) => (
          <div key={player} className='w-[60px] flex flex-col items-center'>
            <p className='w-full text-center text-14 truncate ...'>{player}</p>
            <p className='text-14 text-[#E18F00]'>3$</p>
            {isOpen ? (
              ""
            ) : (
              <div className='flex flex-col gap-[4px]'>
                <div className='w-[60px] h-[14px] bg-[#d9d9d9] rounded-[5px]'></div>
                <div className='w-[60px] h-[14px] bg-[#d9d9d9] rounded-[5px]'></div>
                <div className='w-[60px] h-[14px] bg-[#d9d9d9] rounded-[5px]'></div>
                <div className='w-[60px] h-[14px] bg-[#d9d9d9] rounded-[5px]'></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='absolute left-[50%] translate-x-[-50%] bottom-0 w-[326px] h-[22px] flex flex-col items-center gap-[4px] '>
        <hr className='w-full' />
        <button onClick={isClicked}>
          {isOpen ? <NablaIcon /> : <PolygonIcon />}
        </button>
      </div>
    </header>
  );
};

export default PlayerHeader;
