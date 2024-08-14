import { createRoom, getRoom, getRooms } from "../api/room";
const useRoom = () => {
  const create = (maxPlayers: number) => {
    return createRoom(maxPlayers);
  };

  const get = (roomId: number | string) => {
    if (roomId) {
      return getRoom(roomId);
    }
    return getRooms();
  };

  return {
    create,
    get,
  };
};

export default useRoom;
