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
  
  <section className="my-12 py-12 px-4">
    <h2 className='text-5xl text-center p-3'> What can i do with <span className="text-primary">liteweb</span> ?</h2>


    <div className="flex my-5 gap-4 flex-wrap justify-center">

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Drag and Drop</h4>
      <p>Build code easily, just like you're designing. This will help save time as your code will be generated immmediately.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Export Code</h4>
      <p>This features, users get to export their assests from their site safely, which include javascript files, CSS files and photos. This allows users to continue editing even after they leave the website.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Domain Name</h4>
      <p>You can get a subdomain (.litewebhq.com) and you can also link your domain name to liteweb Engine e.g; mysite.com, all in one click.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Blocks</h4>
      <p> With over 400 professionally designed blocks, you get to swiftly create websites and pages, interestingly, these blocks can be customized to your taste! </p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">24/7 Support</h4>
      <p>We don't back out after subscription, we are here to assist you and make sure you do not have any difficulties using our product.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">FTP Push</h4>
      <p>WIth one click, you can seamlessly sync with your cpanel, hence, you can use Liteweb Engine as a lite CMS.</p>
    </div>

    <div className="w-[300px] text-center">
      <FaAccessibleIcon className="text-center/ text-4xl m-auto text-primary" />
      <h4 className="text-3xl my-1">Easy to Use</h4>
      <p>Everything in one aesthetically pleasing UI!, attractive designed interface, with an astonishing clear and concise documentation and guide videos.</p>
    </div>

    </div>
  </section>
  </>

  )
}

export default Features