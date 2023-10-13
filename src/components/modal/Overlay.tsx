import clsx from 'clsx';
import { FC } from 'react';

interface IProps {
  open: boolean;
  onClose?: () => void;
}

const Overlay: FC<IProps> = props => {
  const { open, onClose } = props;

  const openClass = [open ? 'visible opacity-100' : 'invisible opacity-0'];

  return (
    <div
      className={clsx(
        'w-full h-full fixed bg-secondary-main flex items-center justify-center transition-opacity bg-opacity-80 duration-400 z-10',
        openClass,
      )}
    />
  );
};

export default Overlay;
