import Link from "next/link";
import Image from "next/image";

import { Breadcrumb } from "@/types/breadcrumb.types";
import { HouseIcon } from "@/components/icons/house-icon";
import { PUBLIC_ROUTES } from "@/shared/enums/routes.enums";
import breadcrumbsBgImg from "/public/images/common/breadcrumbs-bg.jpg";
import { ChevronRightIcon } from "@/components/icons/chevron-right-icon";

interface Props {
  options?: Breadcrumb[];
}

export const Breadcrumbs = ({ options = [] }: Props) => {
  return (
    <div className="relative aspect-[1920/120] flex items-center">
      <Image
        src={breadcrumbsBgImg}
        fill={true}
        placeholder="blur"
        alt="breadcrumbs background with vegetables`"
        className="-z-[1]"
      />

      <nav className="container mx-auto">
        <ol className="flex items-center gap-3">
          <li className="text-gray-400">
            <Link href={PUBLIC_ROUTES.HOME}>
              <HouseIcon />
            </Link>
          </li>

          {options.map(({ label, href }, index) => (
            <li key={index} className="text-gray-400 last-of-type:text-success-main">
              <Link href={href} className="flex gap-3 items-center">
                <ChevronRightIcon />

                {label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
