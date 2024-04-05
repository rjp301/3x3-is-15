import { cn } from "@/lib/utils";
import React from "react";

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
        "text-sm flex items-center justify-center font-bold",
        value === 15 ? "text-green-500" : "text-red-500",
        orientations[orientation]
      )}
    >
      {value}
    </div>
  );
};

export default Sum;
