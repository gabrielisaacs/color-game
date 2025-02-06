import React from 'react';
import { FaCheck, FaXmark, FaCircleInfo } from 'react-icons/fa6';

const GameInstructions = ({ lastResult, isPlaying }) => {
  return (
    <div className="px-4 sm:px-0">
      <div className={`flex flex-col text-xl sm:text-2xl mx-auto my-6 sm:my-8 
      items-center justify-center gap-3 sm:gap-4
      ${lastResult === 'correct' ? 'text-green-600' :
          lastResult === 'wrong' ? 'text-red-600' : 'text-black'}`}>

        {!isPlaying ? (
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <FaCircleInfo className="text-blue-600" />
              How to Play
            </div>
            <div className="text-sm sm:text-base text-gray-700 max-w-[90vw] sm:max-w-2xl 
            text-center space-y-2 px-4">
              <p data-testid="gameInstructions" className="font-medium">Match the color shown in the top button with the correct option below.</p>
              <ul className="space-y-1">
                <li>• Correct match: <span className="text-green-600">+10 points</span></li>
                <li>• Wrong match: <span className="text-red-600">-5 points</span></li>
                <li>• Time limit: <span className="text-blue-600">60 seconds</span></li>
              </ul>
              <p className="pt-2 font-medium">
                Click "NEW GAME" to start playing!
              </p>
            </div>
          </div>
        ) : lastResult === 'correct' ? (
          <div data-testid="gameStatus" className="flex items-center gap-2">
            Correct! <FaCheck />
          </div>
        ) : lastResult === 'wrong' ? (
          <div data-testid="gameStatus" className="flex items-center gap-2">
            Wrong! Try Again <FaXmark />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            Select the Matching Color
          </div>
        )}
      </div>
    </div>
  );
};

export default GameInstructions;