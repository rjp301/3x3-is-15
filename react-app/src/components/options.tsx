import { Chosen } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "./ui/button";

interface Props {
  chosen: Chosen;
}

const CHOICES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Options: React.FC<Props> = (props) => {
  const { chosen } = props;

  return (
    <section className="flex gap-1">
      {CHOICES.filter((value) => !Object.values(chosen).includes(value)).map(
        (i) => (
          <div
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "h-4 w-4 p-0 rounded cursor-grab"
            )}
          >
            {i}
          </div>
        )
      )}
    </section>
  );
};

export default Options;
