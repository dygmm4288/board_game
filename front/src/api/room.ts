import axios, { AxiosResponse } from "axios";
import { AUTH, getStorage } from "../hooks/useStorage";

export type User = {
  username: string;
};

export type Room = {
  id: number;
  status: string;
  max_players: number;
  game: string;
  players: User[];
};

const getToken = () => {
  const { access_token } = getStorage(AUTH) || {};
  return access_token;
};

const roomInstance = axios.create({
  baseURL: "http://localhost:8000/api/room",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

roomInstance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getRooms = async (): Promise<Room[]> => {
  const response: AxiosResponse<Room[]> = await roomInstance.get<Room[]>("/");
  return response.data;
};

export const createRoom = (max_players: number, game: string) => {
  return roomInstance.post<Room>("/", {
    max_players,
    game_name: game,
  });
};

export const getRoom = async (id: number): Promise<Room> => {
  const response: AxiosResponse<Room> = await roomInstance.get<Room>(`/${id}`);
  return response.data; // response.data를 Room 객체로 반환
};

export const putRoom = async (
  id: number,
  body: { confirm: string; updates: Record<string, string> }
) => {
  return await roomInstance.put(`/${id}`, body);
};

export const deleteRoom = (id: number) => {
  return roomInstance.delete(`/${id}`);
};
