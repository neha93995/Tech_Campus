import logo from '../../Images/tech_campus_logo.png'
import { FaMoon } from "react-icons/fa";


function TopHeader(){
    return(
        <div className="sticky bg-white top-0 left-0 right-0 h-14 p-2 px-16 shadow-xl z-50">
            
            <div className='flex justify-between items-center'>
                {/*----------------- login user image */}
                <div className="w-24 p-[2px]">
                    <img src={logo} alt='logo' />
                </div>

                <div className='flex'>
                    <button className='border border-blue-600  hover:bg-blue-600 px-2 font-bold  text-blue-600 hover:text-white  rounded-lg mx-4 '><FaMoon className='text-lg'/> </button>
                    <button className='border py-2 px-5 bg-blue-600 text-xs font-bold text-white  rounded-lg '>login</button>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;