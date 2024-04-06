import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  value: number;
}

const Option: React.FC<Props> = (props) => {
  const { value } = props;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: value,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "h-5 w-5 p-0 rounded cursor-grab"
      )}
    >
      {value}
    </div>
  );
};

export default Option;
