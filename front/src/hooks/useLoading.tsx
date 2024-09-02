import { useEffect } from "react";
import LoadingSpinner from "../components/common/modal/LoadingSpinner";
import useModal from "../zustand/modal";

const useLoading = ({
  isShow,
  content,
}: {
  isShow: boolean;
  content?: string;
}) => {
  const { show, hide } = useModal();

  useEffect(() => {
    if (isShow) {
      show({
        component: <LoadingSpinner content={content} />,
        isCloseClick: false,
      });
      return;
    }

    hide();
  }, [isShow]);
};

export default useLoading;
