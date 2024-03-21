import { Input } from "@/components/input/input";

export const BillingAddressForm = () => {
  return (
    <form className="p-6 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-1.5 grow">
          <label htmlFor="first_name">First Name</label>
          <Input className="input" id="first_name" placeholder="John" />
        </div>

        <div className="flex flex-col gap-1.5 grow">
          <label htmlFor="last_name">Last Name</label>
          <Input className="input" id="last_name" placeholder="Doe" />
        </div>

        <div className="flex flex-col gap-1.5 grow">
          <label htmlFor="company_name">Company Name (optional)</label>
          <Input className="input" id="company_name" placeholder="Zakirsoft" />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-1.5 grow">
          <label htmlFor="email">Email</label>
          <Input className="input" id="email" type="email" placeholder="dianne.russell@gmail.com" />
        </div>

        <div className="flex flex-col gap-1.5 grow">
          <label htmlFor="phone">Phone</label>
          <Input className="input" id="phone" placeholder="(603) 555-0123" />
        </div>
      </div>

      <button className="btn btn-success mt-2.5 w-max">Save Changes</button>
    </form>
  );
};
