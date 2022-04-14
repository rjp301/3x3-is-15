import { useState } from "react";
import AvailableNumbers from "./components/AvailableNumbers";

function App() {
  const [choices, setChoices] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className="App">
      <AvailableNumbers choices={choices} />
    </div>
  );
}

export default App;
