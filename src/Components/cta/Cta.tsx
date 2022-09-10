import React from 'react'
import {FaArrowDown as  FaCheck } from 'react-icons/fa'

const Cta = () => {
  return (
    <section className="text-center py-12 h-[600px] bg-primary/50 px-3 overflow-hidden">
  <div className="pt-6">
    <h2 className='text-4xl'>Get Started With Lite Web</h2>
    <p>With Integrations like: Mailchimp, Campaign Monster etc</p>
    <button className='bg-gray-800 text-xs w-[190px] rounded-sm shadow-sm block px-5 py-4 my-5 mx-auto'>Try Lite Web for Free</button>
    <div className="flex justify-center items-center gap-6">
{/* @comp */}
<div className="flex gap-3 items-center">
  <span className="text-green-500"><FaCheck /></span>
  <span className="text-sm">Custom Templates</span>
</div>
{/* @comp end */}
{/* @comp */}
<div className="flex gap-3 items-center">
  <span className="text-green-500"><FaCheck /></span>
  <span className="text-sm">Custom Templates</span>
</div>
{/* @comp end */}
{/* @comp */}
<div className="flex gap-3 items-center">
  <span className="text-green-500"><FaCheck /></span>
  <span className="text-sm">Custom Templates</span>
</div>
{/* @comp end */}
    </div>
  </div>
  <div className="">
  <img src={'https://utolcutt.sirv.com/Images/liteweb/Group%20458.png'} alt="" className='w-full mx-auto mt-12' />
  </div>
</section>


    )
}

export default Cta