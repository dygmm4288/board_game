import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import _ from "lodash";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import roomApi from "../api/room";
import { getErrorMsg } from "../util/error";
import useAuth from "../zustand/auth";
import useMiniville, { useMinivilleRoom } from "../zustand/miniville";

const GET_ROOMS = "rooms/get";
const GET_ROOM = "room/get";

const useRoom = ({
  isRoomsFetch = false,
  id,
}: {
  isRoomsFetch?: boolean;
  id?: number;
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { setter } = useMinivilleRoom();
  const { setter: gameSetter } = useMiniville();

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
    queryKey: [GET_ROOMS],
    queryFn: () => roomApi.getRooms(),
    enabled: isRoomsFetch,
    gcTime: 0, // cache remove
  });

  const { data: room, error: getRoomError } = useQuery({
    queryKey: [GET_ROOM],
    queryFn: () => roomApi.getRoom(id!),
    enabled: !!id,
    retry: false,
    gcTime: 0, // cache remove
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
    if (getRoomsError || getRoomError) {
      const err = getRoomsError || getRoomError;
      onError(err as AxiosError);
    }
  }, [getRoomsError, getRoomError]);

  useEffect(() => {
    if (!room) return;
    setter(room);
    if (room.game_json) {
      gameSetter(JSON.parse(room.game_json));
    }
  }, [room]);

  const handleStartGame = () => {
    if (!id) {
      console.error("id가 없습니다.");
      return;
    }
    return put({ id, body: { confirm: "게임시작" } }).catch((err) => {});
  };

  const is_room_waiting = room && room.status === "waiting";
  const is_show_start_btn = is_room_waiting && _.gte(room.players.length, 2);

  return {
    create,
    put,
    rooms,
    roomsIsPending,
    putIsPanding,
    remove,
    room,
    is_show_start_btn,
    handleStartGame,
  };
};

export default useRoom;
