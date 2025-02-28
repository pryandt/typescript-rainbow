import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="rainbow-header">Typescript Rainbow!</h1>

      <div className="rainbow-wrapper">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="purple"></div>
        <div className="pink"></div>
        <div className="lightblue"></div>
        <div className="brown"></div>
        <div className="black"></div>
        <div className="white"></div>
      </div>
    </div>
  );
}

export default App;
