//
// Game metadata for establishments.
//

import { EstColor, EstType, Establishment } from "./types";
import { Expansion, Version } from "../types";

export const SushiBar: Establishment = {
  _id: 0,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "스시바",
  description:
    'If you have a "Harbor", take 3 coins from the player who just rolled.',
  cost: 2,
  earn: 3, // only if player has Harbor
  rolls: [1],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 6,
};

export const WheatField: Establishment = {
  _id: 1,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "밀밭",
  description: "Get 1 coin from the bank.",
  cost: 1,
  earn: 1,
  rolls: [1],
  color: EstColor.Blue,
  type: EstType.Wheat,
  _initial: 6,
};

export const Ranch: Establishment = {
  _id: 2,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "농장",
  description: "Get 1 coin from the bank.",
  cost: 1,
  earn: 1,
  rolls: [2],
  color: EstColor.Blue,
  type: EstType.Animal,
  _initial: 6,
};

export const GeneralStore: Establishment = {
  _id: 3,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "잡화점",
  description:
    "If you have less than 2 landmarks built, get 2 coins from the bank.",
  cost: 0,
  earn: 2, // only if player has < 2 landmarks built
  rolls: [2],
  color: EstColor.Green,
  type: EstType.Shop,
  _initial: 6,
};

export const Bakery: Establishment = {
  _id: 4,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "빵집",
  description: "Get 1 coin from the bank.",
  cost: 1,
  earn: 1,
  rolls: [2, 3],
  color: EstColor.Green,
  type: EstType.Shop,
  _initial: 6,
};

export const Cafe: Establishment = {
  _id: 5,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "카페",
  description: "Take 1 coin from the player who just rolled.",
  cost: 2,
  earn: 1,
  rolls: [3],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 6,
};

export const CornField: Establishment = {
  _id: 6,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "옥수수밭",
  description:
    "If you have less than 2 landmarks built, get 1 coin from the bank.",
  cost: 2,
  earn: 1, // only if player has < 2 landmarks built
  rolls: [3, 4],
  color: EstColor.Blue,
  type: EstType.Wheat,
  _initial: 6,
};

export const FlowerGarden: Establishment = {
  _id: 7,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "꽃밭",
  description: "Get 1 coin from the bank.",
  cost: 2,
  earn: 1,
  rolls: [4],
  color: EstColor.Blue,
  type: EstType.Wheat,
  _initial: 6,
};

export const ConvenienceStore: Establishment = {
  _id: 8,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "편의점",
  description: "Get 3 coins from the bank.",
  cost: 2,
  earn: 3,
  rolls: [4],
  color: EstColor.Green,
  type: EstType.Shop,
  _initial: 6,
};

