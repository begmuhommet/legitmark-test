import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import ModalFooter from './ModalFooter';
import ModalHead from './ModalHead';

interface IProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IProps> = props => {
  const { open, onClose } = props;

  const openClass = [open ? 'visible opacity-100' : 'invisible opacity-0'];

  return (
    <>
      <div
        className={clsx(
          'w-full h-full fixed bg-secondary-main flex items-center justify-center transition-opacity bg-opacity-80 duration-400 z-10',
          openClass,
        )}
      />
      <div
        className={clsx(
          'z-20 transition-opacity bg-opacity-80 duration-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-auto',
          openClass,
        )}
      >
        <div className="bg-white rounded-lg">
          <ModalHead onClose={onClose} />

          <div className="relative overflow-hidden w-[calc(100vw-32px)] h-[calc(100vh-200px)] sm:w-[547px] sm:h-[575px]">
            <Image src="/user-product.png" alt="user-product" fill className="object-cover z-10 hidden sm:block" />
            <Image
              src="/user-product-mobile.png"
              alt="user-product"
              fill
              className="object-cover z-10 sm:hidden block"
            />
            <Image src="/sample-product.png" alt="user-product" fill className="object-cover z-20 hidden sm:block" />
            <Image
              src="/sample-product-mobile.png"
              alt="user-product"
              fill
              className="object-cover z-20 block sm:hidden "
            />
          </div>

          <ModalFooter />
        </div>
      </div>
    </>
  );
};

export default Modal;
