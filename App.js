import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (gameRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameRunning(false);
    }
  }, [gameRunning, timeLeft]);

  const handleImageClick = () => {
    if (gameRunning) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleTopClick = () => {
    if (gameRunning) {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameRunning(true);
  };

  return (
    <div className="App">
     
      <p>click the picture as many times as you can in {timeLeft} wacky seconds wacky seconds!</p>
      <p>Score: {score}</p>
     
      <div className="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThY0nuQXhb3b7naV_XHIuF3O-ceQ-mWyvyYQ&usqp=CAU" alt="Click Me!" width="300" height="200" onClick={handleImageClick} />
        <div className="top-click-area" onClick={handleTopClick}></div>
      </div>
      {!gameRunning && <p>ohh Game Over! </p>}
      <h3>Your Score: {score}</h3>
      <button onClick={restartGame} disabled={gameRunning}>Restart</button>
    </div>
  );
}

export default App;