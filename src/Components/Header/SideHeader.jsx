import './SideHeader.css'
import { IoIosArrowBack } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


const  navItem = [
    {
        path:'/',
        nav:'Home',
        icon:<FaHome className='text-2xl' />
    },
    {
        path:'/',
        nav:'Home',
        icon:<FaHome className='text-2xl' />
    },
    {
        path:'/',
        nav:'Home',
        icon:<FaHome className='text-2xl' />
    },
    {
        path:'/',
        nav:'Home',
        icon:<FaHome className='text-2xl' />
    },
    {
        path:'/',
        nav:'Home',
        icon:<FaHome className='text-2xl' />
    },
    {
        path:'/about',
        nav:'about',
        icon:<IoPerson className='text-2xl' />
    }
]


function SideHeader() {

    const authContext = useContext(AuthContext);
    const isChecked = authContext.isFullSidebar;
    const setIsChecked = authContext.setIsFullSidebar;
    console.log(isChecked, "   ", setIsChecked);



    return (
        <div className='relative'>


            <input id="sideHeaderToggle" type="checkbox" className='hidden peer/sideHeader ' onChange={(e) => { setIsChecked(!isChecked) }} />
            <div className={`${isChecked ? 'w-60 fixed ' : 'w-0 sm:w-20 '}  bg-blue-600 text-white p-2  font-extrabold   h-[100vh]  sticky top-0 bottom-0 right-0   transition-all ease-in-out  duration-300`}>

                <label id='sideHeaderToggle' htmlFor="sideHeaderToggle" className='absolute top-0 -left-4 bottom-0  flex items-center text-3xl '><IoIosArrowBack className={`${isChecked ? 'rotate-180' : ''} transition-all ease-in-out duration-500 bg-blue-600 rounded-full p-1  `} /></label>

                <div>
                    <ul className='overflow-hidden flex flex-col gap-1   text-sm'>
                        <li className=" p-3 rounded-sm flex gap-3 items-center hover:bg-blue-500   ">
                            <div className=" w-10 h-10 rounded-full p-1  border">
                                <img src="https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg" className="rounded-full" />
                            </div>
                            {
                                isChecked && <div className="text-white">user</div>
                            }

                        </li>
                        {/* <li><NavLink to={'/'} className={({ isActive }) => `${isActive ? ' bg-blue-500' : ''} flex w-full items-center justify-end gap-4 p-3 rounded-sm hover:bg-blue-500 `} ><span className={isChecked ? 'block' : 'hidden'} > Home</span></NavLink></li> */}

                        {
                            navItem.map((item, index)=>{
                                return(
                                    <NavItem navData={item} isChecked={isChecked} />
                                )
                            })
                        }
                    </ul>


                </div>


            </div>
        </div>
    )
}

function NavItem({navData, isChecked})
{
    return (
        <li><NavLink to={navData.path} className={({ isActive }) => `${isActive ? ' bg-blue-500' : ''} flex w-full items-center  gap-4 p-3 rounded-sm hover:bg-blue-500 ${!isChecked && 'justify-center'}  `} >{navData.icon}<span className={isChecked ? 'block' : 'hidden'} >{navData.nav}</span></NavLink></li>
    )
}

export default SideHeader;