import React from 'react'
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa6'

const NavBar = () => {
  return (
    <div className='w-screen height-[1rem] flex flex-row px-8 py-4 border-b border-neutral-900 border-opacity-10 item-center fixed bg-white shadow-sm'>
      <div className="flex w-40 flex-row items-center gap-3">
        <img src="/game-icon.svg" alt="game icon" />
        <p className='font-bold text-lg'>Color Game</p>
      </div>
      <div className="w-1 border-l border-neutral-900 border-opacity-30 ml-auto mr-3">
      </div>
      <div className="flex flex-row gap-4 items-center">
        <FaSun size={24} className='fill-blue-600 text-blue-600  hover:opacity-60 transition-all duration-300' />
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className='fill-gray-950 hover:opacity-60 transition-all duration-300' />
        </a>
      </div>
    </div>
  )
}

export default NavBar