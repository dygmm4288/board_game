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

const useMiniville = create<MinivilleState>()((set) => ({
  field16: [],
  field712: [],
  fieldLandmarks: [],
  players: [],
  setter: (newState) => set({ ...newState }),
}));

export default useMiniville;
