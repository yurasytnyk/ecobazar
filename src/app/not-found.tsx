import Link from "next/link";

import { NotFoundIcon } from "@/components/icons/not-found";
import { PUBLIC_ROUTES } from "@/shared/enums/routes.enums";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

export default function NotFoundPage() {
  return (
    <>
      <Breadcrumbs />

      <main>
        <section className="container mx-auto text-center flex flex-col items-center pt-20">
          <NotFoundIcon />

          <h1 className="mt-8 font-semibold text-[40px]">Oops! page not found</h1>

          <p className="mt-5 mb-6 max-w-[612px] text-gray-400">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor
            at metus mollis
          </p>

          <Link href={PUBLIC_ROUTES.HOME} className="btn btn-success mb-20">
            Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
