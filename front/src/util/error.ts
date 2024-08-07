import { AxiosError } from "axios";
import { isArray } from 'lodash';

interface FastAPIError {
  data: {
    detail: { msg: string }[];
  };
}

export const getErrorMsg = (err: AxiosError) => {
  const response = err.response as FastAPIError;

  if (!response || !response.data) return "잠시 후 다시 시도해 주세요";
  if (isArray(!response.data.detail)) return response.data.detail[0].msg;
  return response.data.detail;
};
