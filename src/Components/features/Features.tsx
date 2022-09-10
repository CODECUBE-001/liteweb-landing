import React from 'react'
import { FaArrowDown as ArrowDown } from 'react-icons/fa'

const Features = () => {
  return (
    <section className="my-12 py-12 px-4">
    <div className='flex flex-col md:flex-row  relative py-12  justify-around'>
      {/* @comp */}
      <div className="max-w-[400px] my-5 md:my-0 listo">
        <h3 className="text-5xl">
          Built for the way you work
        </h3>
        <p className='text-sm py-4'>
        With our 400+ pre-built blocks and template, you can effortlessly create distinctive looking landing pages and websites in under 30 minutes. Xtraweb also includes an SEO tool and a lovely form builder. 
</p>
          <li>Drag and Drop Website Builder</li>
          <li>400+ pre made blocks</li>
          <li>Export Your code to your Device</li>
          <li>Free Subdomain</li>
          <li>Add Your own Domain (Coming Soon)</li>
          <li>Push to Cpanel Directly</li>
          <li>Add Your own code</li>
        <div className="flex gap-3 text-xs items-center">
          <span className='text-primary underline'>Keep Scrolling</span>
          <span><ArrowDown /></span>
        </div>
      </div>
      {/* comp */}
      <div className="">
      <img src={'https://utolcutt.sirv.com/Images/liteweb/1-removebg-preview.png'} alt="" className='w-[500px]' />
      </div>
    </div>

  </section>

  )
}

export default Features