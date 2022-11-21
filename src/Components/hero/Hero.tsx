import React from 'react'
import { FaArrowDown as ArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
                <><div className="text-center py-10 px-2">
          <h1 className="max-w-[650px] mx-auto text-bold text-3xl md:text-5xl">
              <span className="block text-primary ">Build a Website in Minutes</span>
              <span className="block"> Even With ZERO Experience,  </span>
              <span className="block">Using Over 400 Drag-and-Drop Elements!</span>
          </h1>
          <p className="max-w-[500px] px-1 m-auto text-xs md:text-sm py-3"> You no longer need a computer science degree to build amazing websites. 
          Acheive your goal of building any UI your own way from scratch with our professionally designed, easy drag-and-drop templates.
.</p>

          <button className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] flex justify-center items-center text-md md:text-2xl bg-primary rounded-full  mx-auto">
              <ArrowDown />
          </button>

      </div>
      <div className="">
              <img src={'https://utolcutt.sirv.com/Images/liteweb/4.png'} alt="" className='w-3/4 mx-auto' />
          </div></>
  )
}

export default Hero