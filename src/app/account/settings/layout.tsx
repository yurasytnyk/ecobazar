import { PropsWithChildren } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { loginBreadcrumbs } from "@/features/login/configs/breadcrumbs.configs";
import { SubscribeSection } from "@/components/subscribe-section/subscribe-section";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumbs />

      {children}

      <SubscribeSection />
    </>
  );
}
