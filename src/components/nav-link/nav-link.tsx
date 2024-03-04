import Link from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { ChevronDownIcon } from "@/components/icons/chevron-down";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  withChevron?: boolean;
}

export const NavLink = ({
  href,
  children,
  withChevron = false,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-2 group hover:text-success-main"
        {...props}
      >
        {children}

        {withChevron && <ChevronDownIcon className="group-hover:text-success-main" />}
      </Link>
    </li>
  );
};
