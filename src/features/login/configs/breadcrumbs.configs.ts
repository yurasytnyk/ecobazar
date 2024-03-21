import { Breadcrumb } from "@/types/breadcrumb.types";
import { AUTH_ROUTES } from "@/shared/enums/routes.enums";

export const loginBreadcrumbs: Breadcrumb[] = [
  {
    href: AUTH_ROUTES.LOGIN,
    label: "Login",
  },
];

export const registrationBreadcrumbs: Breadcrumb[] = [
  {
    href: AUTH_ROUTES.REGISTER,
    label: "Create Account",
  },
];
