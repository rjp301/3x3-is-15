import Grid from "./components/grid";
import Options from "./components/options";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Footer from "./components/footer";
import { useChoiceStore } from "./lib/store";
import { Chosen, winningChosen } from "./lib/chosen";
import { toast } from "sonner";
import React from "react";
import { sendChosen } from "./lib/email";

function App() {
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const { setChoice, won, chosen, reset } = useChoiceStore((state) => ({
    setChoice: state.setChoice,
    won: winningChosen(state.chosen),
    reset: state.reset,
    chosen: state.chosen,
  }));

  const handleDragEnd = (event: DragEndEvent) => {
    if (!event.over) return;
    setChoice(event.over.id as keyof Chosen, event.active.id as number);
  };

  React.useEffect(() => {
    if (won) {
      sendChosen(chosen);
      toast("You won!", {
        id: "win",
        duration: Infinity,
        action: {
          label: "Play again",
          onClick: () => {
            reset();
            toast.dismiss("win");
          },
        },
      });
    }
  }, [reset, won]);

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <main className="flex flex-col items-center gap-4 mx-auto h-full py-4 max-w-min">
        <h1 className="text-4xl text-primary font-bold">3 x 3 = 15</h1>
        <Grid />
        <Options />
        <Footer />
      </main>
    </DndContext>
  );
}

export default App;
