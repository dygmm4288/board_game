import { createRoom, getRoom, getRooms, deleteRoom, Room } from "../api/room";

const useRoom = (token: string) => {
  const create = (
    max_players: number,
    game_name: string,
    created_by: string
  ) => {
    console.log(max_players, game_name, created_by);
    return createRoom(max_players, game_name, created_by, token);
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
