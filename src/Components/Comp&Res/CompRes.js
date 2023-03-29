import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StyleComp&Res.css";
const CompRes = ({ myChoise, score, setScore }) => {
  const [myComputerChoise, setMyComputerChoise] = useState("");
  const [howWin, setHowWin] = useState("");
  const computerChoise = () => {
    const choise = ["rock", "paper", "scissors"];
    setMyComputerChoise(choise[Math.floor(Math.random() * choise.length)]);
  };
  useEffect(() => {
    computerChoise();
  }, []);
  const compare = () => {
    if (myChoise === "paper" && myComputerChoise === "rock") {
      setHowWin("You win");
      setScore(score + 1);
    } else if (myChoise === "scissors" && myComputerChoise === "paper") {
      setHowWin("You win");
      setScore(score + 1);
    } else if (myChoise === "rock" && myComputerChoise === "scissors") {
      setHowWin("You win");
      setScore(score + 1);
    } else if (myChoise === "scissors" && myComputerChoise === "rock") {
      setHowWin("You lose");
      setScore(score - 1);
    } else if (myChoise === "rock" && myComputerChoise === "paper") {
      setHowWin("You lose");
      setScore(score - 1);
    } else if (myChoise === "paper" && myComputerChoise === "scissors") {
      setHowWin("You lose");
      setScore(score - 1);
    } else {
      setHowWin("Draw");
    }
  };
  useEffect(() => {
    compare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myComputerChoise]);
  return (
    <div className="comp-res">
      <div className="cont mychois">
        <p>My Choise</p>
        <div className={`icons my${myChoise}`}></div>
      </div>
      <div className="result">
        <h1>
          {howWin === "You win" && <span> {howWin} </span>}
          {howWin === "You lose" && <span> {howWin} </span>}
          {howWin === "Draw" && <span> {howWin} </span>}
        </h1>
        <Link
          to="/"
          onClick={() => setMyComputerChoise()}
          className="playagain"
        >
          Play Again
        </Link>
      </div>
      <div className="cont computerchois">
        <p>Computer Chois</p>
        <div className={`icons pc${myComputerChoise}`}></div>
      </div>
    </div>
  );
};

export default CompRes;
