import React from 'react';
import { FaFlagCheckered } from 'react-icons/fa6'

const GameOverModal = ({ score, onRestart }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-black bg-opacity-50 
    flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-md border border-neutral-800 
      border-opacity-10 text-center shadow-xl transform transition-all duration-300 
      scale-100 w-full max-w-[320px]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Game Over!</h2>
        <div className="flex flex-row items-center justify-center gap-2 
        text-lg sm:text-xl mb-6">
          <FaFlagCheckered className='text-red-700' /> Score: {score}
        </div>
        <button
          onClick={onRestart}
          className="bg-blue-700 text-white px-6 py-3 rounded-md text-base sm:text-lg 
          font-bold hover:bg-blue-800 hover:shadow-lg transition-colors duration-200 
          border border-neutral-800 border-opacity-10 w-full sm:w-auto"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;