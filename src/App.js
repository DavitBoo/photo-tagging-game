import React, { useState, useEffect } from "react";

import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";


function App() {

  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let interval;
    if (startTimer) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTimer]);


  const handleStartTimer = () => {
    setStartTimer(true);
  };


  return (
    <div className="App">
        <Header seconds={seconds}/>
        <GameBoard handleStartTimer={handleStartTimer}/>
        <Footer/>
    </div>
  );
}

export default App;
