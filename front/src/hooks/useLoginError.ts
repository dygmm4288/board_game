import { AxiosError } from "axios";
import { getError } from "../util/error";

const useLoginError = (error?: AxiosError) => {
  if (!error) return {};
  const errMsg = getError(error);
  if (errMsg === "inactive user") {
    return {
      passwordError: "회원정보가 올바르지 않습니다.",
    };
  }
  return {};
};

export default useLoginError;
