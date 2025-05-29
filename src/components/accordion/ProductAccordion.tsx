"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductAccordion() {
  return (
    <div className="w-full flex justify-center mt-6">
      <Accordion type="single" collapsible className="w-[70%]">
        <AccordionItem value="item-1">
          <AccordionTrigger>SIze & Fit</AccordionTrigger>
          <AccordionContent>
            This red suit is crafted from high-quality structured wool. Features include a sculpted shoulder, softened hem, and tailored silhouette ideal for both casual and formal settings.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Delivery & Returns</AccordionTrigger>
          <AccordionContent>
            100% Wool. Dry clean only. Avoid machine wash and prolonged exposure to sunlight.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How This Was Made</AccordionTrigger>
          <AccordionContent>
            Free shipping within 5–7 business days. Easy returns within 30 days of delivery.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
