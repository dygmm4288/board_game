import { BaseIconType } from "./icon.type";

const MinusIcon = ({ width = "9", height = "2" }: BaseIconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 9 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.649994 1.00002C0.649994 0.806725 0.794086 0.650024 0.971833 0.650024H8.32815C8.5059 0.650024 8.64999 0.806725 8.64999 1.00002C8.64999 1.19332 8.5059 1.35002 8.32815 1.35002H0.971833C0.794086 1.35002 0.649994 1.19332 0.649994 1.00002Z'
        fill='#767676'
      />
    </svg>
  );
};

export default MinusIcon;
