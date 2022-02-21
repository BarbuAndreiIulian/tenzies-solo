import React from "react";
import "./App.css";
import Die from "./Die";

export default function App(hi) {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  function rollDice() {
    setDice(allNewDice);
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {" "}
        Roll
      </button>
    </main>
  );
}
/* 
  1.Set State 
  2.Function Get Rand Numb
  3.Map String to D elements 
  4.Return new mapped string
*/
