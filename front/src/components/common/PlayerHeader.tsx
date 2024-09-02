import { useNavigate, useParams } from "react-router-dom";
import LogoutIcon from "../../assets/svg/LogoutIcon";
import NablaIcon from "../../assets/svg/NablaIcon";
import PolygonIcon from "../../assets/svg/PolygonIcon";
import useLoading from "../../hooks/useLoading";
import useRoom from "../../hooks/useRoom";
import useToggle from "../../hooks/useToggle";
import useMiniville from "../../zustand/miniville";

const PlayerHeader = () => {
  const { players } = useMiniville();
  const [isOpen, handleToggleOpen] = useToggle(true);
  const { put, putIsPanding } = useRoom({});

  const navigate = useNavigate();
  const params = useParams();

  const roomId = Number(params.id);

  useLoading({ isShow: putIsPanding });

  const handleExitRoom = async () => {
    try {
      await put({
        id: roomId,
        body: { confirm: "방나가기" },
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header
      className={
        "w-full bg-[#f5f5f5] shadow-header-nav pt-[8px] " +
        (isOpen ? "relative h-[72px]" : "absolute h-[550px] z-10")
      }>
      <div className='w-[250px] mx-auto flex justify-between'>
        {players.map((player) => (
          <div key={player.id} className='w-[60px] flex flex-col items-center'>
            <p className='w-full text-center text-14 truncate ...'>
              {player.name}
            </p>
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
      <button
        className='absolute right-[5px] top-[10px] text-[10px] text-primary-font-color flex flex-col items-center'
        onClick={handleExitRoom}>
        <LogoutIcon />
        <p>방나가기</p>
      </button>
      <div className='absolute left-[50%] translate-x-[-50%] bottom-0 w-[326px] h-[22px] flex flex-col items-center gap-[4px] '>
        <hr className='w-full' />
        <button onClick={handleToggleOpen}>
          {isOpen ? <NablaIcon /> : <PolygonIcon />}
        </button>
      </div>
    </header>
  );
};

export default PlayerHeader;
