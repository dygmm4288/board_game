import axios from "axios";

const roomApi = axios.create({
  baseURL: 'http://localhost:8000/api/room',
  headers: {},
});

const useRoom = () => {
  const createRoom = () => {};
  
  return {
    createRoom,
  }
};

export default useRoom;