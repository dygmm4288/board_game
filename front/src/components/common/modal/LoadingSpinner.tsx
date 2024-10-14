const SPINNER_COUNT = 10;
const ANIMATION_DURATION = 1;

import { cn } from "../../../util/cn";

const LoadingSpinner = ({
  content = "잠시만 기다려주세요....",
}: {
  content?: string;
}) => {
  const spinner_classes = Array.from({ length: SPINNER_COUNT }, () =>
    cn(
      `w-2 h-8 rounded-2xl absolute top-1/2 left-1/2 origin-bottom bg-primary-color -translate-y-3.5 animate-spinner-fade`,
    ),
  );

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-48 h-48'>
        {spinner_classes.map((className, index) => (
          <div
            key={`spinner-${index}`}
            className={className}
            style={{
              rotate: `${36 * index}deg`,
              animationDelay: `${
                (index * ANIMATION_DURATION) / SPINNER_COUNT
              }s`,
            }}></div>
        ))}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default LoadingSpinner;
