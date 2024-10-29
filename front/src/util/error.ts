import { AxiosError } from "axios";
import _, { isArray } from "lodash";

interface FastAPIError {
  data: {
    detail: { msg: string }[];
  };
}

export const getError = (err: AxiosError) => {
  const response = err.response as FastAPIError;

  if (!response || !response.data) return "잠시 후 다시 시도해 주세요";
  if (isArray(!response.data.detail)) return response.data.detail[0].msg;
  return response.data.detail;
};

export const getErrorMsg = (err: AxiosError) => {
  const error = getError(err);

  if (_.isString(error)) return error;

  return error[0].msg;
};
