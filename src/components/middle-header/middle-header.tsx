import { Logo } from "@/components/logo/logo";
import { PUBLIC_ROUTES } from "@/shared/enums/routes.enums";

export const MiddleHeader = () => {
  return (
    <div className="border-b border-b-gray-300">
      <div className="container mx-auto py-7">
        <Logo href={PUBLIC_ROUTES.HOME} />
      </div>
    </div>
  );
};
