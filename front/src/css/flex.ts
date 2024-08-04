import { join_cn } from "../util/cn";

export const flex_row = () => {
  return 'flex flex-row';
}

export const items_center = () => {
  return join_cn(flex_row(), 'items-center');
}

export const flex_center = () => {
  return 'flex justify-center items-center';
}