import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import StatusBar from './components/StatusBar';
import GameInstructions from './components/GameInstructions';
import ColorBars from './components/ColorBars';
import Footer from './components/Footer';
import GameOverModal from './components/GameOverModal';

function App() {
  const INITIAL_TIME = 60;

  const [gameState, setGameState] = useState({
    score: 0,
    timeLeft: INITIAL_TIME,
    isPlaying: false,
    colors: null,
    lastResult: null
  });

  useEffect(() => {
    let timer;
    if (gameState.isPlaying && gameState.timeLeft > 0) {
      timer = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (gameState.timeLeft === 0) {
      setGameState(prev => ({
        ...prev,
        isPlaying: false,
        lastResult: null
      }));
    }
    return () => clearInterval(timer);
  }, [gameState.isPlaying, gameState.timeLeft]);

  const handleNewGame = () => {
    // Clear any existing timer
    setGameState(prev => ({
      ...prev,
      isPlaying: false
    }));

    // Small delay to ensure clean timer reset
    setTimeout(() => {
      setGameState({
        score: 0,
        timeLeft: INITIAL_TIME,
        isPlaying: true,
        colors: null,
        lastResult: null
      });
    }, 100);
  };

  const handleScore = () => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + 10,
      lastResult: 'correct'
    }));
  };

  const handleFail = () => {
    setGameState(prev => ({
      ...prev,
      score: Math.max(0, prev.score - 5),
      lastResult: 'wrong'
    }));
  };

  return (
    <div className='w-screen min-h-screen flex flex-col'>
      <NavBar />
      <StatusBar
        score={gameState.score}
        timeLeft={gameState.timeLeft}
        onNewGame={handleNewGame}
        isPlaying={gameState.isPlaying}
      />
      <GameInstructions
        lastResult={gameState.lastResult}
        isPlaying={gameState.isPlaying}
      />
      <ColorBars
        onScore={handleScore}
        onFail={handleFail}
        gameState={gameState}
        setGameState={setGameState}
      />
      <Footer />
      {!gameState.isPlaying && gameState.timeLeft === 0 && (
        <GameOverModal
          score={gameState.score}
          onRestart={handleNewGame}
        />
      )}
    </div>
  );
}

export default App;