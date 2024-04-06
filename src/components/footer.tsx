import React from "react";
import { Button } from "./ui/button";
import { useChoiceStore } from "@/lib/store";
import { toast } from "sonner";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Footer: React.FC = () => {
  const reset = useChoiceStore((state) => state.reset);

  return (
    <section className="grid w-full grid-cols-[1fr_auto] gap-2">
      <Button
        className="w-full"
        onClick={() => {
          const undo = reset();
          toast.success("Game reset", {
            id: "reset",
            action: { label: "Undo", onClick: undo },
          });
        }}
        variant="secondary"
      >
        Reset
      </Button>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary" size="icon">
            ?
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Rules of the Game</DrawerTitle>
          </DrawerHeader>
          <ol className="text-xs ml-4 flex flex-col gap-1">
            <li>A. Drag the numbers 1 through 9 onto the board</li>
            <li>B. Try to arrange them such that each axis sums to 15</li>
            <li>C. Double tap to reset a spot on the board</li>
            <li>D. It is possible! Don't give up</li>
          </ol>
          <DrawerFooter>
            <p className="text-[16px] text-muted-foreground">
              An app by{" "}
              <a
                target="_blank"
                className="text-sky-300 hover:underline hover:text-sky-400"
                href="https://rileypaul.ca"
              >
                Riley Paul
              </a>
            </p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default Footer;
