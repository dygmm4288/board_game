import { KeyboardEvent } from "react";
import useModal from "../../../zustand/modal";

export const Modal = () => {
  const { isOpen, hide, component, isCloseEscKey } = useModal();

  if (!isOpen) return null;

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isCloseEscKey) return;

    const key = e.key;
    if (key === "Escape") {
      hide();
    }
  };

  return (
    <div
      className='w-full h-full bg-opacity-50 blur-md bg-gray-600'
      onClick={() => hide()}
      onKeyDown={handleKeyDown}>
      {component}
    </div>
  );
};
