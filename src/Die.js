import React from "react";
import "./App.css";

export default function Die(hi) {
  return (
    <div className="die-face">
      <h2 className="die-num">{hi.value}</h2>
    </div>
  );
}
