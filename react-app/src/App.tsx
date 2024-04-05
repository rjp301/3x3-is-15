import React from "react";
import { Chosen, defaultChosen } from "./lib/types";
import Grid from "./components/grid";
import { Button } from "./components/ui/button";
import { toast } from "sonner";
import Options from "./components/options";
import Rules from "./components/rules";
import { DndContext } from "@dnd-kit/core";

function App() {
  const [chosen, SetChosen] = React.useState<Chosen>(defaultChosen);

  return (
    <DndContext>
      <main className="flex flex-col items-center gap-4 mx-auto py-4 h-full max-w-min">
        <h1 className="text-4xl text-primary font-bold">3 x 3 = 15</h1>
        <Grid chosen={chosen} setChosen={SetChosen} />
        <Options chosen={chosen} />
        <Button
          className="w-full"
          onClick={() => {
            SetChosen(defaultChosen);
            toast.success("Game reset");
          }}
          variant="secondary"
        >
          Reset
        </Button>
        <Rules />
      </main>
    </DndContext>
  );
}

export default App;
