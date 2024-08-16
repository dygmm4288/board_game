import axios, { AxiosResponse } from "axios";

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
  const response: AxiosResponse<Room[]> = await roomInstance(token).get<Room[]>(
    "/"
  );
  return response.data;
};

export const createRoom = (maxPlayers: number, token: string) => {
  return roomInstance(token).post<Room>("/", { max_players: maxPlayers });
};

export const getRoom = async (
  id: string | number,
  token: string
): Promise<Room> => {
  const response: AxiosResponse<Room> = await roomInstance(token).get<Room>(
    `/${id}`
  );
  return response.data; // response.data를 Room 객체로 반환
};

export const deleteRoom = (id: string | number, token: string) => {
  return roomInstance(token).delete(`/rooms/${id}`);
};
