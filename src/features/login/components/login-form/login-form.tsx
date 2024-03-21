"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import { Input } from "@/components/input/input";
import { AUTH_ROUTES } from "@/shared/enums/routes.enums";

export const LoginForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <section className="py-20 container mx-auto grid grid-cols-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-start-2 rounded-lg p-6 pb-8 bg-white shadow-md border border-gray-50"
      >
        <fieldset className="flex flex-col">
          <legend className="text-center font-semibold text-3.5xl mb-5">Sign In</legend>

          <Input type="text" placeholder="Email" className="mb-3" />

          <Input type="text" placeholder="Password" className="mb-4" />

          <div className="flex justify-between mb-5">
            <Link
              href={AUTH_ROUTES.FORGET_PASSWORD}
              className="text-gray-400 hover:text-black hover:underline transition-all duration-300"
            >
              Forget Password
            </Link>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-success w-full mb-5">
          Login
        </button>

        <p className="text-center">
          <span className="text-gray-500">Don&apos;t have account?</span>{" "}
          <Link href={AUTH_ROUTES.REGISTER} className="text-black font-bold">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};
