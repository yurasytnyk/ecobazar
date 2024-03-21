import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

interface Props {
  href: string;
  icon?: ReactNode;
}

export const AccountNavLink = ({ icon, href, children }: PropsWithChildren<Props>) => {
  return (
    <li className="relative py-4 px-5 text-black bg-gray-50 after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:bg-success-main">
      <Link href={href} className="flex gap-2.5" prefetch={false}>
        {icon}

        {children}
      </Link>
    </li>
  );
};
