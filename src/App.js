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

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsFormatted = Math.floor(seconds % 60);
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsFormatted.toString().padStart(2, '0')}`;
  }


  const handleStartTimer = () => {
    setStartTimer(true);
  };


  return (
    <div className="App">
        <Header seconds={formatTime(seconds)}/>
        <GameBoard handleStartTimer={handleStartTimer}/>
        <Footer/>
    </div>
  );
}

export default App;
