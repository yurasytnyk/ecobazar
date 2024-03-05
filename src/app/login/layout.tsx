import { PropsWithChildren } from "react";

import { SubscribeSection } from "@/components/subscribe-section/subscribe-section";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {children}

      <SubscribeSection />
    </>
  );
}
