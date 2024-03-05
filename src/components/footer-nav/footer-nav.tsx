import { HelpFooterLinks } from "@/components/help-footer-links/help-footer-links";
import { ProxyFooterLinks } from "@/components/proxy-footer-links/proxy-footer-links";
import { AccountFooterLinks } from "@/components/account-footer-links/account-footer-links";
import { CategoriesFooterLinks } from "@/components/categories-footer-links/categories-footer-links";

export const FooterNav = () => {
  return (
    <nav className="flex gap-36 text-gray-300 text-sm">
      <AccountFooterLinks />

      <HelpFooterLinks /> 

      <ProxyFooterLinks />

      <CategoriesFooterLinks />
    </nav>
  );
};
