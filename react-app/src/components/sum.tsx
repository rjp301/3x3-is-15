import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "./ui/button";

type Orientations = {
  v: string;
  h: string;
  d: string;
};

const orientations: Orientations = {
  v: "w-10 h-6 ",
  h: "w-6 h-10 ",
  d: "w-6 h-6 ",
};

interface Props {
  value: number;
  orientation: keyof Orientations;
}

const Sum: React.FC<Props> = (props) => {
  const { value, orientation } = props;

  return (
    <div
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
        }),
        "rounded-full",
        value === 15 ? "text-green-500" : "text-red-500",
        orientations[orientation]
      )}
    >
      {value}
    </div>
  );
};

export default Sum;
