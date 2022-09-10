import React from 'react'
import {FaAngleDown } from 'react-icons/fa'

const Faq = () => {
  return (
    <section className="flex flex-col md:flex-row px-6 gap-6 py-12 justify-around">
<div className="">
  <h3 className="text-3xl md:text-5xl max-w-[400px]">Frequently Asked Questions</h3>
  <p className='text-xs py-2 max-w-[400px]'>Have Questions not listed here?, Contact our team and we'll be happy to help : )</p>
<button className='bg-gray-800 text-sm w-[150px] rounded-sm shadow-sm block py-3 my-2'>Contact Us</button>
</div>
<div className="max-w-[450px]">
  {/* faqs */}
  
  <div className="flex justify-between gap-5 my-5 items-center md:p-4 p-3 px-8 rounded-full bg-gray-900">
    <span className="text-sm md:text-md">Can I Cancel or Change Plans at Anytime ?</span>
    <span className=""><FaAngleDown /></span>
  </div>
  
  <div className="flex justify-between gap-5 my-5 items-center md:p-4 p-3 px-8 rounded-full bg-gray-900">
    <span className="text-sm md:text-md">Does Lite web works on mobile ?</span>
    <span className=""><FaAngleDown /></span>
  </div>
  
  <div className="flex justify-between gap-5 my-5 items-center md:p-4 p-3 px-8 rounded-full bg-gray-900">
    <span className="text-sm md:text-md">Is there a free or Trial version ?</span>
    <span className=""><FaAngleDown /></span>
  </div>
  
  <div className="flex justify-between gap-5 my-5 items-center md:p-4 p-3 px-8 rounded-full bg-gray-900">
    <span className="text-sm md:text-md">Can I Export it to .TSX file ?</span>
    <span className=""><FaAngleDown /></span>
  </div>
  
  <div className="flex justify-between gap-5 my-5 items-center md:p-4 p-3 px-8 rounded-full bg-gray-900">
    <span className="text-sm md:text-md">Do i need to have basic knowlegde in programing ?</span>
    <span className=""><FaAngleDown /></span>
  </div>


</div>
</section>

  )
}

export default Faq