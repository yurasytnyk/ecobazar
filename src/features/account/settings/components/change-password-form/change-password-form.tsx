import { Input } from "@/components/input/input";

export const ChangePasswordForm = () => {
  return (
    <form className="p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="current_password">Current Password</label>
        <Input className="input" id="current_password" placeholder="Password" />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-1.5 grow">
          <label htmlFor="new_password">New Password</label>
          <Input className="input" id="new_password" placeholder="Password" />
        </div>

        <div className="flex flex-col gap-1.5 grow">
          <label htmlFor="confirm_password">Confirm Password</label>
          <Input className="input" id="confirm_password" placeholder="Password" />
        </div>
      </div>

      <button className="btn btn-success mt-2.5 w-max">Change Password</button>
    </form>
  );
};
