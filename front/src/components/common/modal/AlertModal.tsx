import { p_btn } from "../../../style/button";
import { cn } from "../../../util/cn";
import useModal from "../../../zustand/modal";

type Props = {
  title?: string;
  content?: string;
};
const AlertModal = ({ title, content }: Props) => {
  const { hide } = useModal();
  return (
    <article className='px-[50px] py-[20px] w-[240px] flex flex-col gap-[20px] bg-white rounded-10'>
      {title && <h1>{title}</h1>}
      {content && <p>{content}</p>}
      <button className={cn(p_btn)} onClick={() => hide()}>
        닫기
      </button>
    </article>
  );
};

export default AlertModal;
