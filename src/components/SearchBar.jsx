import React from 'react'
import Search from '../assets/search.svg'

function SearchBar() {
  return (
    <div className='flex items-center justify-center w-[20vw] mt-10'>
        <div className='relative w-full'>
            <input 
                type="text" 
                placeholder='Game Name' 
                className='w-full p-3 pr-12 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6'>
                <img src={Search} alt="Search" />
            </button>
        </div>
    </div>
  )
}

export default SearchBar