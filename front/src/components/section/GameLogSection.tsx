const GameLogSection = () => {
  const players = [{ name: "a" }, { name: "baldksjflka" }];
  return (
    <div className='absolute bottom-0 w-full h-[130px] bg-black/20 border border-solid border-primary-font-color py-[10px] px-[20px] text-white overflow-scroll flex flex-col gap-[14px]'>
      {players.map((player) => {
        return (
          <div key={player.name} className='flex flex-row gap-[4px]'>
            <div className='shrink-0'>{player.name} :</div>
            <div>
              <p>log</p>
              <p>
                any words any words any words any words any words any words any
                words any words any words any words any words{" "}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameLogSection;
