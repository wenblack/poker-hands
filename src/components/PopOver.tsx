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
  observations?: string;
}

export function Popover({
  content,
  imgSrc,
  title,
  observations,
}: PopoverProps) {
  return (
    <Accordion type="single" collapsible className="w-full px-4 ">
      <AccordionItem value="item-1" className="border-gray-300">
        <AccordionTrigger className="text-lg font-bold  hover:no-underline text-red-600 capitalize">
          <Image alt="" src={imgSrc} height={150} width={150} /> {title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <h2 className="text-base font-thin">{content}</h2>
          <p className="text-red-500 font-bold">
            Obs:
            <span className="ml-1 font-thin text-white">{observations}</span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Popover;
