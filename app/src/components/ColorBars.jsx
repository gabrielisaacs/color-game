import React, { useEffect } from 'react';
import { getRandomColors, getColorName } from './Colors';

const ColorBars = ({ onScore, onFail, gameState, setGameState }) => {
  useEffect(() => {
    if (gameState.isPlaying && !gameState.colors) {
      setGameState(prev => ({ ...prev, colors: getRandomColors() }));
    }
  }, [gameState.isPlaying]);

  const handleColorClick = (selectedColor) => {
    if (!gameState.isPlaying) return;

    if (selectedColor === gameState.colors.target) {
      onScore();
      setGameState(prev => ({ ...prev, colors: getRandomColors() }));
    } else {
      onFail();
    }
  };

  return (
    <div className='mx-auto flex flex-wrap gap-4 w-full max-w-[40rem] px-4 sm:px-6 mb-[3rem]'>
      <button
        data-testid="colorBox"
        className={`h-[4rem] sm:h-[5rem] w-full font-bold shadow-lg border-neutral-900 border 
        border-opacity-30 rounded-md text-white text-lg sm:text-2xl 
        ${gameState.colors?.target || 'bg-gray-600'} items-center py-2 px-4 gap-2 
        text-center transition-all duration-300`}
      >
        {gameState.isPlaying ? `What Color is this?` : 'Game Paused'}
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
        {gameState.colors?.options.map((color, index) => (
          <button
            key={index}
            data-testid="colorOption"
            onClick={() => handleColorClick(color)}
            disabled={!gameState.isPlaying}
            className={`h-[4rem] sm:h-[5rem] shadow-lg border-neutral-900 border border-opacity-30 
            rounded-md ${color} transition-all duration-200 
            hover:scale-105 active:scale-95 relative group
            ${!gameState.isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="absolute inset-0 flex items-center justify-center 
            text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 
            text-sm sm:text-base">
              {getColorName(color)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorBars;