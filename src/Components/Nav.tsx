import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        // Main div
        <div className=""> 
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
                    <p><button>Sign In</button></p>
                    <button className='btn bg-[#D91B7E] rounded-3xl text-white'>Sign Up</button>
                </div>


            </div>
        </div>
    );
};

export default Nav;