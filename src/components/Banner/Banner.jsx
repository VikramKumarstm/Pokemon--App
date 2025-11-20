import React from 'react'
import bannerImage from '../../assets/Poke_Banner.jpg'

function Banner() {
  return (
    <div className='w-full h-[25rem] relative'>
        <img 
            src={bannerImage} 
            alt="banner image"
            className='h-full w-full'
        />

        <div className='absolute top-20 left-0 right-0 mx-auto w-[25rem] bg-[#aaa]/50 px-4 py-6 rounded-tl-3xl rounded-br-3xl'>
            <h2 className='text-5xl font-bold text-black'>Pokemon APP</h2>
            <p className='text-center text-black text-sm font-semibold'>Get all info regarding Pokemons</p>
        </div>
    </div>
  )
}

export default Banner