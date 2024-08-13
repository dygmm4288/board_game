const GameLogSection = () => {
  const players = [{ name: "a" }, { name: "b" }];
  return (
    <div className='absolute bottom-0 w-full h-[130px] bg-black/20 border border-solid border-primary-font-color py-[10px] px-[20px] text-white'>
      {players.map((player) => {
        return (
          <div className='flex flex-row gap-[4px]'>
            <div>{player.name} :</div>
            <div className='flex flex-col text-wrap'>
              <p>log</p>
              <p>
                manymanylogs manymanylogs manymanylogs manymanylogs manymanylogs
                manymanylogs manymanylogs
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameLogSection;
