import './SideHeader.css'
import { IoIosArrowBack } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SideHeader() {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className='relative'> 

       
        <input id="sideHeaderToggle" type="checkbox" className='hidden peer/sideHeader' onChange={()=>setIsChecked(!isChecked)} />
        <div className="w-0 sm:w-20 bg-blue-600 text-white p-2 sm:p-3 font-extrabold   h-[100vh]  sticky top-0 bottom-0 right-0 peer-checked/sideHeader:w-60 peer-checked/sideHeader:fixed transition-all ease-in-out  duration-300">

        <label id='sideHeaderToggle' htmlFor="sideHeaderToggle" className='absolute top-0 -left-3 bottom-0  flex items-center text-3xl'><IoIosArrowBack className={`${isChecked? 'rotate-180':''} transition-all ease-in-out duration-500 bg-blue-600 rounded-full p-1 border`}/></label>

            <div className=' overflow-hidden'>
                <ul className='text-right'>
                    <li><NavLink to={'/'} className={({isActive})=>`${isActive ?' bg-blue-500':''} flex w-full items-center gap-4 justify-center p-3 rounded-sm hover:bg-blue-500 `} ><FaHome className='text-3xl'/><span className={isChecked?'block':'hidden'} > Home</span></NavLink></li>
                    <li><NavLink to={'/about'} className={({isActive})=>`${isActive ?' bg-blue-500':''} flex w-full items-center gap-4 justify-center p-3 rounded-sm hover:bg-blue-500  `} ><IoPerson className='text-3xl'/><span className={isChecked?'block':'hidden'} > About</span></NavLink></li>
                    
                </ul>

            </div>
        
               
        </div>
        </div>
    )
}

export default SideHeader;