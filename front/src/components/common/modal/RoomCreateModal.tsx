const RoomModal = () => {
  return (
    <article>
      <h1>방 만들기</h1>
      <form>
        <select>
          <option>Minibill2</option>
        </select>
        <label htmlFor='max_players'>최대 인원</label>
        <input id='max-players' type='number' />

        <button>만들기</button>
      </form>
    </article>
  );
};

export default RoomModal;
