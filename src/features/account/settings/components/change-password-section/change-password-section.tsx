import { ChangePasswordForm } from "@/features/account/settings/components/change-password-form/change-password-form";

export const ChangePasswordSection = () => {
  return (
    <section className="rounded-lg border border-gray-200">
      <div className="border-b border-gray-200">
        <h2 className="pl-6 py-4 text-xl font-medium">Change Password</h2>
      </div>

      <ChangePasswordForm />
    </section>
  );
};
