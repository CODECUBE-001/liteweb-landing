import {FaCheck, FaTimes} from "react-icons/fa"
import {useState} from "react"
const Pricing = () => {
  const [isMonth, setToggle] = useState(true)
  return (
    
 <section className='py-12 my-12 px-2'>
 <div className="text-center">
   <h1 className='text-4xl md:text-5xl max-w-[500px] md:max-w-[750px] py-1 mx-auto'>It's Easy to Get Started</h1>
   <p className='text-sm my-3 mx-auto max-w-[500px]'>It's very affordable Yunno</p>
 
   <div className="flex  items-center my-3 font-[500] justify-center gap-6" onClick={()=> setToggle(!isMonth)}>
     <span>Monthly</span>
     {/* toggle */}
     <div className="w-[70px] h-[35px] bg-gray-800 rounded-full flex items-center">
       <span className={`h-[30px] w-[30px] block bg-primary m-1 rounded-full cursor-pointer ${!isMonth && "translate-x-[100%]"} `}></span>
     </div>
     <span className='opacity-60'>Yearly</span>
   </div>
 </div>
 
 
 <div className="p-6 flex flex-wrap mt-12 justify-center items-center gap-9">
 
 {/* card */}
 <div className="w-[300px] min-h-[400px] bg-gray-800">
 <div className="p-8">
 <h4 className='text-xl'>Newbie</h4>
 <h2><span className='text-5xl font-[500] text-primary'>Free</span> <span className="text-xs opacity-60">/ {isMonth ? "month":"year"}</span></h2>
 
 <ul className='text-sm my-3 gap-2 grid'>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">3 Websites Monthly</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">15 Websites annually</span></li>
   <li className="flex gap-1 items-center"><FaTimes /> <span className="px-1">Recurring Transaction</span></li>
   <li className="flex gap-1 items-center"><FaTimes /> <span className="px-1">Online Payment</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Free Subdomain</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">FTP Push</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Export Code</span></li>
 </ul>
 
 <a href=""><button className='w-full p-3 mt-2 bg-gray-600'>Try Now</button></a>
 </div>
 </div>
 
 <div className="w-[300px] min-h-[400px] bg-gray-800">
 <div className="p-8">
 <h4 className='text-xl'>Starter</h4>
 <h2><span className='text-5xl font-[500] text-primary'>₦{(5 * (isMonth?1:12))}k</span> <span className="text-xs opacity-60">/ {isMonth ? "month":"year"}</span></h2>
 
 <ul className='text-sm my-3 gap-2 grid'>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">10 Websites Monthly</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Unlimited Websites annually</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Recurring Transaction</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Online Payment</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Free Subdomain</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">FTP Push</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Export Code</span></li>
 </ul>
 
 <a href=""><button className='w-full p-3 mt-2 bg-gray-600'>Subscribe</button></a>
 </div>
 </div>

 <div className="w-[300px] min-h-[400px] bg-gray-800">
 <div className="p-8">
 <h4 className='text-xl'>Ultimate</h4>
 <h2><span className='text-5xl font-[500] text-primary'>₦{(10 * (isMonth?1:12))}K</span> <span className="text-xs opacity-60">/ {isMonth ? "month":"year"}</span></h2>
 
 <ul className='text-sm my-3 gap-2 grid'>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">30 Websites Monthly</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Unlimited Websites annually</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Recurring Transaction</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Online Payment</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Free Subdomain</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">FTP Push</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Export Code</span></li>
 </ul>
 
 <a href=""><button className='w-full p-3 mt-2 bg-gray-600'>Try Now</button></a>
 </div>
 </div>


 <div className="w-[300px] min-h-[400px] bg-gray-800">
 <div className="p-8">
 <h4 className='text-xl'>Pro</h4>
 <h2><span className='text-5xl font-[500] text-primary'>₦{(15 * (isMonth?1:12))}k</span> <span className="text-xs opacity-60">/ {isMonth ? "month":"year"}</span></h2>
 
 <ul className='text-sm my-3 gap-2 grid'>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Unlimited Websites</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Recurring Transaction</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Online Payment</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Free Subdomain</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">FTP Push</span></li>
   <li className="flex gap-1 items-center"><FaCheck /> <span className="px-1">Export Code</span></li>
 </ul>
 
 <a href=""><button className='w-full p-3 mt-2 bg-gray-600'>Try Now</button></a>
 </div>
 </div>
 
 </div>
 
 
 </section>
 
  )
}

export default Pricing
