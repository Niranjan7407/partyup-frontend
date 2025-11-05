import React from 'react'

function GameItem({name, imgSrc}) {
  return (
    <div className='h-[18vh] w-[7vw] group'>
        <div className='h-[18vh] w-[7vw] bg-center bg-gray-800 rounded flex items-center justify-center bg-cover bg-no-repeat transform transition-transform duration-200 ease-in-out group-hover:scale-105' style={{backgroundImage: `url(${imgSrc})`}}>
        </div>
        <div>
        <h3 className='text-white text-center mt-2'>{name}</h3>
        </div>
    </div>
  )
}

export default GameItem