// Home.jsx

import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    // Add code to be executed when the game starts
  };

  return (
    <div className="container">
      {gameStarted ? (
        // Code for an active game
        <h1>The game is ongoing...</h1>
      ) : (
        // Code for the start page
        <div className="home-container">
          <h1 className="game-title">Welcome to Paragraph Game!</h1>
          <buttonOne onClick={startGame}>Start</buttonOne>
        </div>
      )}
    </div>
  );
};

export default Home;

