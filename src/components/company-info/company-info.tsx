import { Logo } from "@/components/logo/logo";
import { PUBLIC_ROUTES } from "@/shared/enums/routes.enums";

export const CompanyInfo = () => {
  return (
    <div className="text-gray-300">
      <Logo href={PUBLIC_ROUTES.HOME} className="text-white mb-4" />

      <p className="mb-4">
        Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna
        congue nec.
      </p>

      <p className="text-white flex gap-4">
        <a href="tel:(219) 555-0114" className="pb-1.5 border-b-success-main border-b">
          (219) 555-0114
        </a>

        <span className="text-gray-300">or</span>

        <a href="mailto:Proxy@gmail.com" className="pb-1.5 border-b-success-main border-b">
          Proxy@gmail.com
        </a>
      </p>
    </div>
  );
};
