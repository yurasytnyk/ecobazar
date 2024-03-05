import { Socials } from "@/components/socials/socials";
import { SubscribeInput } from "@/components/subscribe-input/subscribe-input";

export const SubscribeSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-10 grid grid-cols-[560px_600px_1fr] items-center">
        <div className="mr-28">
          <h2 className="font-bold text-2xl mb-0.5">Subcribe our Newsletter</h2>

          <p className="text-sm text-gray-400">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet
            elit eu magna.
          </p>
        </div>

        <SubscribeInput />

        <Socials />
      </div>
    </section>
  );
};
