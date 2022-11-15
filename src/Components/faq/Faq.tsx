import React, { useState } from 'react'
import {FaAngleDown } from 'react-icons/fa'

const FAQ = ({ans, ques}:{ans:string, ques:string})=>{
  const [isOpen , setOpen] = useState(false)
  return(
    <div className="md:p-4 p-3 px-8 my-5 rounded-[30px] bg-gray-900">
    <div className="flex justify-between gap-5  my-1 items-center" onClick={()=> setOpen(!isOpen)}>
    <span className="text-sm md:text-md text-lg">{ques}</span>
    <span className=""><FaAngleDown /></span>
    </div>

   {isOpen &&  <div className="">{ans}</div>}
  </div>
  )
}

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
  <FAQ ques="Can I Cancel or Change Plans at Anytime ?" ans='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' />
  <FAQ ques="Does Lite web works on mobile ?" ans='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' />
  <FAQ ques="Is there a free or Trial version ?" ans='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' />
  <FAQ ques="Can I Export it to .TSX file ?" ans='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' />
  <FAQ ques="Do i need to have basic knowlegde in programing ?" ans='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' />


</div>
</section>

  )
}

export default Faq