import React from 'react'

const Footer = () => {
  return (
    
    <><footer className="p-5 md:p-12">
          <div className="">
              <img src={'/logo.png'} className='w-[60px]' alt="" />
              <h3 className="text-3xl md:text-5xl max-w-[700px] py-4"><span className="text-primary">Subscribe</span> to our newsletter to stay in touch tith us</h3>
              <div className="">
                  <input type="text" placeholder='Enter Here' className='py-3 text-2xl md:text-4xl bg-transparent outline-none' />
              </div>
          </div>
      </footer><span className="p-5 md:px-12 py-2">
              <span>&copy; 2022 - All Right Reserved </span>
          </span></>

  )
}

export default Footer