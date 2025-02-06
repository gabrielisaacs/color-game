import React from 'react';
import { FaClock, FaFlagCheckered } from 'react-icons/fa6';

const StatusBar = ({ score, timeLeft, onNewGame, isPlaying }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='w-full px-4 sm:px-8 flex flex-col sm:flex-row gap-4 sm:gap-0 
    mt-[6rem] sm:mt-[5.2rem]'>
      <button
        data-testid="newGameButton"
        onClick={onNewGame}
        disabled={isPlaying}
        className={`h-[3rem] font-bold text-base sm:text-lg w-full sm:w-auto
        border-neutral-900 border border-opacity-10 rounded-md text-white 
        items-center py-2 px-4 transition-all duration-200 flex justify-center
        ${isPlaying
            ? 'bg-gray-500 cursor-not-allowed opacity-50'
            : 'bg-blue-700 hover:shadow-lg hover:bg-blue-800'
          }`}
      >
        NEW GAME
      </button>
      <div className='flex flex-row h-[3rem] font-bold text-sm shadow-lg justify-center
      border-neutral-900 border border-opacity-10 rounded-md sm:ml-auto 
      text-black items-center py-2 px-4 gap-2 w-full sm:w-auto'>
        <div className="flex items-center gap-2 min-w-[4.5rem]">
          <FaFlagCheckered className='text-red-700' />
          <span data-testid="score" className={`${score < 0 ? 'text-red-600' : ''}`}>
            {score}
          </span>
        </div>
        <div className="mr-8 w-1 border-l border-neutral-900 border-opacity-30 h-3/4" sm:m-0></div>
        <div className="flex items-center gap-2">
          <FaClock className={`${timeLeft <= 10 ? 'text-red-700 animate-pulse' : 'text-blue-700'}`} />
          {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;