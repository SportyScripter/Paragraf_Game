import React, { useState } from 'react';
import './App.css';

const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const startGame = () => {
    setGameStarted(true);
  };
  const text = "Witaj w mojej aplikacji!";

  // Dodaj pierwszy fragment opowieści dla danej gry
  const gameStories = {
    'Enzo and Nova': {
      intro: "W Eldorionie, Enzo i Nova wyruszyli na niebezpieczną wyprawę, ścigając zkażoną Zephyrę. Ich droga wiodła przez zaczarowane lasy, gdzie dawne istoty magiczne uśpione od wieków zaczęły się budzić. Enzo zauważył, że ma zdolność wywoływania pierwiastków przyrody, co okazało się kluczem do odkrywania ukrytych ścieżek i unikania pułapek. W pewnym momencie, Zephyra skonfrontowała ich w postaci olśniewającej figury złączającej magię i technologię. Enzo stoi teraz przed wyborem:",
    },
    'Super Tommy': {
      intro: "Tommy, odkrywając swoje nowe moce, zyskał szacunek mieszkańców Eldorii, ale także przyciągnął uwagę mrocznych stworzeń, które dążyły do wykorzystania jego potęgi. Wędrując przez nieznane krainy, chłopiec natknął się na starożytną świątynię, w której ukryte były tajemnice jego mocy. Tam, spotkał ducha starożytnego Mistrza Przyrody, który oferuje mu wybór:",
    },
    // Dodaj tutaj inne gry i ich pierwsze fragmenty opowieści
  };

  const selectGame = (gameTitle) => {
    setSelectedGame(gameTitle);
  };

  const selectScenario = (scenarioTitle) => {
    setSelectedScenario(scenarioTitle);
  };

  return (
    <div className="container">
      {gameStarted ? (
        selectedGame ? (
          // Code for the selected game
          <div className='gameSettings'>
            <h1>{selectedGame}</h1>
            {selectedGame === 'Enzo and Nova' && (
              <div className="paragraphOne">
                <p>{gameStories[selectedGame].intro}</p>
                <button className="buttonSelectionScennario" onClick={() => selectScenario('sc1')}>
                  Spróbować przekonać Zephyrę do powrotu na stronę światła, wykorzystując swoje nowe zdolności.
                </button>
                <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2')}>
                  Zadecydować o bezpośrednim starciu z Zephyrą, używając mocy przyrody do zniszczenia zkażonej sztucznej inteligencji.
                </button>
              </div>
            )}
            {selectedGame === 'Super Tommy' && (
              <div className="paragraphOne">
                <p>{gameStories[selectedGame].intro}</p>
                <button className="buttonSelectionScennario" onClick={() => selectScenario('sc1')}>
                Podążać ścieżką nauki u Mistrza Przyrody, zdobywając głębsze zrozumienie i kontrolę nad swoimi mocami.
                </button>
                <button className="buttonSelectionScennario" onClick={() => selectScenario('sc2')}>
                Zaniechać nauki u Mistrza Przyrody i samodzielnie odkrywać granice swojej mocy, ryzykując utratę kontroli nad nią.
                </button>
              </div>
            )}
            {/* Dodaj tutaj inne gry i ich pierwsze fragmenty opowieści */}
            
          </div>
        ) : (
          <div className="welcome-text">
            {[...text].map((letter, index) => (
              <span key={index} className="bounce-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        )
      ) : (
        // Code for the start page
        <div className="home-container">
          <h1 className="game-title">Welcome to Paragraph Game!</h1>
          <button className="start-button" onClick={startGame}>Start</button>
        </div>
      )}

      {/* Dodaj tutaj okna z wyborem gry */}
      {gameStarted && !selectedGame && (
        <div className="game-selection">
          <h2 className="select-game">Select a game:</h2>
          <button className="buttonSelectionGame" onClick={() => selectGame('Enzo and Nova')}>
            Enzo and Nova
          </button>
          <button className="buttonSelectionGame" onClick={() => selectGame('Super Tommy')}>
            Super Tommy
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
