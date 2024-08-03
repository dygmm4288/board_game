type Props = {
  width: string | number;
  height: string | number;
};
const HomeIcon = ({ width, height }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1_44)'>
        <path
          d='M22.1667 10.1617L15.9448 5.32239C15.3988 4.89762 14.7268 4.66699 14.035 4.66699C13.3432 4.66699 12.6712 4.89762 12.1252 5.32239L5.90216 10.1617C5.52818 10.4526 5.2256 10.825 5.01754 11.2506C4.80948 11.6763 4.70144 12.1438 4.70166 12.6176V21.0176C4.70166 21.6364 4.94749 22.2299 5.38508 22.6675C5.82266 23.1051 6.41616 23.3509 7.03499 23.3509H21.035C21.6538 23.3509 22.2473 23.1051 22.6849 22.6675C23.1225 22.2299 23.3683 21.6364 23.3683 21.0176V12.6176C23.3683 11.6574 22.925 10.7509 22.1667 10.1617Z'
          stroke='#767676'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_44'>
          <rect width='28' height='28' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
