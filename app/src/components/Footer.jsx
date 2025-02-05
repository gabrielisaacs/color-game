import React from 'react'

const Footer = () => {

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className='w-full h-[3.5rem] flex flex-row px-8 py-4 mt-auto border-t border-neutral-900 border-opacity-10 item-center bg-white'>
      <div className='flex items-center mx-auto gap-2'>
        <p>
          KolorGuess! &copy; {currentYear} by
        </p>
        <a href="https://i.on-fleek.com" target="_blank" rel="noopener noreferrer" className='font-bold hover:opacity-60'>
          Gabriel Isaac
        </a>
      </div>
    </div>
  )
}

export default Footer