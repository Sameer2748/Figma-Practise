import React from 'react'
import Button from './Button'
import './../App.css'

const Hero = () => {
  return (
    <div className=' text-white  w-full h-[350px] md:h-[400px] lg:h-[500px] pt-9  lg:pt-14 hero   '>
        <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-xl '>Food App</p>
            <div className='flex flex-col justify-center items-center gap-2 pb-4'>
            <h1 className=' text-3xl md:text-5xl lg:text-6xl font-bold  '>Why stay hungry when</h1>
            <h1 className=' text-3xl md:text-5xl lg:text-6xl font-bold '>you can order from Bella Onojie</h1>
            </div>
            <p className='text-lg pt-1 pb-5 text-gray-300 '>Download the Bella Onojie's food app now on</p>
            <div className='flex flex-row gap-7'>
            <Button title="Play Store" background="red-500"/>
            <Button title="App Store" background="none"/>
            </div>
        </div>
    </div>
  )
}

export default Hero