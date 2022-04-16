import { useState } from "react";
import AvailableNumbers from "./components/AvailableNumbers";
import NumberGrid from "./components/NumberGrid";
import "./App.scss";

function App() {
  const [choices, setChoices] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className="App">
      <AvailableNumbers choices={choices} />
      <NumberGrid choices={choices} setChoices={setChoices} />
      <div className="rules">
        <h3>Rules:</h3>
        <ol>
          <li>Fill the 3x3 grid with the numbers 1-9 such that each row, column and diagonal sums up to 15</li>
          <li>No number may be used more than once</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
