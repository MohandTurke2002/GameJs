/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Rock from "./Images/icon-rock.svg";
import Papper from "./Images/icon-paper.svg";
import Scissors from "./Images/icon-scissors.svg";

import "./Style-Game.css";
const Game = ({ setMyChoise }) => {
  let setChoise = (e) => {
    setMyChoise(e.target.dataset.id);
  };
  return (
    <div className="game">
      <div className="container-icon">
        <Link to="/src/Components/Comp&Res/CompRes.js">
          <div
            data-id="rock"
            className="icon rock"
            onClick={(e) => setChoise(e)}
          >
            <img src={Rock} />
          </div>
        </Link>
        <Link to="/src/Components/Comp&Res/CompRes.js">
          <div
            data-id="paper"
            className="icon paper"
            onClick={(e) => setChoise(e)}
          >
            <img src={Papper} />
          </div>
        </Link>
        <Link to="/src/Components/Comp&Res/CompRes.js">
          <div
            data-id="scissors"
            className="icon scissors"
            onClick={(e) => setChoise(e)}
          >
            <img src={Scissors} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Game;