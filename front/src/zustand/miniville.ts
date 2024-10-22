import { create } from "zustand";
import { Room } from "../api/room";
import { Establishment } from "../miniville_meta_data/establishments/types";
import { Landmark } from "../miniville_meta_data/landmarks/types";

interface PlayerInfo {
  coins: number;
  cards: Establishment[];
  landmarks: Landmark[];
  id: number;
  name: string;
}

export interface MinivilleState {
  field_16: { [key: number]: number };
  field_712: { [key: number]: number };
  field_landmarks: number[];

  players: PlayerInfo[];

  setter: (state: MinivilleState) => void;
}
interface MinivilleRoomState extends Room {
  setter: (state: Room) => void;
}

const useMiniville = create<MinivilleState>()((set) => ({
  field_16: [],
  field_712: [],
  field_landmarks: [],
  players: [],
  setter: (newState) => {
    set({ ...newState });
  },
}));

export const useMinivilleRoom = create<MinivilleRoomState>()((set) => ({
  id: -1,
  game_name: "",
  game_status: null,
  game_json: "",
  max_players: 0,
  status: "",
  players: [],
  turn: 0,
  setter: (newState) => set({ ...newState }),
}));

export default useMiniville;
