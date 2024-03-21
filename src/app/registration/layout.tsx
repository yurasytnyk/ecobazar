import { PropsWithChildren } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { SubscribeSection } from "@/components/subscribe-section/subscribe-section";
import { registrationBreadcrumbs } from "@/features/login/configs/breadcrumbs.configs";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumbs options={registrationBreadcrumbs} />

      {children}

      <SubscribeSection />
    </>
  );
}
