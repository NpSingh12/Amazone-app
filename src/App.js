import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const theamMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar mode={mode} theamMode={theamMode} />
    </>
  );
}

export default App;
