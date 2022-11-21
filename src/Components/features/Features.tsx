import React from 'react'
import { FaAccessibleIcon, FaArrowDown as ArrowDown } from 'react-icons/fa'

const Features = () => {
  return (
<>
<section className="my-12 py-12 px-4">
    <div className='flex flex-col md:flex-row  relative py-12  justify-around'>
      {/* @comp */}
      <div className="max-w-[400px] my-5 md:my-0 listo">
        <h3 className="text-5xl">
        Just the way work should be
        </h3>
        <p className='text-sm py-4'>
        Create stylish landing pages and websites in under 30 minutes with 400+ pre-built blocks and templates. Liteweb Engine also includes an SEO tool and a lovely form builder.
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
  
  <section className="my-12 py-12 px-4">
    <h2 className='text-5xl text-center p-3'> What can i do with <span className="text-primary">liteweb</span> ?</h2>


    <div className="flex my-5 gap-4 flex-wrap justify-center">

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Drag and Drop</h4>
      <p>Save time and build code easily, just like designing. Generate your code immmediately too.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Export Code</h4>
      <p>Export your assets (Javascript files, CSS files, HTML, and photos) safely from your site and continue editing where you left off. </p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Domain Name</h4>
      <p>Get a unique subdomain (.litewebhq.com) for free or link your own unique domain name to Liteweb Engine e.g; mysite.com all in one click.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Blocks</h4>
      <p> Try out over 400 professionally designed blocks to create your websites and pages in minutes! Customize these blocks to your taste without any limitations.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">24/7 Support</h4>
      <p>We don't back out your after subscription, Reach out to us around the clock for assistance if you encounter any difficulties.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">FTP Push</h4>
      <p>Sync with your Cpanel seamlessly with one click: use Liteweb Engine as a lite CMS.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Easy to Use</h4>
      <p>Everything you need in one fun, interactive UI with simple documentation and Videos that can easily navigate.</p>
    </div>

    </div>
  </section>
  </>

  )
}

export default Features