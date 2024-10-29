// Game metadata for landmarks.
//
//

import { Expansion, Version } from "../../types";
import { EstType } from "../establishments/types";
import { Landmark } from "./types";

// List of landmarks
export const CityHall: Landmark = {
  _id: 0,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "시청",
  miniName: "시청",
  description:
    "설립물을 구매하기 전에 동전이 0개일 경우, 은행에서 동전 1개를 받습니다.",
  coins: 1,
  cost: [0],
};

export const LoanOffice: Landmark = {
  _id: 1,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "대출 사무소",
  miniName: "대출 사무소",
  description:
    "이 랜드마크는 랜드마크가 없는 유일한 플레이어일 때만 건설할 수 있습니다. 모든 랜드마크의 건설 비용을 2 동전 줄입니다 (건설자만).",
  coins: 2,
  cost: [10],
};

export const FarmersMarket: Landmark = {
  _id: 2,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "농민 시장",
  miniName: "농민 시장",
  description:
    "귀하의 Wheat 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).",
  coins: 1,
  cost: [10, 14, 22],
};

export const FrenchRestaurant: Landmark = {
  _id: 3,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "프랑스 레스토랑",
  miniName: "프랑스 레스토랑",
  description: "각 상대방에게서 동전 2개를 가져옵니다 (건설자만).",
  coins: 2,
  cost: [10, 14, 22],
};

export const MovingCompany: Landmark = {
  _id: 4,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "이사 회사",
  miniName: "이사 회사",
  description:
    "주사위를 두 번 굴리면, 이전 플레이어에게 1개의 설립물을 제공합니다 (모든 플레이어).",
  coins: null,
  cost: [10, 14, 22],
};

export const Observatory: Landmark = {
  _id: 5,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "천문대",
  miniName: "천문대",
  description: '"발사대"의 건설 비용을 5 동전 줄입니다 (모든 플레이어).',
  coins: 5,
  cost: [10, 14, 22],
};

export const PublishingHouse: Landmark = {
  _id: 6,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "출판사",
  miniName: "출판사",
  description:
    "각 상대방이 가진 Shop 건물 수만큼, 각 상대방에게서 동전 1개를 가져옵니다 (건설자만).",
  coins: 1,
  cost: [10, 14, 22],
};

export const ShoppingMall: Landmark = {
  _id: 7,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "쇼핑몰",
  miniName: "쇼핑몰",
  description:
    "귀하의 Shop 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).",
  coins: 1,
  cost: [10, 14, 22],
};

export const TechStartup: Landmark = {
  _id: 8,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "테크 스타트업",
  miniName: "테크 스타트업",
  description:
    "주사위를 12로 굴리면 은행에서 동전 8개를 받습니다 (모든 플레이어).",
  coins: 8,
  cost: [10, 14, 22],
};

export const Airport: Landmark = {
  _id: 9,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "공항",
  miniName: "공항",
  description:
    "턴에 아무것도 건설하지 않으면 은행에서 동전 5개를 받습니다 (모든 플레이어).",
  coins: 5,
  cost: [12, 16, 22],
};

export const AmusementPark: Landmark = {
  _id: 10,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "놀이공원",
  miniName: "놀이공원",
  description:
    "주사위를 두 번 굴리면 이 턴 후에 추가로 턴을 얻습니다 (모든 플레이어).",
  coins: null,
  cost: [12, 16, 22],
};

export const Charterhouse: Landmark = {
  _id: 11,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "차터하우스",
  miniName: "차터하우스",
  description:
    "주사위를 두 번 굴려 동전이 0개이면, 은행에서 동전 3개를 받습니다 (모든 플레이어).",
  coins: 3,
  cost: [12, 16, 22],
};

export const ExhibitionHall: Landmark = {
  _id: 12,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "전시홀",
  miniName: "전시홀",
  description:
    "동전이 10개 이상인 각 상대방에게서 절반을 가져옵니다 (건설자만).",
  coins: 0,
  cost: [12, 16, 22],
};

export const Forge: Landmark = {
  _id: 13,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "대장간",
  miniName: "대장간",
  description:
    "귀하의 Gear 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).",
  coins: 1,
  cost: [12, 16, 22],
};

export const Museum: Landmark = {
  _id: 14,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "박물관",
  miniName: "박물관",
  description:
    "각 상대방이 건설한 랜드마크 수에 따라 동전 3개를 가져옵니다 (건설자만).",
  coins: 3,
  cost: [12, 16, 22],
};

export const Park: Landmark = {
  _id: 15,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "공원",
  miniName: "공원",
  description:
    "모든 플레이어의 동전을 가능한 한 고르게 분배하고, 차액은 은행에서 보충합니다.",
  coins: null,
  cost: [12, 16, 22],
};

export const RadioTower: Landmark = {
  _id: 16,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "라디오 타워",
  miniName: "라디오 타워",
  description: "이 턴 후에 추가 턴을 얻습니다 (건설자만).",
  coins: null,
  cost: [12, 16, 22],
};

export const SodaBottlingPlant: Landmark = {
  _id: 17,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "소다 병입 공장",
  miniName: "소다 병입 공장",
  description:
    "귀하의 Cup 건물이 활성화될 때 동전 1개를 추가로 얻습니다 (모든 플레이어).",
  coins: 1,
  cost: [12, 16, 22],
};

export const Temple: Landmark = {
  _id: 18,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "사원",
  miniName: "사원",
  description:
    "주사위를 두 번 굴리면, 각 상대방에게서 동전 2개를 가져옵니다 (모든 플레이어).",
  coins: 2,
  cost: [12, 16, 22],
};

export const TVStation: Landmark = {
  _id: 19,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "TV 방송국",
  miniName: "TV 방송국",
  description:
    "각 상대방이 가진 Cup 건물 수만큼, 각 상대방에게서 동전 1개를 가져옵니다 (건설자만).",
  coins: 1,
  cost: [12, 16, 22],
};

export const LaunchPad: Landmark = {
  _id: 20,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "발사대",
  miniName: "발사대",
  description: "게임에서 승리합니다!",
  coins: null,
  cost: [45, 38, 25],
};

/**
 * List of all landmarks, and order they should be displayed.
 */
export const _LANDMARKS = [
  CityHall,
  LoanOffice,
  FarmersMarket,
  FrenchRestaurant,
  MovingCompany,
  Observatory,
  PublishingHouse,
  ShoppingMall,
  TechStartup,
  Airport,
  AmusementPark,
  Charterhouse,
  ExhibitionHall,
  Forge,
  Museum,
  Park,
  RadioTower,
  SodaBottlingPlant,
  Temple,
  TVStation,
  LaunchPad,
];

/**
 * Landmarks used in the Base expansion.
 */
export const _BASE_LANDMARKS = _LANDMARKS
  .filter((land) => land.expansion === Expansion.Base)
  .map((land) => land._id);

/**
 * Landmarks added in the Harbor expansion.
 */
export const _HARBOR_LANDMARKS = _LANDMARKS
  .filter((land) => land.expansion === Expansion.Harbor)
  .map((land) => land._id);

/**
 * Additional landmarks a player starts with in the Harbor expansion.
 */
export const _HARBOR_STARTING_LANDMARKS = [CityHall._id];
