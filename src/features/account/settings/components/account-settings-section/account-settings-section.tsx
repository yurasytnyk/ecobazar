import { AccountSettingsForm } from "@/features/account/settings/components/account-settings-form/account-settings-form";

export const AccountSettingsSection = () => {
  return (
    <section className="rounded-lg border border-gray-200">
      <div className="border-b border-gray-200">
        <h2 className="pl-6 py-4 text-xl font-medium">Account Settings</h2>
      </div>

      <AccountSettingsForm />
    </section>
  );
};
