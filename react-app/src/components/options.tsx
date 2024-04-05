import React from "react";
import Option from "./option";
import { useChoiceStore } from "@/lib/store";

const CHOICES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Options: React.FC = () => {
  const chosen = useChoiceStore((state) => state.chosen);
  return (
    <section className="flex gap-1 min-h-6">
      {CHOICES.filter((value) => !Object.values(chosen).includes(value)).map(
        (value) => (
          <Option key={value} value={value} />
        )
      )}
    </section>
  );
};

export default Options;
