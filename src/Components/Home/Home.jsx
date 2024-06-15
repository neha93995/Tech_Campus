import Footer from "../Footer/Footer";
import TopHeader from "../Header/TopHeader";
import home_girl_img from '../../Images/Home_girl.png';
import home_study_image from "../../Images/homepage.png"
import './Home.css';

import { IoIosArrowForward } from "react-icons/io";


import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { MdOutlineDisplaySettings, MdOutlineAssignment, MdOutlineEmojiEmotions } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaBlog, FaCode } from "react-icons/fa";
import { PiExam } from "react-icons/pi";



const data=[
    {
        title:"CS Fundamental",
        description:"CS Subjects with easy to understand guidance",
        icon:<MdOutlineDisplaySettings className="text-blue-600 group-hover:text-white"/>,
        link:"/cs-fundamental"
    },
    {
        title:"DSA Sheet",
        description:"Boost your DSA Skills",
        icon:<LuFileSpreadsheet className="text-blue-600 group-hover:text-white"/>,
        link:"/dsa-sheet"
    },
    {
        title:"Technical Blog",
        description:"Deep Dive into the technical world with technical blogs",
        icon:<FaBlog className="text-blue-600 group-hover:text-white" />,
        link:"/blog-page"
    },
    {
        title:"Tests",
        description:"Know your ability by giving tests",
        icon:<PiExam className="text-blue-600 group-hover:text-white" />,
        link:"/tests"
    },
    {
        title:"Assignments",
        description:"boost your knowledge and skills with our Assignments",
        icon:<MdOutlineAssignment className="text-blue-600 group-hover:text-white" />,
        link:"/assigments"
    },
    {
        title:"Coding plateform",
        description:"solve thousands of coding problems ",
        icon:<FaCode className="text-blue-600 group-hover:text-white" />,
        link:"/coding-plateform"
    },
]


function Home() {

    const authContext = useContext(AuthContext);
   
    return (
        <div >
            <TopHeader type={"1"} />

            <div className="">

                <section >
                    <div className="w-[80%] m-auto my-10 flex items-center justify-evenly">
                        <div className="Home_title text-5xl text-right font-bold">
                            <div ><MdOutlineEmojiEmotions className="animation_circle text-blue-600 w-10 h-10 text-sm text-center" /></div>
                            <h1>Learn The Way Of </h1>
                            <h1 className="my-3 text-blue-600 font-extrabold">LEARNING...</h1>

                            <button className="text-sm bg-blue-600 text-white  py-3 px-6 rounded-full">Create Account</button>
                        </div>
                        <div>
                            <img src={home_study_image} className="h-72" alt="home girl" />
                        </div>
                    </div>
                </section>



                <section className="w-full my-20 p-10  bg-gradient-to-r from-blue-600/20 text-white">


                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl font-semibold text-center ">Pathway to Mastery: Your All-in-One Learning Destination</h1>
                        <p className="text-sm mt-5 ">Master DSA, Explore CS Knowledge, Design Complex Systems, Hone Competitive Abilities, and Ace Your Interviews with Confidence</p>
                    </div>

                    <div className="w-[80%] m-auto  mt-20 grid grid-cols-3 gap-10">
 
                        {
                            data.map((item, index)=>{
                                return (
                                    <Card key={index} item={item} />
                                )
                            })
                        }
                       

                    </div>

                </section>


                <section className="w-[85%] m-auto my-10 text-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl font-semibold text-center ">Why Choose us?</h1>
                        <p className="text-sm mt-5 ">Master DSA, Explore CS Knowledge, Design Complex Systems, Hone Competitive Abilities, and Ace Your Interviews with Confidence</p>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    )
}


export default Home;


                       
function Card({item}) {



    return (
        <div className=" card shadow-md shadow-white/5 rounded-md  overflow-hidden relative border text-white">
            <div className="group">
                <div className="bg-blue-700/80 h-[3px] transition-all group-hover:h-full absolute top-0 bottom-0 left-0 right-0  ">

                </div>

                <div className=" px-5 py-8 flex flex-col justify-between gap-2 group-hover:bg-transparent  bg-transparent relative z-10">
                    <div className="text-4xl h-12 ">
                        {item.icon}
                    </div>
                    <div className="h-20  mb-3">
                        <h2 className="font-semibold text-xl ">{item.title} </h2>
                        <p className="text-sm">{item.description}</p>
                    </div>
                        
                    <div className="text-right">
                        <Link to={item.link}  className=" w-28 border px-5 py-1 rounded-md bg-blue-600  group-hover:bg-base-100 flex gap-5 items-center">view <IoIosArrowForward className="transition-transform duration-200 group-hover:translate-x-3 "/> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}