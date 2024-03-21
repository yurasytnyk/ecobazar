import { BillingAddressForm } from "@/features/account/settings/components/billing-address-form/billing-address-form";

export const BillingAddressSection = () => {
  return (
    <section className="rounded-lg border border-gray-200">
      <div className="border-b border-gray-200">
        <h2 className="pl-6 py-4 text-xl font-medium">Billing Address</h2>
      </div>

      <BillingAddressForm />
    </section>
  );
};
