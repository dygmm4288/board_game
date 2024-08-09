import axios from "axios";
import React from "react";

const roomApi = axios.create({
  baseURL: "http://localhost:8000/api/room",
  headers: {},
});

const useRoom = (totalMember: number) => {
  const createRoom = () => {};

  return {
    createRoom,
  };
};

export default useRoom;
