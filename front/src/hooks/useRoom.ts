import { Room, createRoom, deleteRoom, getRooms } from "../api/room";

const useRoom = () => {
  const create = (max_players: number, game: string) => {
    return createRoom(max_players, game);
  };

  const get = (): Promise<Room[]> => {
    return getRooms();
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
