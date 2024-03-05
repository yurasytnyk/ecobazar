import { FooterNav } from "@/components/footer-nav/footer-nav";
import { CompanyInfo } from "@/components/company-info/company-info";

export const TopFooter = () => {
  return (
    <div className="py-[60px] grid grid-cols-[360px_1fr] gap-28">
      <CompanyInfo />

      <FooterNav />
    </div>
  );
};
