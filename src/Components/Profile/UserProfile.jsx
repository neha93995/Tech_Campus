import HomeLayout from "../LayOuts/HomeLayout";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGraduationCap, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiPencilSimpleFill } from "react-icons/pi";
import './UserProfile.css'
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { getAllTopics, getUserEducationInfo, getUserPersonalInfo, getUserSkills, getUserSocialLinks } from "../API/ApiService";

function UserProfile() {

    const authContext = useContext(AuthContext);
    const user = authContext.user;

    const [personalData, setPersonalData] = useState({
        fullname:user.username ||"--" ,
        email:user.email || "--",
        rank:"00",
        description:"--",
        location:"--",
        totalPoints:"00",
        difficulty:{hard:22, medium:66, easy:90},
        avatar:"https://t3.ftcdn.net/jpg/01/99/95/36/360_F_199953658_lzMYuyHVYFiMynfiMU8ZXquUC3crgUtH.jpg"

    })

    const [socialData, setSocialData]=useState({
        github:"--",
        linkedin:"--",

    })

    const [educaitonData, setEducationData] = useState({
        collage:"--",
    })

    const [skillsData, setSkillsData] = useState([])

    const [topicsCovered, setTopicsCovered]= useState([]);



    useEffect(()=>{
        
        getAllUserData();
    },[])
    
    const getAllUserData=()=>{
        
        getPersonalInfo();
        getEducationInfo();
        getSocialInfo();
        getSkillsInfo();
        getAllTopicsInfo();
    }
    

    const getPersonalInfo = async()=>{
        await getUserPersonalInfo(authContext.user.id)
        .then((res)=>
            {
                const data = res.data;
                setPersonalData({
                    ...personalData,
                    fullname:data.fullname,
                    description:data.description,
                    location:data.location,
                    avatar:data.avatar

                })
            }
        )
        .catch((err)=>console.log(err));
    }

    const  getEducationInfo= async()=>{
        await getUserEducationInfo(authContext.user.id)
        .then((res)=>
            {
                const data = res.data[0];
                const collage = data.collage
                if(res.data!=null)
                {
                    setEducationData(()=>({
                        ...educaitonData,
                        collage:collage
                    }))
                } 
            }
        )
        .catch((err)=>console.log(err));
    }

    const getSocialInfo=async()=>{
        
        await getUserSocialLinks(authContext.user.id)
        .then((res)=>{
            const data = res.data;
            const newObj={}
            for( let item of data )
            {
                let plateform = item.plateform;
                let url = item.url;
                newObj[plateform]=url
                
            }
            setSocialData(newObj)
            })

        .catch((err)=>console.log(err));
    }

    const getSkillsInfo= async()=>{
        await getUserSkills(authContext.user.id)
        .then(res=>{
            const  newArr=[];
            for(let item of res.data)
            {
                newArr.push(item.skill_name);
            }
            setSkillsData(newArr);
        })
        .catch((err)=>console.log(err))
    }

    const getAllTopicsInfo=()=>{
        getAllTopics()
        .then((res)=>{
            setTopicsCovered(res.data);
        })
        .catch((err)=>console.log(err))
    }

    return (
        <HomeLayout>
            <div className="grid p-5 grid-cols-6 gap-3 text-white">
                <div className="h-full border col-span-2 p-4 ">
                    <div>
                        <div className="flex gap-4">
                            <div>
                                <img src={personalData.avatar} className="inline w-28 h-28 border-2 border-blue-600 rounded-md " />       
                            </div>
                            <div className=" flex flex-col justify-between">

                                <div>
                                    <h1 className="text-xl">{personalData.fullname}</h1>
                                    <p className="text-sm">{personalData.email}</p>
                                </div>
                                <div>Rank: {personalData.rank} </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------profile description-------------- */}
                    <p className="my-4">{personalData.description}</p>

                    {/* -------------Edit profile------------------- */}
                    <Link  to='/profile/edit-profile' className='border block py-2 px-5  my-2  w-full text-center  bg-blue-600/50 text-xs font-bold text-white  rounded-lg '>Edit Profile</Link>
                    
                    
                    <ul className="leading-9 text-sm my-4">
                        <li className="flex gap-3   items-center " ><MdOutlineLocationOn /> {personalData.location}</li>
                        <li className="flex gap-3  overflow-hidden items-center " ><FaGraduationCap />{educaitonData.collage}</li>
                        <li className="flex gap-3  overflow-hidden items-center " ><FaGithub />{socialData.github}</li>
                        <li className="flex gap-3  overflow-hidden items-center " ><FaLinkedinIn />{socialData.linkedin}</li>
                    </ul>

                    <hr />


                    <div className="my-5">
                        <h2 className="my-4 text-lg">Skills</h2>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {
                                skillsData.map((skill,index)=>{
                                    return (
                                        <button className="bg-white/10  rounded-md py-1 px-4" key={index}>{skill}</button>
                                    )
                                })
                            }
                            <button className="bg-white/10  rounded-md py-1 px-4">Basic Of Computers</button>
                            <button className="bg-white/10  rounded-md py-1 px-4">Data Structure & Algorithm</button>
                            <button className="bg-white/10  rounded-md py-1 px-4">DBMS</button>
                        </div>
                    </div>
                </div>


                <div className="h-full  w-full  col-span-4">


                    <div className=" grid grid-cols-3 gap-3">
                        <div className="grid grid-cols-3 col-span-2 gap-6 border p-5">
                            <p className="col-span-3 " >Progress bar</p>
                            <div className="flex flex-col items-center">
                                <div className="radial-progress text-blue-500 p-5 my-3" style={{ "--value": personalData.difficulty.easy }} role="progressbar">{personalData.difficulty.easy}%</div>
                                <p>easy</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="radial-progress text-blue-500 p-5 my-3" style={{ "--value": personalData.difficulty.medium }} role="progressbar">{personalData.difficulty.medium}%</div>
                                <p>Medium</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="radial-progress text-blue-500 p-5 my-3" style={{ "--value": personalData.difficulty.hard }} role="progressbar">{personalData.difficulty.hard}%</div>
                                <p>hard</p>
                            </div>

                        </div>


                        <div className="border p-5">
                            <p>Total Points</p>
                            <div className="text-center my-8 text-6xl">
                                <span className="countdown font-mono text-7xl border-4 rounded-md border-blue-500 p-3">
                                    <span style={{ "--value": 94 }}></span>
                                </span>
                            </div>
                        </div>

                        <div className="border col-span-3 p-5">
                            <h2 className="">Topic covered</h2>
                            <ul className="grid grid-cols-4 gap-5 my-7  text-sm">

                                {
                                    topicsCovered.map((item, index)=>{
                                        return(
                                            <li key={item.id} className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">{item.title}</li>
                                        )
                                    })
                                }
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">HTML</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">CSS</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Tailwind CSS</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Heap</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Binary Search </li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Linked List</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Arrays</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Trees</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Computer network</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Operating system</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">SQL</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">MongoDB</li>
                                <li className="px-4 py-1 w-full bg-white/10  flex justify-between items-center gap-3 rounded-md">Database </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}
export default UserProfile;