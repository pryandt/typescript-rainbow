import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import { Red } from './colors/Red';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="rainbow-header">Typescript Rainbow!</h1>

      <div className="rainbow-wrapper">
        <Red />
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="purple"></div>
        <div className="violet"></div>
        <div className="inner-circle"></div>
      </div>
    </div>
  );
}

export default App;
