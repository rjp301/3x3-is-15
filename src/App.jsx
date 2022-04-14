import { useState } from "react";
import AvailableNumbers from "./components/AvailableNumbers";
import NumberGrid from "./components/NumberGrid";

function App() {
  const [choices, setChoices] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className="App">
      <AvailableNumbers choices={choices} />
      <NumberGrid choices={choices} />
    </div>
  );
}

export default App;