export const DemolitionCompany: Establishment = {
  _id: 9,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "철거회사",
  description:
    "If possible, you must demolish one of your built landmarks. When you do, get 8 coins from the bank.",
  cost: 2,
  earn: 8, // only if demolished a landmark
  rolls: [4],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const FrenchRestaurant: Establishment = {
  _id: 10,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "프렌치레스토랑",
  description:
    "If the player who just rolled has 2 or more landmarks built, take 5 coins from them.",
  cost: 3,
  earn: 5, // only if player who rolled has >= 2 landmarks built
  rolls: [5],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 6,
};

export const Forest: Establishment = {
  _id: 11,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "숲",
  description: "Get 1 coin from the bank.",
  cost: 3,
  earn: 1,
  rolls: [5],
  color: EstColor.Blue,
  type: EstType.Gear,
  _initial: 6,
};

export const LoanOffice: Establishment = {
  _id: 12,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "대출사무소",
  description: "Pay 2 coins to the bank.",
  cost: -5,
  earn: -2,
  rolls: [5, 6],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const FlowerShop: Establishment = {
  _id: 13,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "꽃집",
  description:
    'Get 1 coin from the bank for each "Flower Garden" establishment you own.',
  cost: 1,
  earn: 1, // coins earned per `FlowerGarden` establishment
  rolls: [6],
  color: EstColor.Green,
  type: EstType.Shop,
  _initial: 6,
};

export const PizzaJoint: Establishment = {
  _id: 14,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "피자가게",
  description: "Take 1 coin from the player who just rolled.",
  cost: 1,
  earn: 1,
  rolls: [7],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 6,
};

export const Vineyard: Establishment = {
  _id: 15,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "포도원",
  description: "Get 3 coins from the bank.",
  cost: 3,
  earn: 3,
  rolls: [7],
  color: EstColor.Blue,
  type: EstType.Wheat,
  _initial: 6,
};

export const CheeseFactory: Establishment = {
  _id: 16,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "치즈공장",
  description:
    "Get 3 coins from the bank for each " +
    EstType.Animal +
    " establishment you own.",
  cost: 5,
  earn: 3, // coins earned per Animal establishment
  rolls: [7],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const HamburgerStand: Establishment = {
  _id: 17,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "햄버거가판대",
  description: "Take 1 coin from the player who just rolled.",
  cost: 1,
  earn: 1,
  rolls: [8],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 6,
};

export const MackerelBoat: Establishment = {
  _id: 18,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "고등어배",
  description: 'If you have a "Harbor", get 3 coins from the bank.',
  cost: 2,
  earn: 3, // only if player has Harbor
  rolls: [8],
  color: EstColor.Blue,
  type: null,
  _initial: 6,
};

export const FurnitureFactory: Establishment = {
  _id: 19,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "가구공장",
  description:
    "Get 3 coins from the bank for each " +
    EstType.Gear +
    " establishment you own.",
  cost: 3,
  earn: 3, // coins earned per Gear establishment
  rolls: [8],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const Mine: Establishment = {
  _id: 20,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "광산",
  description: "Get 5 coins from the bank.",
  cost: 6,
  earn: 5,
  rolls: [9],
  color: EstColor.Blue,
  type: EstType.Gear,
  _initial: 6,
};

export const Winery: Establishment = {
  _id: 21,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "포도주양조장",
  description:
    'Get 6 coins from the bank for each "Vineyard" establishment you own. ' +
    "Then, close this establishment for renovations.",
  cost: 3,
  earn: 6, // coins earned per `Vineyard` establishment
  rolls: [9],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const FamilyRestaurant: Establishment = {
  _id: 22,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "패밀리레스토랑",
  description: "Take 2 coins from the player who just rolled.",
  cost: 3,
  earn: 2,
  rolls: [9, 10],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 6,
};

export const MovingCompany: Establishment = {
  _id: 23,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "이삿짐센터",
  description:
    "Give a non-Major establishment to an opponent. Then get 4 coins from the bank.",
  cost: 2,
  earn: 4,
  rolls: [9, 10],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const AppleOrchard: Establishment = {
  _id: 24,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "사과농장",
  description: "Get 3 coins from the bank.",
  cost: 3,
  earn: 3,
  rolls: [10],
  color: EstColor.Blue,
  type: EstType.Wheat,
  _initial: 6,
};

export const SodaBottlingPlant: Establishment = {
  _id: 25,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "소다병입공장",
  description:
    "Get 1 coin from the bank for each " +
    EstType.Cup +
    " establishment owned by all players.",
  cost: 5,
  earn: 1, // coins earned per Cup establishment
  rolls: [11],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const FarmersMarket: Establishment = {
  _id: 26,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "농산물시장",
  description:
    "Get 2 coins from the bank for each " +
    EstType.Wheat +
    " establishment you own.",
  cost: 2,
  earn: 2, // coins earned per Wheat establishment
  rolls: [11, 12],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const FoodWarehouse: Establishment = {
  _id: 27,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "식품창고",
  description:
    "Get 2 coins from the bank for each " +
    EstType.Cup +
    " establishment you own.",
  cost: 2,
  earn: 2, // coins earned per Cup establishment
  rolls: [12, 13],
  color: EstColor.Green,
  type: null,
  _initial: 6,
};

export const MembersOnlyClub: Establishment = {
  _id: 28,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "회원전용시설",
  description:
    "If the player who just rolled has 3 or more landmarks built, take all their coins.",
  cost: 4,
  earn: 0, // (special case; determined by opponent coins)
  rolls: [12, 13, 14],
  color: EstColor.Red,
  type: EstType.Cup,
  _initial: 6,
};

export const TunaBoat: Establishment = {
  _id: 29,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "참치배",
  description:
    'Roll 2 dice. If you have a "Harbor", get as many coins as the dice total from the bank.',
  cost: 5,
  earn: 0, // (special case; determined by tuna boat roll)
  rolls: [12, 13, 14],
  color: EstColor.Blue,
  type: null,
  _initial: 6,
};

export const Stadium: Establishment = {
  _id: 30,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "종합경기장",
  description: "Take 2 coins from each opponent.",
  cost: 6,
  earn: 2,
  rolls: [6],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const TVStation: Establishment = {
  _id: 31,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "방송국",
  description: "Take 5 coins from an opponent of your choice.",
  cost: 7,
  earn: 5,
  rolls: [6],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const Office: Establishment = {
  _id: 32,
  version: Version.MK1,
  expansion: Expansion.Base,
  name: "임대사무실",
  description: "Exchange a non-Major establishment with an opponent.",
  cost: 8,
  earn: 0,
  rolls: [6],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const Publisher: Establishment = {
  _id: 33,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "출판사",
  description:
    "Take 1 coin from each opponent for each " +
    EstType.Cup +
    " and " +
    EstType.Shop +
    " establishment they own.",
  cost: 5,
  earn: 1, // coins earned per Cup and Shop establishment
  rolls: [7],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const RenovationCompany: Establishment = {
  _id: 34,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "보수공사업체",
  description:
    "Choose a non-Major establishment. " +
    "All establishments owned by any player of that type are closed for renovations. " +
    "Get 1 coin from each opponent for each of their buildings closed for renovations.",
  cost: 4,
  earn: 1, // coins earned per establishment closed for renovations
  rolls: [8],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const TaxOffice: Establishment = {
  _id: 35,
  version: Version.MK1,
  expansion: Expansion.Harbor,
  name: "세무서",
  description:
    "From each opponent who has 10 or more coins, take half, rounded down.",
  cost: 4,
  earn: 0, // (special case; determined by opponent coins)
  rolls: [8, 9],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const TechStartup: Establishment = {
  _id: 36,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "기술스타트업",
  description:
    "At the end of each of your turns, you may place 1 coin on this card. " +
    "The total placed here is your investment. " +
    "When activated, take an amount equal to your investment from each opponent.",
  cost: 1,
  earn: 0, // (special case; determined by investment)
  rolls: [10],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const ExhibitHall: Establishment = {
  _id: 37,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "전시장",
  description:
    "You may choose to activate another of your non-Major establishments in place of this one. " +
    "If you do, return this card to the market.",
  cost: 7,
  earn: 0, // (special case; determined by activated establishment)
  rolls: [10],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

export const Park: Establishment = {
  _id: 38,
  version: Version.MK1,
  expansion: Expansion.Million,
  name: "공원",
  description:
    "Redistribute all players' coins as evenly as possible, making up any difference with coins from the bank.",
  cost: 3,
  earn: 0, // (special case; coins are redistributed)
  rolls: [11, 12, 13],
  color: EstColor.Purple,
  type: null,
  _initial: null,
};

/**
 * List of all establishments, and order they should be displayed.
 */
export const _ESTABLISHMENTS = [
  SushiBar,
  WheatField,
  Ranch,
  GeneralStore,
  Bakery,
  Cafe,
  CornField,
  FlowerGarden,
  ConvenienceStore,
  DemolitionCompany,
  FrenchRestaurant,
  Forest,
  LoanOffice,
  FlowerShop,
  PizzaJoint,
  Vineyard,
  CheeseFactory,
  HamburgerStand,
  MackerelBoat,
  FurnitureFactory,
  Mine,
  Winery,
  FamilyRestaurant,
  MovingCompany,
  AppleOrchard,
  SodaBottlingPlant,
  FarmersMarket,
  FoodWarehouse,
  MembersOnlyClub,
  TunaBoat,
  Stadium,
  TVStation,
  Office,
  Publisher,
  RenovationCompany,
  TaxOffice,
  TechStartup,
  ExhibitHall,
  Park,
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
