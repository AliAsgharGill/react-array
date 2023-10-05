import { useState } from "react";
import ShortEval from "./pages/ShortEval";


function App() {
  const [demo, setDemo] = useState("")
  return <ShortEval />;
}

export default App;
