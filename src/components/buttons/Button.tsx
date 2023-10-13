import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IProps> = props => {
  const { children, onClick, className } = props;

  return (
    <button
      className={clsx(
        'h-[43px] w-[120px] flex items-center justify-center bg-primary-main rounded-lg text-white text-base hover:bg-primary-light transition-colors active:scale-95',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
