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
  room_num: string | number;
  id: string;
  status: string;
  max_players: number;
  game_name: string;
  created_by: string;
};

export const getRooms = async (token: string): Promise<Room[]> => {
  const response: AxiosResponse<Room[]> = await roomInstance(token).get<Room[]>(
    "/"
  );
  return response.data;
};

export const createRoom = (
  max_players: number,
  game_name: string,
  created_by: string,
  token: string
) => {
  return roomInstance(token).post<Room>("/", {
    max_players,
    game_name,
    created_by,
  });
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
  return roomInstance(token).delete(`/${id}`);
};
