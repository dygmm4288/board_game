import axios, { AxiosResponse } from "axios";
import { MinivilleState } from "../zustand/miniville";

export type Room = {
  id: number;
  game_name: string;
  status: string;
  game_status: MinivilleState | null;
  max_players: number;
  players: string[];
  turn: number;
};

const roomInstance = axios.create({
  baseURL: "http://localhost:8000/api/room",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

const getRooms = () => {
  return roomInstance.get<Room[]>("/");
};

const createRoom = (max_players: number, game: string) => {
  return roomInstance.post<Room>("/", {
    max_players,
    game_name: game,
  });
};

const getRoom = async (id: number): Promise<Room> => {
  const response: AxiosResponse<Room> = await roomInstance.get<Room>(`/${id}`);
  return response.data; // response.data를 Room 객체로 반환
};

const putRoom = async (
  id: number,
  body: { confirm: string; updates?: Record<string, string> }
) => {
  const params = new URLSearchParams({ confirm: body.confirm });
  return await roomInstance.put(`/${id}?${params.toString()}`, body.updates);
};

const deleteRoom = (id: number) => {
  return roomInstance.delete(`/${id}`);
};

const roomApi = {
  getRoom,
  getRooms,
  createRoom,
  putRoom,
  deleteRoom,
};

export default roomApi;
