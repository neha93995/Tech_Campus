import './SideHeader.css'
import { IoIosArrowBack } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoPerson } from "react-icons/io5";
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import logo from '../../Images/tech_campus_logo_white.png';
import { GrBlog } from "react-icons/gr";
import { MdOutlineDisplaySettings, MdOutlineAssignment, MdOutlineEmojiEmotions } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { PiExam } from "react-icons/pi";

function SideHeader() {

    const authContext = useContext(AuthContext);
    // const isChecked = authContext.isFullSidebar;
    const isChecked = true;
    const setIsChecked = authContext.setIsFullSidebar;


    return (
        <div className='relative'>


            <input id="sideHeaderToggle" type="checkbox" className='hidden peer/sideHeader ' onChange={(e) => { setIsChecked(!isChecked) }} />
            <div className={`${isChecked ? ' ' : 'w-0 sm:w-20 '} w-52  bg-blue-600 text-white p-2  font-extrabold   sticky top-0  bottom-0  h-[100vh] transition-all ease-in-out  duration-300`}>

                {/* <label id='sideHeaderToggle' htmlFor="sideHeaderToggle" className='absolute top-0 -right-6 bottom-0  flex items-center text-3xl '><IoIosArrowBack className={`${isChecked ? 'rotate-180' : ''} transition-all ease-in-out duration-500 text-blue-600 rounded-full p-1  `} /></label> */}

                <div>
                    <ul className='overflow-hidden flex flex-col gap-1   text-sm'>
                        <li className=" p-3 rounded-sm flex gap-3 items-center hover:bg-blue-500   ">
                            <div className="w-24 p-[2px]">
                                <Link to='/'><img src={logo} alt="logo" className='w-40 m-auto ' /></Link>
                            </div>

                        </li>
                        {/* <li><NavLink to={'/'} className={({ isActive }) => `${isActive ? ' bg-blue-500' : ''} flex w-full items-center justify-end gap-4 p-3 rounded-sm hover:bg-blue-500 `} ><span className={isChecked ? 'block' : 'hidden'} > Home</span></NavLink></li> */}


                        {/* -----------------------------------------nav item------------------ */}
                        <NavItem navData={{ path: '/profile', nav: 'Profile', icon: <CgProfile className='text-2xl' /> }} isChecked={isChecked} />
                        <NavItem navData={{ path: "/blog-page", nav: "Blogs", icon: <GrBlog className='text-2xl' /> }} isChecked={isChecked} />
                        <ul className="menu p-0 m-0">
                            <li>
                                <details open>
                                    <summary className={` flex w-full items-center  gap-4 p-3 rounded-sm hover:bg-blue-500 `} > <MdOutlineDisplaySettings className='text-2xl' /> Fundamental </summary>
                                    <ul className='border-l border-white'>
                                        
                                         <NavItem navData={{ path: "/fundamental/dbms", nav: "DBMS", subject:"dbms" }} isChecked={isChecked} />
                                         <NavItem navData={{ path: "/fundamental/computer-network", nav: "Computer network", subject:"computer-network" }} isChecked={isChecked} />
                                         <NavItem navData={{ path: "/fundamental/operating-system", nav: "Operating System", subject:"operating-system" }} isChecked={isChecked} />
                                        
                                        
                                    </ul>
                                </details>
                            </li>
                        
                        </ul>

                       <NavItem navData={{ path: "/", nav: "DSA Sheet", icon: <LuFileSpreadsheet className='text-2xl' /> }} isChecked={isChecked} />
                        <NavItem navData={{ path: "/", nav: "Tests", icon: <PiExam className='text-2xl' /> }} isChecked={isChecked} />
                        <NavItem navData={{ path: "/", nav: "Assignments", icon: <MdOutlineAssignment className='text-2xl' /> }} isChecked={isChecked} />

                        <NavItem navData={{ path: "/", nav: "Coding Plateform", icon: <FaCode className='text-2xl' /> }} isChecked={isChecked} />
                        {/* <NavItem  navData={{}} isChecked={isChecked} /> */}


                    </ul>


                </div>


            </div>
        </div>
    )
}

function NavItem({ navData, isChecked }) {
    return (
        <li><NavLink to={navData.path } className={({ isActive }) => `${isActive ? ' bg-blue-500' : ''} flex w-full items-center  gap-4 p-3 rounded-sm hover:bg-blue-500 ${!isChecked && 'justify-center'}  `} >{navData.icon}<span className={isChecked ? 'block' : 'hidden'} >{navData.nav}</span></NavLink></li>
    )
}

export default SideHeader;