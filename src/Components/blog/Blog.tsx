import React from 'react'

const Blog = () => {
  return (
    <section className='p-12'>
    <div className="">
      <h3 className="text-4xl">Read Lastest Article</h3>
      <p className="py-1">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </div>

    <div className="my-8 flex gap-5 overflow-x-hidden">

      {/* blog card */}
  <div className='flex-shrink-0 '>
    <div className=" relative overflow-hidden">
      <div className="w-[250px] h-[350px]"  style={{backgroundImage:'url(/blog.jpg)',backgroundSize:'cover',backgroundPosition:'center center',filter:'blur(40px)'}}> </div>
    </div>
    <h5 className="opacity-70 py-3">September 2nd, 2022 - <span>3mins read</span></h5>
    <h3 className="text-3xl w-[300px]">No-code vs Coding a website</h3>
  </div>
 
  <div className='flex-shrink-0 '>
    <div className=" relative overflow-hidden">
      <div className="w-[250px] h-[350px]"  style={{backgroundImage:'url(/blog.jpg)',backgroundSize:'cover',backgroundPosition:'center center',filter:'blur(40px)'}}> </div>
    </div>
    <h5 className="opacity-70 py-3">September 2nd, 2022 - <span>3mins read</span></h5>
    <h3 className="text-3xl w-[300px]">No-code vs Coding a website</h3>
  </div>
 
  <div className='flex-shrink-0 '>
    <div className=" relative overflow-hidden">
      <div className="w-[250px] h-[350px]"  style={{backgroundImage:'url(/blog.jpg)',backgroundSize:'cover',backgroundPosition:'center center',filter:'blur(40px)'}}> </div>
    </div>
    <h5 className="opacity-70 py-3">September 2nd, 2022 - <span>3mins read</span></h5>
    <h3 className="text-3xl w-[300px]">No-code vs Coding a website</h3>
  </div>
 


    </div>
  </section>

  )
}

export default Blog