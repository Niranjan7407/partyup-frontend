import React from 'react'
import GameItem from '../components/GameItem'
import ValorantImg from '../assets/valorant.webp'
import SearchBar from '../components/SearchBar'


function GamePage() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-[#19191D]'>
        {/* <GameItem name="Valorant"  imgSrc={ValorantImg}/> */}
        <SearchBar></SearchBar>
    </div>
  )
}

export default GamePage