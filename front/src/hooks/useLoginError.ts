import { AxiosError } from "axios";
import { getErrorMsg } from "../util/error";

const useLoginError = (error?: AxiosError) => {
  if (!error) return {};
  const errMsg = getErrorMsg(error);
  if(errMsg === 'inactive user') {
    return {
      passwordError: '존재하지 않는 사용자입니다.'
    };
  }
  return {};
};

export default useLoginError;
