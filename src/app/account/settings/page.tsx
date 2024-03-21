import { AccountNav } from "@/features/account/components/account-nav/account-nav";
import { ChangePasswordSection } from "@/features/account/settings/components/change-password-section/change-password-section";
import { BillingAddressSection } from "@/features/account/settings/components/billing-address-section/billing-address-section";
import { AccountSettingsSection } from "@/features/account/settings/components/account-settings-section/account-settings-section";

export default function AccountSettingsPage() {
  return (
    <main className="container mx-auto grid grid-cols-[312px_1fr] gap-6 pt-8 pb-20">
      <AccountNav />

      <div className="flex flex-col gap-6">
        <AccountSettingsSection />

        <BillingAddressSection />

        <ChangePasswordSection />
      </div>
    </main>
  );
}
