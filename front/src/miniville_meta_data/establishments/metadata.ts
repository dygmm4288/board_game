//
// Game metadata for establishments.
//

import { EstColor, EstType, Establishment } from "./types";
import { Expansion, Version } from "../../types";

export const SushiBar: Establishment = {
  _id: 0,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "초밥집",
  description: "방금 주사위를 굴린 플레이어로부터 동전 3개를 가져옵니다.",
  cost: 2,
  earn: 3,
  rolls: [1],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 5,
};

export const WheatField: Establishment = {
  _id: 1,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "밀밭",
  description: "은행으로부터 동전 1개를 받습니다.",
  cost: 1,
  earn: 1,
  rolls: [1, 2],
  color: EstColor.Blue,
  type: EstType.Wheat,
  _initial: 5,
};

export const Vineyard: Establishment = {
  _id: 2,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "포도밭",
  description: "은행으로부터 동전 2개를 받습니다.",
  cost: 1,
  earn: 2,
  rolls: [2],
  color: EstColor.Blue,
  type: EstType.Fruit,
  _initial: 5,
};

export const Bakery: Establishment = {
  _id: 3,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "빵집",
  description: "은행으로부터 동전 2개를 받습니다.",
  cost: 1,
  earn: 2,
  rolls: [2, 3],
  color: EstColor.Green,
  type: EstType.Shop,
  _initial: 5,
};

export const Cafe: Establishment = {
  _id: 4,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "카페",
  description: "방금 주사위를 굴린 플레이어로부터 동전 2개를 가져옵니다.",
  cost: 1,
  earn: 2,
  rolls: [3],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 5,
};

export const FlowerGarden: Establishment = {
  _id: 5,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "꽃밭",
  description: "은행으로부터 동전 2개를 받습니다.",
  cost: 2,
  earn: 2,
  rolls: [4],
  color: EstColor.Blue,
  type: EstType.None,
  _initial: 5,
};

export const ConvenienceStore: Establishment = {
  _id: 6,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "편의점",
  description: "은행으로부터 동전 3개를 받습니다.",
  cost: 1,
  earn: 3,
  rolls: [4],
  color: EstColor.Green,
  type: EstType.Shop,
  _initial: 5,
};

export const Forest: Establishment = {
  _id: 7,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "숲",
  description: "은행으로부터 동전 2개를 받습니다.",
  cost: 3,
  earn: 2,
  rolls: [5],
  color: EstColor.Blue,
  type: EstType.Gear,
  _initial: 5,
};

export const FlowerShop: Establishment = {
  _id: 8,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "꽃집",
  description:
    '자신이 소유한 "꽃밭" 건물 개수마다 은행으로부터 동전 3개를 받습니다.',
  cost: 1,
  earn: 3,
  rolls: [6],
  color: EstColor.Green,
  type: EstType.None,
  _initial: 3,
};

export const BusinessCenter: Establishment = {
  _id: 9,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "비즈니스 센터",
  description: "상대방과 건물을 교환할 수 있습니다.",
  cost: 3,
  earn: 0,
  rolls: [6],
  color: EstColor.Purple,
  type: EstType.None,
  _initial: 3,
};

export const CornField: Establishment = {
  _id: 10,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "옥수수밭",
  description: "은행으로부터 동전 3개를 받습니다.",
  cost: 2,
  earn: 3,
  rolls: [7],
  color: EstColor.Blue,
  type: EstType.Wheat,
  _initial: 5,
};

export const Stadium: Establishment = {
  _id: 11,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "경기장",
  description: "각 상대방으로부터 동전 3개를 가져옵니다.",
  cost: 3,
  earn: 3,
  rolls: [7],
  color: EstColor.Purple,
  type: EstType.None,
  _initial: 3,
};

export const BurgerJoint: Establishment = {
  _id: 12,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "햄버거 가게",
  description: "방금 주사위를 굴린 플레이어로부터 동전 2개를 가져옵니다.",
  cost: 1,
  earn: 2,
  rolls: [8],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 5,
};

export const FurnitureFactory: Establishment = {
  _id: 13,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "가구 공장",
  description:
    "자신이 소유한 Gear 건물 개수마다 은행으로부터 동전 4개를 받습니다.",
  cost: 4,
  earn: 4,
  rolls: [8],
  color: EstColor.Green,
  type: EstType.None,
  _initial: 3,
};

export const ShoppingDistrict: Establishment = {
  _id: 14,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "쇼핑 거리",
  description: "동전이 10개 이상인 각 상대방으로부터 절반을 가져옵니다 (내림).",
  cost: 3,
  earn: 0,
  rolls: [8, 9],
  color: EstColor.Purple,
  type: EstType.None,
  _initial: 3,
};

export const FamilyRestaurant: Establishment = {
  _id: 15,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "패밀리 레스토랑",
  description: "방금 주사위를 굴린 플레이어로부터 동전 2개를 가져옵니다.",
  cost: 2,
  earn: 2,
  rolls: [9, 10],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 5,
};

export const Winery: Establishment = {
  _id: 16,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "와인공장",
  description:
    "자신이 소유한 Fruit 건물 개수마다 은행으로부터 동전 3개를 받습니다.",
  cost: 3,
  earn: 3,
  rolls: [9],
  color: EstColor.Green,
  type: EstType.None,
  _initial: 3,
};

export const AppleOrchard: Establishment = {
  _id: 17,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "사과 과수원",
  description: "은행으로부터 동전 3개를 받습니다.",
  cost: 1,
  earn: 3,
  rolls: [10],
  color: EstColor.Blue,
  type: EstType.Fruit,
  _initial: 5,
};

export const FoodWarehouse: Establishment = {
  _id: 18,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "식품 창고",
  description:
    "자신이 소유한 Cup 건물 개수마다 은행으로부터 동전 2개를 받습니다.",
  cost: 2,
  earn: 2,
  rolls: [10, 11],
  color: EstColor.Green,
  type: EstType.None,
  _initial: 3,
};

export const Mine: Establishment = {
  _id: 19,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "광산",
  description: "은행으로부터 동전 6개를 받습니다.",
  cost: 4,
  earn: 6,
  rolls: [11, 12],
  color: EstColor.Blue,
  type: EstType.Gear,
  _initial: 5,
};

/**
 * List of all establishments, and order they should be displayed.
 */
export const _ESTABLISHMENTS = [
  SushiBar,
  WheatField,
  Vineyard,
  Bakery,
  Cafe,
  FlowerGarden,
  ConvenienceStore,
  Forest,
  FlowerShop,
  BusinessCenter,
  CornField,
  Stadium,
  BurgerJoint,
  FurnitureFactory,
  ShoppingDistrict,
  FamilyRestaurant,
  Winery,
  AppleOrchard,
  FoodWarehouse,
  Mine,
];

/**
 * Establishments used in the Base expansion.
 */
export const _BASE_ESTABLISHMENTS = _ESTABLISHMENTS
  .filter((est) => est.expansion === Expansion.Base)
  .map((est) => est._id);

/**
 * Establishments added in the Harbor expansion.
 */
export const _HARBOR_ESTABLISHMENTS = _ESTABLISHMENTS
  .filter((est) => est.expansion === Expansion.Harbor)
  .map((est) => est._id);

/**
 * Establishments added in the Millionaire's Row expansion.
 */
export const _MILLION_ESTABLISHMENTS = _ESTABLISHMENTS
  .filter((est) => est.expansion === Expansion.Million)
  .map((est) => est._id);

/**
 * Establishments a player starts with in Machi Koro 1.
 */
export const _STARTING_ESTABLISHMENTS = [WheatField._id, Bakery._id];
