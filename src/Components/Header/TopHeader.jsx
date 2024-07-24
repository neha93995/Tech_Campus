import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/tech_campus_logo.png'
import { FaMoon, FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import './TopHeader.css';


function TopHeader({type}) {

    const authContext = useContext(AuthContext);
    const navigate = useNavigate();



    const handleLogOut = () => {
        authContext.setIsLogin(() => false);
        navigate("/");
    }


    return (
        <div className="sticky  top-0 left-0 right-0 h-14 p-2 px-16 shadow-xl z-50 bg-base-100">

            <div className='flex justify-between items-center'>
                {/*----------------- login user image */}
                
                    <div className="w-24 p-[2px]">
                {
                    type==="1" &&
                    <Link to='/'><img src={logo} alt="logo" className='w-40 m-auto ' /></Link>
                }
                </div>

                <div className='flex'>
                    {/* -------------------- Dark/Light Mode ------------------  */}
                    {/* <button className='border border-blue-600  hover:bg-blue-600 px-2 font-bold  text-blue-600 hover:text-white  rounded-lg mx-4 '><FaMoon className='text-lg'/> </button> */}
                    {
                        authContext.isLogin ?
                            
                            <div className="dropdown dropdown-hover dropdown-end  p-1 rounded-md ">
                            <div tabIndex={0} role="button" className=" w-10 h-10 rounded-full p-1  border">
                                <img src={ authContext.user.avatar || `https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg`} className="rounded-full" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu  p-2 w-36  bg-base-200 text-white border border-blue-600 rounded-lg">
                              <li><Link to='/profile'> Profile <CgProfile/></Link></li>
                              <li onClick={handleLogOut}><a> Sign out <FaSignOutAlt/> </a></li>
                            </ul>
                          </div>
                            :
                            <Link to={'/login'} className='border py-2 px-5 bg-blue-600 text-xs font-bold text-white  rounded-lg '>login</Link>
                    }

                </div>
            </div>
        </div>
    )
}


export default TopHeader;