import React from 'react'
import { FaClock } from 'react-icons/fa6'
import { MdSportsScore } from 'react-icons/md'

const StatusBar = () => {
  const time = 230;
  const score = 20;

  return (
    <div className='w-full px-8 flex flex-row mt-[5.2rem]'>
      <button className=' flex flex-row h-[3rem] font-bold text-lg hover:shadow-lg border-neutral-900 border border-opacity-10 rounded-md  text-white bg-blue-700  items-center py-2 px-4 gap-2'>NEW GAME</button>
      <div className=' flex flex-row h-[3rem] font-bold text-sm shadow-lg border-neutral-900 border border-opacity-10 rounded-md  ml-auto text-black  items-center py-2 px-4 gap-2'>
        {/* <div className="w-1 border-l border-neutral-900 border-opacity-30 h-3/4"></div> */}
        <div className="flex items-center gap-2">
          <MdSportsScore size={18} className='text-red-700' /> Score {score}
        </div>
        <div className="w-1 border-l border-neutral-900 border-opacity-30 h-3/4"></div>

        <div className="flex items-center gap-2">
          <FaClock className='text-blue-700' /> Time Left: {time}
        </div>
      </div>
    </div>
  )
}

export default StatusBar