import { create } from "zustand";

type ShowProps = {
  component: React.ReactNode;
  isCloseEscKey?: boolean;
  isCloseClick?: boolean;
};

type ShowType = (props: ShowProps) => void;

interface ModalState extends ShowProps {
  isOpen: boolean;
  show: ShowType;
  hide: () => void;

  component: React.ReactNode;
}

const useModal = create<ModalState>()((set) => ({
  isOpen: false,
  show: ({ component, isCloseClick = true, isCloseEscKey = false }) =>
    set(() => ({ isOpen: true, component, isCloseEscKey, isCloseClick })),
  hide: () => set(() => ({ isOpen: false })),
  component: null,
}));

export default useModal;
