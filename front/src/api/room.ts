import axios from "axios";

const roomInstance = axios.create({
  baseURL: "http://localhost:8000/api/room",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export type Room = {
  id: string | number;
  name: string;
  status: string;
  max_players: number;
};

export const getRooms = () => {
  return roomInstance.get<Room>("/");
};

export const createRoom = (maxPlayers: number) => {
  return roomInstance.post<Room>("/", { max_players: maxPlayers });
};

export const getRoom = (id: string | number) => {
  return roomInstance.get<Room>(`/${id}`);
};
