type Props = {
  title?: string;
  content?: string;
};
const AlertModal = ({ title, content }: Props) => {
  return (
    <article className='px-[50px] py-[20px] w-[240px] flex flex-col gap-[20px] bg-white rounded-10'>
      {title && <h1>{title}</h1>}
      {content && <p>{content}</p>}
    </article>
  );
};

export default AlertModal;
