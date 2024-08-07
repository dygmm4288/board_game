import { cn } from "../util/cn";

const border_solid = () => {
  return "border border-solid";
};
export const border_primary = () => {
  return cn(border_solid, "border-primary-border");
};

export const border_black = () => {
  return cn(border_solid, "border-black");
};
