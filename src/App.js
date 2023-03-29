import React, { useState } from "react";
import "./App.css";
import HeaderScore from "./Components/Header&Score/Header-Score";
import Game from "./Components/Game/Game";
import CompRes from "./Components/Comp&Res/CompRes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [myChoise, setMyChoise] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <HeaderScore score={score} />
      <Router>
        <Routes>
          <Route path="/" element={<Game setMyChoise={setMyChoise} />} />
          <Route
            path="/src/Components/Comp&Res/CompRes.js"
            element={
              <CompRes myChoise={myChoise} score={score} setScore={setScore} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
