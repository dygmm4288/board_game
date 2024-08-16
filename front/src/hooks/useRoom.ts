import { createRoom, getRoom, getRooms, deleteRoom, Room } from "../api/room";

const useRoom = (token: string) => {
  const create = (maxPlayers: number) => {
    return createRoom(maxPlayers, token);
  };

  const get = async (roomId?: number | string): Promise<Room[]> => {
    if (roomId) {
      const room = await getRoom(roomId, token);
      return [room];
    }
    return await getRooms(token);
  };

  const remove = (roomId: string | number) => {
    return deleteRoom(roomId, token);
  };

  return {
    create,
    get,
    remove,
  };
};

export default useRoom;
