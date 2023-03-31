/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StyleComp&Res.css";
const CompRes = ({ myChoise, handleNewScore }) => {
  const [myComputerChoise, setMyComputerChoise] = useState("");
  const [whoWins, setWhoWins] = useState("");
  const choise = {
    rock: {
      weakerThan: "paper",
      strongerThan: "scissors",
    },
    paper: {
      weakerThan: "scissors",
      strongerThan: "rock",
    },
    scissors: {
      weakerThan: "rock",
      strongerThan: "paper",
    },
  };
  const computerChoise = () => {
    const choisArr = Object.keys(choise);
    const randomEle = Math.floor(Math.random() * choisArr.length);
    setMyComputerChoise(choisArr[randomEle]);
  };
  useEffect(() => {
    computerChoise();
  }, []);
  const compare = () => {
    if (choise[myChoise].strongerThan === myComputerChoise) {
      setWhoWins("You win");
      handleNewScore((oldVal) => {
        return ++oldVal;
      });
    } else if (choise[myChoise].weakerThan === myComputerChoise) {
      setWhoWins("You lose");
      handleNewScore((oldVal) => {
        return --oldVal;
      });
    } else {
      setWhoWins("Draw");
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
        <h1>{whoWins && <span> {whoWins} </span>}</h1>
        <Link
          to="/"
          onClick={() => setMyComputerChoise("")}
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
