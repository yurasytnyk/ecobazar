import { HeaderNav } from "@/components/header-nav/header-nav";
import { MiddleHeader } from "@/components/middle-header/middle-header";
import { TopHeaderNav } from "@/components/top-header-nav/top-header-nav";

export const Header = () => {
  return (
    <header>
      <TopHeaderNav />

      <MiddleHeader />

      <HeaderNav />
    </header>
  );
};
