import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import { Red } from './colors/Red';
import { Orange } from './colors/Orange';
import { Yellow } from './colors/Yellow';
import { Green } from './colors/Green';
import { Blue } from './colors/Blue';
import { Violet } from './colors/Violet';
import { Purple } from './colors/Purple';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="rainbow-header">Typescript Rainbow!</h1>

      <div className="rainbow-wrapper">
        <Red initialColor={'red'} />
        <Orange initialColor="orange"></Orange>
        <Yellow initialColor="yellow"></Yellow>
        <Green initialColor="green"></Green>
        <Blue initialColor="blue"></Blue>
        <Purple initialColor="purple"></Purple>
        <Violet initialColor="violet"></Violet>
        <div className="inner-circle"></div>
      </div>
    </div>
  );
}

export default App;
