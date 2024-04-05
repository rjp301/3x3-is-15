import Grid from "./components/grid";
import Options from "./components/options";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Footer from "./components/footer";
import { useChoiceStore } from "./lib/store";
import { Chosen } from "./lib/types";

function App() {
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const { setChoice, activeChoice, setActiveChoice } = useChoiceStore(
    (state) => ({
      setChoice: state.setChoice,
      activeChoice: state.activeChoice,
      setActiveChoice: state.setActiveChoice,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    console.log(event);
    setActiveChoice(event.active.id as number);
  };

  const handleDragOver = (event: DragOverEvent) => {
    console.log(event);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (!event.over) return;
    setChoice(event.over.id as keyof Chosen, event.active.id as number);
    setActiveChoice(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragOver}
      sensors={sensors}
    >
      <main className="flex flex-col items-center gap-4 mx-auto h-full py-4 max-w-min">
        <h1 className="text-4xl text-primary font-bold">3 x 3 = 15</h1>
        <Grid />
        <Options />
        <Footer />
      </main>
      {/* <DragOverlay>
        {activeChoice !== null ? (
          <Button className="rounded-full h-10 w-10 text-xl">
            {activeChoice}
          </Button>
        ) : null}
      </DragOverlay> */}
    </DndContext>
  );
}

export default App;
