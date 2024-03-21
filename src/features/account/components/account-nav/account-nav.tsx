import { BagIcon } from "@/components/icons/bag-icon";
import { HeartIcon } from "@/components/icons/heart-icon";
import { ReloadIcon } from "@/components/icons/reload-icon";
import { LogOutIcon } from "@/components/icons/log-out-icon";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { DashboardIcon } from "@/components/icons/dashboard-icon";
import { AccountNavLink } from "../account-nav-link/account-nav-link";

export const AccountNav = () => {
  return (
    <aside className="rounded-lg border border-gray-200 text-gray-400 self-start">
      <h2 className="pl-5 pt-6 pb-4 text-xl font-medium text-black">Navigation</h2>

      <nav className="pb-3">
        <ul>
          <AccountNavLink href="" icon={<DashboardIcon />}>
            Dashboard
          </AccountNavLink>

          <AccountNavLink href="" icon={<ReloadIcon />}>
            Order History
          </AccountNavLink>

          <AccountNavLink href="" icon={<HeartIcon className="size-6" />}>
            Wishlist
          </AccountNavLink>

          <AccountNavLink href="" icon={<BagIcon className="size-6" />}>
            Shopping Cart
          </AccountNavLink>

          <AccountNavLink href="" icon={<SettingsIcon />}>
            Settings
          </AccountNavLink>

          <AccountNavLink href="" icon={<LogOutIcon />}>
            Log-out
          </AccountNavLink>
        </ul>
      </nav>
    </aside>
  );
};
