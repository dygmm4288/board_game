import { AxiosError } from "axios";
import AlertModal from "../components/common/modal/AlertModal";
import { getErrorMsg } from "../util/error";
import useModal from "../zustand/modal";

type ShowErrorType = (error: AxiosError, title?: string) => void;

const useErrorModal = () => {
  const { show } = useModal();

  const showError: ShowErrorType = (error, title = "실패") => {
    show({
      component: <AlertModal title={title} content={getErrorMsg(error)} />,
      isCloseClick: false,
    });
  };

  return {
    showError,
  };
};

export default useErrorModal;
