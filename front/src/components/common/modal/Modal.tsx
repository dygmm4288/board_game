import { KeyboardEvent } from "react";
import useModal from "../../../zustand/modal";

export const Modal = () => {
  const { isOpen, hide, component, isCloseEscKey, isCloseClick } = useModal();

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
      className='w-screen h-screen flex justify-center items-center  z-50 absolute inset-0'
      onClick={() => isCloseClick && hide()}
      onKeyDown={handleKeyDown}>
      <div
        className='z-10'
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {component}
      </div>
      <div className='backdrop-blur-sm bg-black/50 absolute inset-0 z-0'></div>
    </div>
  );
};
