import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface IProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton: FC<IProps> = props => {
  const { icon, onClick, className } = props;

  // Renders
  return (
    <button
      className={clsx(
        'w-10 h-10 flex items-center justify-center hover:bg-gray-100 active:scale-95 rounded-md transition-colors',
        className,
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
