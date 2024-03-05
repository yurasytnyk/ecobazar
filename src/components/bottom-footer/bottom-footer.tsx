import Image from "next/image";

import paymentMethodsImg from "/public/images/common/payment-methods.png";

export const BottomFooter = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-300 py-7">Ecobazar eCommerce &copy; 2021. All Rights Reserved.</p>

      <div className="relative aspect-[277/32] w-[277px] pointer-events-none">
        <Image src={paymentMethodsImg} fill={true} alt="payment methods" />
      </div>
    </div>
  );
};
