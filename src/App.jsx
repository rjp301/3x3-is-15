import { useState } from "react";
import AvailableNumbers from "./components/AvailableNumbers";
import NumberGrid from "./components/NumberGrid";
import "./App.scss"

function App() {
  // const [choices, setChoices] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [choices, setChoices] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="App">
      <AvailableNumbers choices={choices} />
      <NumberGrid choices={choices} />
    </div>
  );
}

export default App;
