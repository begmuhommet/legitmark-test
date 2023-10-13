import clsx from 'clsx';
import { FC } from 'react';
import ImageLayout from './ImageLayout';
import ModalFooter from './ModalFooter';
import ModalHead from './ModalHead';
import Overlay from './Overlay';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const Modal: FC<IProps> = props => {
  const { open, onClose } = props;

  // Variables
  const openClass = [open ? 'visible opacity-100' : 'invisible opacity-0'];

  // Renders
  return (
    <>
      <Overlay open={open} />
      <div
        className={clsx(
          'z-20 transition-opacity bg-opacity-80 duration-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-4 overflow-auto',
          openClass,
        )}
      >
        <div className="bg-white rounded-lg">
          <ModalHead onClose={onClose} />
          <ImageLayout />
          <ModalFooter />
        </div>
      </div>
    </>
  );
};

export default Modal;
