import Link from "next/link";

import { LogoIcon } from "@/components/icons/logo-icon";

interface Props {
  href: string;
  className?: string;
}

export const Logo = ({ href, className }: Props) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 font-medium text-[32px] leading-5 ${className}`}
      aria-label="Ecobazar"
    >
      <LogoIcon />
      Ecobazar
    </Link>
  );
};
