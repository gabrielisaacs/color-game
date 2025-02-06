import React from 'react'
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa6'

const NavBar = () => {
  return (
    <div className='w-screen h-[1.2rem] fixed z-[100000]'>
      <div className="bg-gradient-to-r from-purple-500 from-20% via-red-500 via-45% to-emerald-500 to-80% h-1 w-full"></div>
      <div className='w-full flex flex-row px-8 py-4 border-b border-neutral-900 border-opacity-10 item-center bg-white'>
        <a href='#' className="flex w-40 flex-row items-center gap-3">
          <img src="/game-icon.svg" alt="game icon" className='' />
          <p className='font-bold text-xl'>KolorGuess!</p>
        </a>
        <div className="w-1 border-l border-neutral-900 border-opacity-30 ml-auto mr-3">
        </div>
        <div className="flex flex-row gap-4 items-center">

          <a href="https://github.com/gabrielisaacs/color-game" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className='fill-gray-950 hover:opacity-60 transition-all duration-300' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar