import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import faqManImg from "/public/images/faq/faq-man.png";

export default function FaqPage() {
  return (
    <main>
      <section className="container mx-auto pt-44 grid grid-cols-2">
        <div>
          <h1 className="font-semibold text-5xl max-w-[532px]">
            Welcome, Let&apos;s Talk About Our Ecobazar
          </h1>

          <Accordion elevation={0} sx={{ "&. MuiAccordion-root": { border: "1px solid #84D187" } }}>
            <AccordionSummary>
              <p>In elementum est a ante sodales iaculis.</p>
            </AccordionSummary>

            <AccordionDetails>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
              cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet
              vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare
              commodo ante, at commodo felis congue vitae.
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="relative aspect-[741/808] w-[741px]">
          <Image
            src={faqManImg}
            fill={true}
            alt="A man standing outdoors holding a basket filled with fresh groceries"
          />
        </div>
      </section>
    </main>
  );
}
