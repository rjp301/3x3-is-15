import { Chosen } from "@/lib/types";
import React from "react";
import Pocket from "./pocket";
import Sum from "./sum";

interface Props {
  chosen: Chosen;
  setChosen: React.Dispatch<React.SetStateAction<Chosen>>;
}

const Grid: React.FC<Props> = (props) => {
  const { chosen, setChosen } = props;

  return (
    <section
      id="game-grid"
      className="grid grid-cols-[repeat(4,1fr)] aspect-square w-[13rem] gap-4 bg-card p-2 rounded-md"
    >
      <Pocket value={chosen.a} />
      <Pocket value={chosen.b} />
      <Pocket value={chosen.c} />
      <Sum value={chosen.a + chosen.b + chosen.c} orientation="h" />
      <Pocket value={chosen.d} />
      <Pocket value={chosen.e} />
      <Pocket value={chosen.f} />
      <Sum value={chosen.d + chosen.e + chosen.f} orientation="h" />
      <Pocket value={chosen.g} />
      <Pocket value={chosen.h} />
      <Pocket value={chosen.i} />
      <Sum value={chosen.g + chosen.h + chosen.i} orientation="h" />
      <Sum value={chosen.a + chosen.d + chosen.g} orientation="v" />
      <Sum value={chosen.b + chosen.e + chosen.h} orientation="v" />
      <Sum value={chosen.c + chosen.f + chosen.i} orientation="v" />
      <Sum value={chosen.a + chosen.e + chosen.i} orientation="d" />
    </section>
  );
};

export default Grid;
