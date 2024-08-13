import { join } from "lodash";

type CnArgs = string | (() => string) | { [key: string]: boolean };

export const join_cn = (...arr: string[]) => join(arr, " ");
export const cn = (...args: CnArgs[]) => {
  let result = "";

  args.forEach((arg) => {
    let plusResult: string = "";
    if (typeof arg === "string") plusResult = arg;
    else if (typeof arg === "function") plusResult = arg();
    else if (typeof arg === "object" && arg !== null) {
      const nextResult = Object.keys(arg).reduce((a, c) => {
        if (arg[c]) a += c;
        return a;
      }, "");

      plusResult = nextResult;
    }

    if (plusResult) result = join_cn(result, plusResult);
  });

  return result;
};
