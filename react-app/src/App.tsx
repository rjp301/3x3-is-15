import { toast } from "sonner";
import { Button } from "./components/ui/button";

function App() {
  return <Button onClick={() => toast.info("Hello World")}>Hello</Button>;
}

export default App;
