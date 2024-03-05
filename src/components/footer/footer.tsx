import { BottomFooter } from "@/components/bottom-footer/bottom-footer";
import { TopFooter } from "../top-footer/top-footer";

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto">
        <TopFooter />

        <hr className="border-gray-500" />

        <BottomFooter />
      </div>
    </footer>
  );
};
