import { Room, createRoom, deleteRoom, getRoom, getRooms } from "../api/room";

const useRoom = () => {
  const create = (max_players: number, game: string) => {
    return createRoom(max_players, game);
  };

  const get = async (roomId: number): Promise<Room[]> => {
    if (roomId) {
      const room = await getRoom(roomId);
      return [room];
    }
    return await getRooms();
  };

  const remove = (roomId: number) => {
    return deleteRoom(roomId);
  };

  return {
    create,
    get,
    remove,
  };
};

export default useRoom;
