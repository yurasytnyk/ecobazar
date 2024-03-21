import Link from "next/link";

import { MapPin } from "@/components/icons/map-pin";
import { AUTH_ROUTES } from "@/shared/enums/routes.enums";

export const TopHeaderNav = () => {
  return (
    <div className="bg-gray-800 text-gray-300">
      <div className="flex justify-between container mx-auto py-3.5">
        <div className="flex gap-2">
          <MapPin />

          <address className="not-italic text-sm">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </address>
        </div>

        <nav className="text-sm">
          <ul className="flex">
            <li>
              {" "}
              <Link href={AUTH_ROUTES.LOGIN}>Sign In</Link> /
            </li>

            <li className="ml-1">
              <Link href={AUTH_ROUTES.REGISTER}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
