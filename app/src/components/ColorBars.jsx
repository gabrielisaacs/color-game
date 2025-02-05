import React from 'react'

const ColorBars = () => {
  return (
    <div className='mx-auto flex flex-wrap gap-4 w-[40rem]'>
      <button className=' h-[5rem] w-full font-bold shadow-lg border-neutral-900 border border-opacity-30 rounded-md  text-white text-2xl bg-blue-700  items-center py-2 px-4 gap-2 text-center'> What Color is this?</button>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full">
        <button className='h-[5rem] shadow-lg border-neutral-900 border border-opacity-30 rounded-md bg-blue-700'></button>
        <button className='h-[5rem] shadow-lg border-neutral-900 border border-opacity-30 rounded-md bg-green-700'></button>
        <button className='h-[5rem] shadow-lg border-neutral-900 border border-opacity-30 rounded-md bg-red-700'></button>
        <button className='h-[5rem] shadow-lg border-neutral-900 border border-opacity-30 rounded-md bg-black'></button>
        <button className='h-[5rem] shadow-lg border-neutral-900 border border-opacity-30 rounded-md bg-gray-700'></button>
        <button className='h-[5rem] shadow-lg border-neutral-900 border border-opacity-30 rounded-md bg-pink-700'></button>
      </div>
    </div>
  )
}

export default ColorBars