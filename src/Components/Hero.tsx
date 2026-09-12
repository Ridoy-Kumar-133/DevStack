import hero from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className="h-105 w-[90%] m-auto my-15 flex justify-between items-center">

              <div>
                 <div className="my-6">
                     <h1 className="text-5xl font-bold tracking-tight text-[#0F172A] leading-tight">Build Your Ideal</h1>
                    <h1 className="text-6xl font-bold bg-linear-to-r from-[#FF5722] via-[#E91E63] to-[#7C4DFF] bg-clip-text text-transparent">Development Stack</h1>
               </div>
                

                   <div className="h-32 w-130">
                   <p className='text-[#475569]'> Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project</p>
                   </div>
                      
                   <div className="">
                     <button className="text-white w-42.5 h-10.5 bg-linear-to-r from-[#FF5E3A] to-[#D91B7E] btn">Explore Technologies</button>
                      <button className="text-gray-500 mx-2 btn text-center items-center w-42.5 h-10.5">Learn More</button>
                   </div>
              </div>

              <div className='h[420px] w-122'>
                <img src={hero} alt="" />
              </div>
             
              

             
        </div>
    );
};

export default Hero;

