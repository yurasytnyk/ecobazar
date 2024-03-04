import { NavLink } from "@/components/nav-link/nav-link";
import { PUBLIC_ROUTES } from "@/shared/enums/routes.enums";
import { PhoneLink } from "@/components/phone-link/phone-link";

export const HeaderNav = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-5">
      <ul className="flex gap-8">
        <NavLink href={PUBLIC_ROUTES.HOME} withChevron={true}>
          Home
        </NavLink>

        <NavLink href={PUBLIC_ROUTES.SHOP} withChevron={true}>
          Shop
        </NavLink>

        <NavLink href={PUBLIC_ROUTES.PAGES} withChevron={true}>
          Pages
        </NavLink>

        <NavLink href={PUBLIC_ROUTES.BLOG}>Blog</NavLink>

        <NavLink href={PUBLIC_ROUTES.ABOUT}>About Us</NavLink>

        <NavLink href={PUBLIC_ROUTES.CONTACT}>Contact Us</NavLink>
      </ul>

      <PhoneLink tel="(219) 555-0114" />
    </nav>
  );
};
