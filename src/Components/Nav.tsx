import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        // Main div
        <div className=" fixed l-0 w-full top-0 bg-white"> 
            <div className='w-[90%] flex justify-between m-auto items-center h-17 '>

                <div>
                    <img src={logo} alt="Logo Image" />
                </div>

                <div>
                    <ul className='flex gap-4'>
                        <li className='text-[#D91B7E]'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='flex gap-3 items-center'>
                    <button>Sign In</button>
                    <button className='btn bg-linear-to-r from-orange-500 via-pink-500 to-violet-500  rounded-3xl text-white'>Sign Up</button>
                </div>


            </div>
        </div>
    );
};

export default Nav;