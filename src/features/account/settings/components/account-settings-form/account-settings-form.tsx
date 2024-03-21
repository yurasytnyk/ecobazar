"use client";

import { Input } from "@/components/input/input";

export const AccountSettingsForm = () => {
  return (
    <form className="p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="first_name">First Name</label>
        <Input className="input" id="first_name" placeholder="Dianne" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="last_name">Last Name</label>
        <Input className="input" id="last_name" placeholder="Russell" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email">Email</label>
        <Input className="input" id="email" type="email" placeholder="dianne.russell@gmail.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone">Phone Number</label>
        <Input className="input" id="phone" placeholder="(603) 555-0123" />
      </div>

      <button className="btn btn-success mt-2.5 w-max">Save Changes</button>
    </form>
  );
};
