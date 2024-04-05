import { Chosen } from "@/lib/types";
import React from "react";
import Option from "./option";

interface Props {
  chosen: Chosen;
}

const CHOICES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Options: React.FC<Props> = (props) => {
  const { chosen } = props;

  return (
    <section className="flex gap-1">
      {CHOICES.filter((value) => !Object.values(chosen).includes(value)).map(
        (value) => (
          <Option key={value} value={value} />
        )
      )}
    </section>
  );
};

export default Options;
