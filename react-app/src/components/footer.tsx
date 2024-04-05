import React from "react";
import { Button } from "./ui/button";
import { useChoiceStore } from "@/lib/store";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Footer: React.FC = () => {
  const reset = useChoiceStore((s) => s.reset);
  return (
    <section className="grid w-full grid-cols-[1fr_auto] gap-2">
      <Button
        className="w-full"
        onClick={() => {
          reset();
          toast.success("Game reset");
        }}
        variant="secondary"
      >
        Reset
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size="icon">
            ?
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <h2 className="mb-2">How To Play</h2>
          <ol className="list-decimal text-xs ml-4 flex flex-col gap-1">
            <li>Drag the numbers 1 through 9 onto the board</li>
            <li>Try to arrange them such that each axis sums to 15</li>
            <li>It is possible! Don't give up</li>
          </ol>
        </PopoverContent>
      </Popover>
    </section>
  );
};

export default Footer;
