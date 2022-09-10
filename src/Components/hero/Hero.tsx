import React from 'react'
import { FaArrowDown as ArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
                <><div className="text-center py-10 px-2">
          <h1 className="max-w-[650px] mx-auto text-bold text-3xl md:text-5xl">
              <span className="block text-primary ">Lite Web Builder</span>
              <span className="block">Everything you need to </span>
              <span className="block">Start Building today.</span>
          </h1>
          <p className="max-w-[500px] px-1 m-auto text-xs md:text-sm py-3"> Build UI effortlessly and in minutes with over 400 professionally designed blocks that allow users to
              build websites and pages using our easy drag-and-drop builder.</p>

          <button className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] flex justify-center items-center text-md md:text-2xl bg-primary rounded-full  mx-auto">
              <ArrowDown />
          </button>

      </div></>
  )
}

export default Hero