import React from 'react';
import { FaClock, FaFlagCheckered } from 'react-icons/fa6';

const StatusBar = ({ score, timeLeft, onNewGame, isPlaying }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='w-full px-8 flex flex-row mt-[5.2rem]'>
      <button
        onClick={onNewGame}
        disabled={isPlaying}
        className={`flex flex-row h-[3rem] font-bold text-lg
          border-neutral-900 border border-opacity-10 rounded-md text-white 
          items-center py-2 px-4 gap-2 transition-all duration-200 
          ${isPlaying
            ? 'bg-gray-500 cursor-not-allowed opacity-50'
            : 'bg-blue-700 hover:shadow-lg hover:bg-blue-800'
          }`}
      >
        NEW GAME
      </button>
      <div className='flex flex-row w-[16rem] h-[3rem] font-bold text-sm shadow-lg justify-center
        border-neutral-900 border border-opacity-10 rounded-md ml-auto 
        text-black items-center py-2 px-4 gap-2'>
        <div className="flex items-center gap-2">
          <FaFlagCheckered className='text-red-700' />
          <span className={`${score < 0 ? 'text-red-600' : ''}`}>
            Score {score}
          </span>
        </div>
        <div className="w-1 border-l border-neutral-900 border-opacity-30 h-3/4"></div>
        <div className="flex items-center gap-2">
          <FaClock className={`${timeLeft <= 10 ? 'text-red-700 animate-pulse' : 'text-blue-700'}`} />
          Time Left: {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;