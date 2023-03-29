/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style-Header.css";
import Logo from "./logo.svg";
const HeaderScore = ({ score }) => {
  return (
    <div className="main-header">
      <div className="container">
        <div className="cont-para">
          <img src={Logo} />
        </div>
        <div className="score-container">
          <p className="score">score</p>
          <p className="number">{score}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderScore;
