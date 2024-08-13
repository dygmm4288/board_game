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

export const createRoom = () => {
  return roomInstance.post("/");
};
