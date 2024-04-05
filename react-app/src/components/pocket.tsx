import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useDroppable } from "@dnd-kit/core";
import { Chosen } from "@/lib/types";
import { useChoiceStore } from "@/lib/store";

interface Props {
  id: keyof Chosen;
}

const Pocket: React.FC<Props> = (props) => {
  const { id } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

  const value = useChoiceStore((state) => state.chosen[id]);

  return (
    <div
      ref={setNodeRef}
      className={cn(
        buttonVariants({
          variant: value > 0 ? "default" : "outline",
          size: "icon",
        }),
        "rounded-full h-10 w-10 text-xl"
      )}
    >
      {value > 0 ? value : null}
    </div>
  );
};

export default Pocket;
