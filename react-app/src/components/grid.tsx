import React from "react";
import Pocket from "./pocket";
import Sum from "./sum";
import { useChoiceStore } from "@/lib/store";

const Grid: React.FC = () => {
  const chosen = useChoiceStore((state) => state.chosen);
  return (
    <section
      id="game-grid"
      className="grid grid-cols-[repeat(4,1fr)] aspect-square w-[13rem] gap-4 bg-card p-2 rounded-md"
    >
      <Pocket id="a" />
      <Pocket id="b" />
      <Pocket id="c" />
      <Sum value={chosen.a + chosen.b + chosen.c} orientation="h" />
      <Pocket id="d" />
      <Pocket id="e" />
      <Pocket id="f" />
      <Sum value={chosen.d + chosen.e + chosen.f} orientation="h" />
      <Pocket id="g" />
      <Pocket id="h" />
      <Pocket id="i" />
      <Sum value={chosen.g + chosen.h + chosen.i} orientation="h" />
      <Sum value={chosen.a + chosen.d + chosen.g} orientation="v" />
      <Sum value={chosen.b + chosen.e + chosen.h} orientation="v" />
      <Sum value={chosen.c + chosen.f + chosen.i} orientation="v" />
      <Sum value={chosen.a + chosen.e + chosen.i} orientation="d" />
    </section>
  );
};

export default Grid;
