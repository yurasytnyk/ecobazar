import Link from "next/link";

import { LogoIcon } from "@/components/icons/logo-icon";

interface Props {
  href: string;
}

export const Logo = ({ href }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 font-medium text-[32px]"
      aria-label="Ecobazar"
    >
      <LogoIcon />
      Ecobazar
    </Link>
  );
};
