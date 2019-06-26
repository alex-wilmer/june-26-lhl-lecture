import React from "react";
import { render } from "react-dom";
import "./index.css";

let ctx = new AudioContext();

let osc = ctx.createOscillator();

osc.connect(ctx.destination);

osc.start();

window.onmousemove = event => {
  let color = process.env.REACT_APP_COLOR;

  if (color) document.body.style.backgroundColor = color;
  else {
    document.body.style.backgroundColor = `hsl(${event.clientX}, 60%, 60%)`;
  }

  osc.frequency.value = event.clientX;
};

render(
  <>
    <h1>move your mouse around !!!!</h1>
    <button
      onClick={() => {
        console.log(process.env.REACT_APP_COLOR);
      }}
    >
      what's the color
    </button>
  </>,
  document.getElementById("root")
);
