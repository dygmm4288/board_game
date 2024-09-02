import { create } from "zustand";
import { Establishment } from "../miniville_meta_data/establishments/types";
import { Landmark } from "../miniville_meta_data/landmarks/types";

interface PlayerInfo {
  coins: number;
  cards: Establishment[];
  landmarks: Landmark[];
  id: number;
  name: string;
}

interface MinivilleState {
  field16: number[];
  field712: number[];
  fieldLandmarks: number[];

  players: PlayerInfo[];

  setter: (state: MinivilleState) => void;
}
interface MinivilleRoomState {
  game_name: string;
  game_status: MinivilleState | null;
  max_players: number;
  players: string[];
  status: string;
  turn: number;

  setter: (state: MinivilleRoomState) => void;
}

const useMiniville = create<MinivilleState>()((set) => ({
  field16: [],
  field712: [],
  fieldLandmarks: [],
  players: [],
  setter: (newState) => set({ ...newState }),
}));

export const useMinivilleRoom = create<MinivilleRoomState>()((set) => ({
  game_name: "",
  game_status: null,
  max_players: 0,
  status: "",
  players: [],
  turn: 0,
  setter: (newState) => set({ ...newState }),
}));

export default useMiniville;
