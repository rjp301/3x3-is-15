import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useDroppable } from "@dnd-kit/core";
import { Chosen } from "@/lib/types";

interface Props {
  id: keyof Chosen;
  value: number;
}

const Pocket: React.FC<Props> = (props) => {
  const { id, value } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

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
      {value}
    </div>
  );
};

export default Pocket;
