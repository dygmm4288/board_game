import { AxiosError } from "axios";
import AlertModal from "../components/common/modal/AlertModal";
import { getErrorMsg } from "../util/error";
import useModal from "../zustand/modal";

type ShowErrorType = (error: string | AxiosError, title?: string) => void;

const useErrorModal = () => {
  const { show } = useModal();

  const showError: ShowErrorType = (error, title = "실패") => {
    const content = error instanceof AxiosError ? getErrorMsg(error) : error;
    show({
      component: <AlertModal title={title} content={content} />,
      isCloseClick: false,
    });
  };

  return {
    showError,
  };
};

export default useErrorModal;
