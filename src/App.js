import React, { useState } from "react";
import "./App.css";
import HeaderScore from "./Components/Header&Score/Header-Score";
import Game from "./Components/Game/Game";
import CompRes from "./Components/Comp&Res/CompRes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [myChoise, setMyChoise] = useState("");
  const [score, setScore] = useState(0);
  let handleNewChoise = (newChoise) => {
    return setMyChoise(newChoise);
  };
  let handleNewScore = (newScore) => {
    return setScore(newScore);
  };
  return (
    <div className="App">
      <HeaderScore score={score} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Game handleNewChoise={handleNewChoise} />}
          />
          <Route
            path="/src/Components/Comp&Res/CompRes.js"
            element={
              <CompRes myChoise={myChoise} handleNewScore={handleNewScore} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
