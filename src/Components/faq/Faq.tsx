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
<a href="mailto:test@email.com"><button className='bg-gray-800 text-sm w-[150px] rounded-sm shadow-sm block py-3 my-2'>Contact Us</button></a>
</div>
<div className="max-w-[450px]">
  {/* faqs */}
  <FAQ ques="Is Liteweb Free?" ans='Yes, Liteweb offers free trial and a free plan too, however, for the very best experience, I would recommend a paid plan.' />
<FAQ ques="Can I use Liteweb on a Live Project?" ans='Yes, This website and some other Live Websites were built on Liteweb Engine, since it enables you to export code and also use FTP. Check the showcase page for more.
.' />
  <FAQ ques="Do I need a hosting and domain to get started?" ans='No, you can get a free subdomain from us by going to the project settings page in your dashboard. However for a large or live project, I would recommend you use your own domain and hosting.' />
  <FAQ ques="Can I use Liteweb Engine on Github?" ans='No, we do not support direct push to Github yet. Our team are working very hard to make this possible. however, you can do that by downloading your code and upload to Github or use the FTP - Github method.' />
  <FAQ ques="Is coding knowledge needed for Liteweb Engine?" ans='No, You do not need to code, however, coding knowledge will give your website more flexibility as our website builder allows users to write custom Bootstrap code. Also, after exporting your code, you can add any technology (Frontend or Backend) to it.' />
  <FAQ ques="Is there any available template for Liteweb Engine?" ans='No, not at the moment, but we are working on some, however, you can make use of the 400+ professionally built blocks.' />
  <FAQ ques="do I need any prequisite to us Liteweb Engine?" ans='No, the builder is so easy to use.' />
  <FAQ ques="can I download the desktop app?" ans='No, our team are working really hard to make that possible as soon as possible.' />


</div>
</section>

  )
}

export default Faq