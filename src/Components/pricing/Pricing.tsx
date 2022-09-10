import React from 'react'

const Pricing = () => {
  return (
    
 <section className='py-12 my-12 px-2'>
 <div className="text-center">
   <h1 className='text-4xl md:text-5xl max-w-[500px] md:max-w-[750px] py-1 mx-auto'>It's Easy to Get Started</h1>
   <p className='text-sm my-3 mx-auto max-w-[500px]'>It's very affordable Yunno</p>
 
   <div className="flex  items-center my-3 font-[500] justify-center gap-6">
     <span>Monthly</span>
     {/* toggle */}
     <div className="w-[70px] h-[35px] bg-gray-800 rounded-full flex items-center">
       <span className="h-[30px] w-[30px] block bg-primary m-1 rounded-full cursor-pointer"></span>
     </div>
     <span className='opacity-60'>Yearly</span>
   </div>
 </div>
 
 
 <div className="p-6 flex flex-wrap mt-12 justify-center items-center gap-9">
 
 {/* card */}
 <div className="w-[300px] h-[400px] bg-gray-800">
 <div className="p-8">
 <h4 className='text-2xl'>Starter</h4>
 <h2><span className='text-5xl font-[500] text-primary'>$0.99</span> <span className="text-xs opacity-60">/ month</span></h2>
 
 <ul className='text-sm my-3 gap-2 grid'>
   <li>30 Websites</li>
   <li>30 Websites</li>
   <li>30 Websites</li>
   <li>30 Websites</li>
   <li>30 Websites</li>
   <li>30 Websites</li>
 </ul>
 
 <button className='w-full p-3 my-6 bg-gray-600'>Get Started</button>
 </div>
 </div>
 
 <div className="w-[300px] -lg:scale-[1.2] h-[400px] bg-primary">
 
 </div>
 <div className="w-[300px] h-[400px] md:w-[650px] md:h-[300px] bg-gray-800">
 
 </div>
 
 
 </div>
 
 
 </section>
 
  )
}

export default Pricing