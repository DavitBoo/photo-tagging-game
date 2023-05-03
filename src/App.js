import React, { useState, useEffect, useCallback } from "react";

import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [pokemonsFound, setPokemonsFound] = useState(false);

  const handleStartTimer = useCallback(() => {
    setIsTimerRunning(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isTimerRunning && !pokemonsFound) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, pokemonsFound, setSeconds]);

  const formatTime = useCallback(seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsFormatted = Math.floor(seconds % 60);
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsFormatted.toString().padStart(2, '0')}`;
  }, []);

  return (
    <div className="App">
      <Header seconds={formatTime(seconds)} />
      <GameBoard
        handleStartTimer={handleStartTimer}
        setPokemonsFound={setPokemonsFound}
        pokemonsFound={pokemonsFound}
        seconds={seconds}
      />
      <Footer />
    </div>
  );
}

export default App;