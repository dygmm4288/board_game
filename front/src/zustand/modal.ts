import { create } from "zustand";

type ShowProps = {
  component: React.ReactNode;
  isCloseEscKey?: boolean;
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
  show: ({ component, isCloseEscKey = false }) =>
    set(() => ({ isOpen: true, component, isCloseEscKey })),
  hide: () => set(() => ({ isOpen: false })),
  component: null,
}));

export default useModal;
