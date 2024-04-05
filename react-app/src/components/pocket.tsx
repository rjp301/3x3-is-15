import { cn } from "@/lib/utils";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Chosen } from "@/lib/types";
import { useChoiceStore } from "@/lib/store";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: keyof Chosen;
}

const Pocket: React.FC<Props> = (props) => {
  const { id } = props;

  const setChoice = useChoiceStore((state) => state.setChoice);
  const value = useChoiceStore((state) => state.chosen[id]);

  const { setNodeRef: dropRef, isOver } = useDroppable({ id });
  const {
    setNodeRef: dragRef,
    attributes,
    listeners,
    transform,
  } = useDraggable({ id: value });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={dropRef}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "rounded-full h-10 w-10 text-xl",
        isOver && "border-primary"
      )}
    >
      {value > 0 && (
        <Button
          ref={dragRef}
          style={style}
          {...attributes}
          {...listeners}
          onDoubleClick={() => setChoice(id, 0)}
          className={cn(
            "rounded-full h-10 w-10 text-xl",
            isOver && "bg-secondary"
          )}
        >
          {value > 0 ? value : null}
        </Button>
      )}
    </div>
  );
};

export default Pocket;
