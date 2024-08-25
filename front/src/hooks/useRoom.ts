import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import roomApi from "../api/room";
import { getErrorMsg } from "../util/error";
import useAuth from "../zustand/auth";

const GET_ROOM = "room/get";

const useRoom = () => {
  const { logout } = useAuth();

  const onError = (err: AxiosError) => {
    const msg = getErrorMsg(err);

    if (msg === "inactive user") logout();
  };

  const { data: rooms, error: getRoomsError } = useQuery({
    queryKey: [GET_ROOM],
    queryFn: () => roomApi.getRooms(),
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

  const { mutateAsync: put } = useMutation({
    mutationFn: (data: {
      id: number;
      body: { confirm: string; updates: Record<string, string> };
    }) => roomApi.putRoom(data.id, data.body),
  });

  useEffect(() => {
    if (getRoomsError) onError(getRoomsError as AxiosError);
  }, [getRoomsError]);

  return {
    create,
    put,
    rooms,
    remove,
  };
};

export default useRoom;
