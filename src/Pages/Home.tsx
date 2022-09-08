import { motion } from "framer-motion";
import {
  LocomotiveScrollProvider,
} from "react-locomotive-scroll";
import { Fragment, useRef } from "react";
import scrollOptions from "../Config/scroll";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header";
import dashboard from '../Assets/dashboard.png';
import dashb from '../Assets/dash.png';
import logo from '../Assets/logo.png'
import {FaAngleDown, FaArrowDown as ArrowDown, FaCaretDown, FaCheck } from 'react-icons/fa'
const Home = () => {
  const containerRef = useRef(null);

  return(
    <Fragment>
      <Helmet>
        <title>Lite web - Home</title>
      </Helmet>

      <LocomotiveScrollProvider
        watch={[]}
        options={scrollOptions}
        containerRef={containerRef}
      >
        <motion.main
        exit={{opacity:0}}
          key="home"
          data-scroll-container
          ref={containerRef}
          id="home"
          >

  <Header />


    {/* hero */}
        <div className="text-center py-10 px-2">
          <h1 className="max-w-[650px] mx-auto text-bold text-3xl md:text-5xl">
            <span className="block text-primary ">Lite Web Builder</span>
            <span className="block">Everything you need to </span>
            <span className="block">Start Building today.</span>
          </h1>
        <p className="max-w-[500px] px-1 m-auto text-xs md:text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla ipsum necessitatibus beatae! Velit facere similique quae, enim esse quam.</p>

        <button className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] flex justify-center items-center text-md md:text-2xl bg-primary rounded-full  mx-auto">
          <ArrowDown />
        </button>
      
        </div>
        <div className="">
          <img src={dashb} alt="" className='w-3/4 mx-auto' />
        </div>


      {/* features */}


      <section className="my-12 py-12 px-4">
        <div className='flex flex-col md:flex-row  relative py-12  justify-around'>
          {/* @comp */}
          <div className="max-w-[400px] my-5 md:my-0">
            <h3 className="text-5xl">
              Built for the way you work
            </h3>
            <p className='text-sm py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis non earum error temporibus accusamus.
            </p>
            <div className="flex gap-3 text-xs items-center">
              <span className='text-primary underline'>Keep Scrolling</span>
              <span><ArrowDown /></span>
            </div>
          </div>
          {/* comp */}
          <div className="">
          <img src={dashboard} alt="" className='w-[500px]' />
          </div>
        </div>

      </section>

        {/* templates showcase */}


      <section className="py-12 px-4 my-12 bg-[#043534] overflow-hidden" style={{
        background:'linear-gradient(0deg, #054342,black, black )'
      }}>
        <h1 className="text-center text-3xl md:text-5xl max-w-[750px] mx-auto my-3">
This is the new Generation of <span className="text-primary">No-Code Websites {' '}</span>
Get to know them.
        </h1>
      {/* button @showcase */}
      <button className='bg-primary text-center text-xs text-black px-12 block m-auto my-5 py-3'>Showcase</button>
    <div className="template-demos h-[40vh] my-5">
      <img src={dashboard} alt="" className='w-full mx-auto' />
      {/* template image */}
      {/* <div className="w-[200px] h-[100px] flex-shrink-0 bg-gray-700"></div>
      <div className="w-[150px] h-[100px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[100px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[200px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[100px] flex-shrink-0 bg-gray-300"></div>
      <div className="w-[300px] h-[100px] flex-shrink-0 bg-gray-300"></div> */}
    </div>



      </section>


 {/* pricing */}

 <section className='py-12 my-12 px-2'>
<div className="text-center">
  <h1 className='text-4xl md:text-5xl max-w-[500px] md:max-w-[750px] py-1 mx-auto'>It's Easy to Get Started</h1>
  <p className='text-sm my-3 mx-auto max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipisicing met, consectetur adipisicing.</p>

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



  {/* blog */}
  {/* horizontal scroll */}
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


{/* cta */}

<section className="text-center py-12 h-[600px] bg-primary/50 px-3 overflow-hidden">
  <div className="pt-6">
    <h2 className='text-4xl'>Get Started With Lite Web</h2>
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
  <img src={dashboard} alt="" className='w-full mx-auto mt-12' />
  </div>
</section>



{/* faq */}
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




 
  {/* footer */}

      <footer className="p-5 md:p-12">
      <div className="">
        <img src={logo} className='w-[60px]' alt="" />
        <h3 className="text-3xl md:text-5xl max-w-[700px] py-4"><span className="text-primary">Subscribe</span> to our newsletter to stay in touch tith us</h3>
        <div className="">
          <input type="text" placeholder='Enter Here' className='py-3 text-2xl md:text-4xl bg-transparent outline-none' />
        </div>
      </div>
      </footer>
      <span className="p-5 md:px-12 py-2">
        <span>&copy; 2022 - All Right Reserved </span>
      </span>

        </motion.main>
      </LocomotiveScrollProvider>
    </Fragment>
  );
};

export default Home;
