import Image from 'next/image';

const ImageLayout = () => {
  return (
    <div className="relative overflow-hidden w-[calc(100vw-16px)] h-[calc(100vh-200px)] sm:w-[547px] sm:h-[575px]">
      <Image src="/user-product.png" alt="user-product" fill className="object-cover z-10 hidden sm:block" />
      <Image src="/user-product-mobile.png" alt="user-product" fill className="object-cover z-10 sm:hidden block" />
      <Image src="/sample-product.png" alt="user-product" fill className="object-cover z-20 hidden sm:block" />
      <Image src="/sample-product-mobile.png" alt="user-product" fill className="object-cover z-20 block sm:hidden " />
    </div>
  );
};

export default ImageLayout;
