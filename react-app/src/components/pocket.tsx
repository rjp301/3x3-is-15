import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "./ui/button";

interface Props {
  value: number;
}

const Pocket: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <div
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
