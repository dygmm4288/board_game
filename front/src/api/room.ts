import axios from "axios";

const roomInstance = (token: string) =>
  axios.create({
    baseURL: "http://localhost:8000/api/room",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });

export type Room = {
  id: string | number;
  name: string;
  status: string;
  max_players: number;
};

export const getRooms = async (token: string): Promise<Room[]> => {
  const response = await roomInstance(token).get<Room[]>("/");
  return response.data;
};

export const createRoom = (maxPlayers: number, token: string) => {
  return roomInstance(token).post<Room>("/", { max_players: maxPlayers });
};

export const getRoom = (id: string | number, token: string) => {
  return roomInstance(token).get<Room>(`/${id}`);
};
