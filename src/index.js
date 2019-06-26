import React from "react";
import { render } from "react-dom";
import "./index.css";

let ctx = new AudioContext();

let osc = ctx.createOscillator();

osc.connect(ctx.destination);

osc.start();

window.onmousemove = event => {
  document.body.style.backgroundColor = `hsl(${event.clientX}, 60%, 60%)`;
  osc.frequency.value = event.clientX;
};

render(
  <>
    <h1>Move your mouse around !!!! (make sure your volume is low)</h1>
  </>,
  document.getElementById("root")
);
