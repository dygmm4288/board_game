import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import roomApi from "../api/room";
import { getErrorMsg } from "../util/error";
import useAuth from "../zustand/auth";

const GET_ROOM = "room/get";

const useRoom = ({ isRoomFetch = false }: { isRoomFetch?: boolean }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onError = (err: AxiosError) => {
    const errorMsg = getErrorMsg(err);

    if (errorMsg === "inactive user") logout();
    // Redirect : 이미 참여한 방이 존재할 경우에 id값을 같이 넘겨줌
    if (typeof errorMsg === "object" && "id" in errorMsg) {
      const goto = `/miniville_room/${errorMsg.id}`;
      navigate(goto);
    }
  };

  const {
    data: rooms,
    isPending: roomsIsPending,
    error: getRoomsError,
  } = useQuery({
    queryKey: [GET_ROOM],
    queryFn: () => roomApi.getRooms(),
    enabled: isRoomFetch,
  });

  const { mutateAsync: create } = useMutation({
    mutationFn: (data: { max_players: number; game: string }) =>
      roomApi.createRoom(data.max_players, data.game),
    onError,
    retry: false,
  });

  const { mutate: remove } = useMutation({
    mutationFn: (roomId: number) => roomApi.deleteRoom(roomId),
    onError,
    retry: false,
  });

  const { mutateAsync: put, isPending: putIsPanding } = useMutation({
    mutationFn: (data: {
      id: number;
      body: { confirm: string; updates?: Record<string, string> };
    }) => roomApi.putRoom(data.id, data.body),
    onError,
  });

  useEffect(() => {
    if (getRoomsError) onError(getRoomsError as AxiosError);
  }, [getRoomsError]);

  return {
    create,
    put,
    rooms,
    roomsIsPending,
    putIsPanding,
    remove,
  };
};

export default useRoom;
