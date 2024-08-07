import { AxiosError } from "axios";

interface FastAPIError {
  data: {
    detail: { msg: string }[];
  };
}

export const getErrorMsg = (err: AxiosError) => {
  const response = err.response as FastAPIError;

  if (!response || !response.data) return "잠시 후 다시 시도해 주세요";

  return response.data.detail[0].msg;
};
