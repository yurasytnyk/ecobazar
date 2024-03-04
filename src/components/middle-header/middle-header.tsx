import Link from "next/link";

import { Logo } from "@/components/logo/logo";
import { HeartIcon } from "@/components/icons/heart-icon";
import { PUBLIC_ROUTES } from "@/shared/enums/routes.enums";
import { ShoppingCart } from "@/components/shopping-cart/shopping-cart";

export const MiddleHeader = () => {
  return (
    <div className="border-b border-b-gray-300">
      <div className="container mx-auto py-7 flex justify-between items-center">
        <Logo href={PUBLIC_ROUTES.HOME} />

        <div className="flex items-center gap-2">
          {/* TODO: use href for the saved */}
          <Link href="/" aria-label="show saved items">
            <HeartIcon className="hover:text-red-500 duration-300 transition-colors" />
          </Link>

          <hr className="border h-6 mx-4 self-center" />

          <ShoppingCart amount={2} price={57} />
        </div>
      </div>
    </div>
  );
};
