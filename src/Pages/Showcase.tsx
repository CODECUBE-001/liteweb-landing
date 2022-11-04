import { FaArrowDown as ArrowDown } from "react-icons/fa";
import { Footer } from "../Layout";
import showcase from "../showcase";
const Showcase = ()=>{
return <div className="">
          <div className="logo">
        <img src={'/logo.png'} alt="" className="w-[60px] mx-auto" />
      </div>

      <div className="p-5 py-12 text-center mx-auto text-bold text-primary">
          <h1 className="text-6xl md:text-8xl">Showcase</h1>
          <button className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] flex justify-center items-center my-4 text-white text-md md:text-2xl bg-primary rounded-full  mx-auto">
              <ArrowDown />
          </button>
      </div>

      <section className="m-2 showcases">
      {
          showcase.map((sc, i)=>(
         <a href={sc.url} style={{backgroundImage:`url(${sc.image})`}} key={i}className="show-case"></a>
          ))
      }
      </section>

      <Footer />
</div>
};
export default Showcase