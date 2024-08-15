import { createRoom, getRoom, getRooms } from "../api/room";

const useRoom = (token: string) => {
  const create = (maxPlayers: number) => {
    return createRoom(maxPlayers, token);
  };

  const get = async (roomId?: number | string) => {
    if (roomId) {
      return getRoom(roomId, token);
    }
    const rooms = await getRooms(token);
    return rooms;
  };

  return {
    create,
    get,
  };
};

export default useRoom;
