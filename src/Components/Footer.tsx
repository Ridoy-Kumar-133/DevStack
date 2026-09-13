import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='h-56 w-[90%] m-auto'>

            <div className='flex justify-between gap-7 items-center'>

               <div className=''>
                 <img src={logo} alt="" className='my-4'/>
                 <div className='my-5 w-100 text-[#475569]'>
                    <span >Curated tools, technologies, and resources for developers building
                  modern software.</span>
                 </div>
                  <div className=''>
                    <ul className='flex gap-5 font-semibold text-[#475569]'>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Twiter</a></li>
                        <li><a href="#">Linkdin</a></li>
                    </ul>
                  </div>
               </div>

               <div className='flex gap-50'>

                 <div>
                    <p className='font-[#0F172A] font-semibold mb-3 '><a href="#">PRODUCT</a></p>
                    <ul>
                        <li className='m-2 text-[#64748B]'>Home</li>
                        <li className='m-2 text-[#64748B]'>Technologies</li>
                        <li className='m-2 text-[#64748B]'>Projects</li>
                    </ul>
                 </div>
                 <div>
                    <p className='font-[#0F172A] font-semibold mb-3 '><a href="#">COMPANY</a></p>
                    <ul>
                        <li className='m-2 text-[#64748B]'>About</li>
                        <li className='m-2 text-[#64748B]'>Contact</li>
                        <li className='m-2 text-[#64748B]'>Careers</li>
                    </ul>
                 </div>
                 <div>
                    <p className='font-[#0F172A] font-semibold mb-3 '><a href="#">LEGAL</a></p>
                    <ul>
                        <li className='m-2 text-[#64748B]'>Privacy Policy</li>
                        <li className='m-2 text-[#64748B]'>Terms of Service</li>
                       
                    </ul>
                 </div>

               </div>

            </div>

               <div className="divider"></div>
           
            <div className='mt-5'>
                <div className='flex justify-between gap-3 items-center'>
                    <div>
                        <p className='text-[#94A3B8]'>© 2026 Dev Stack. All rights reserved.</p>
                    </div>
                    <div className='my-5' >
                        <button className='text-[#94A3B8] m-2'><a href="#">Privacy</a></button>
                        <button className='text-[#94A3B8]'><a href="#">Terms</a></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;