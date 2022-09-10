import React from 'react'
import { FaArrowDown as ArrowDown } from 'react-icons/fa'

const Showcase = () => {
  return (
    <section className="py-12 px-4 my-12 bg-[#043534] overflow-hidden" style={{
        background:'linear-gradient(0deg, #054342,black, black )'
      }}>
        <h1 className="text-center text-3xl md:text-5xl max-w-[750px] mx-auto my-3">
This is the new Generation of <span className="text-primary">No-Code Websites {' '}</span>
Get to know them.
        </h1>
      {/* button @showcase */}
      <button className='bg-primary text-center text-xs text-black px-12 block m-auto my-5 py-3'>Showcase</button>
    <div className="template-demos h-[15vh] my-5 items-center">
      <img src={'https://utolcutt.sirv.com/Images/liteweb/Awesome_page_builder_with_400%2B_professionally_designed_blocks__1_-removebg-preview.png'} alt="" className='w-full mx-auto ' />
      {/* template image */}
      {/* <div className="w-[200px] h-[100px] flex-shrink-0 bg-gray-700"></div>
      <div className="w-[150px] h-[100px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[100px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[200px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[100px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[100px] flex-shrink-0 bg-gray-300"></div> */}
    </div>



      </section>
  )
}

export default Showcase