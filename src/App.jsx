import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Home from "./components/home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
