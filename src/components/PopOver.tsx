"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PopoverProps {
  title: string;
  content: string;
  imgSrc: StaticImport;
}

export function Popover({ content, imgSrc, title }: PopoverProps) {
  return (
    <Accordion type="single" collapsible className="w-full px-4">
      <AccordionItem value="item-1" className="border-gray-400">
        <AccordionTrigger className="text-lg  hover:no-underline font-semibold capitalize">
          <Image alt="" src={imgSrc} height={150} width={150} /> {title}
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Popover;
