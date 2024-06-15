

import { useEffect, useState } from "react";
import HomeLayout from "../LayOuts/HomeLayout";

import {CiSearch} from 'react-icons/ci';
import { IoIosArrowForward } from "react-icons/io";
import { getAllTopics, getTopicsByStringContaining } from "../API/ApiService";
import { Link } from "react-router-dom";

function BlogPage()
{
    const [topics, setTopics] = useState([]); 

    useEffect(()=>{
        getAllTopicsInfo();
    },[])

    
    const getAllTopicsInfo=()=>{
        getAllTopics()
        .then((res)=>{
            setTopics(res.data);
        })
        .catch((err)=>console.log(err))
    }


    const handleSearching=async(e)=>{
        const query = e.target.value;
         getTopicsByStringContaining(query)
         .then((res)=>{
             setTopics(res.data);
         })
         .catch((err)=>console.log(err));
        
    }

    

    return (
        <HomeLayout>

        <div className="p-5 text-white">
        <div className="flex justify-between items-center">
            <Link to="/blog-page/create-blog" className="bg-transparent py-2 px-5 rounded-md hover:bg-blue-600 border border-blue-600 flex gap-3 items-center text-sm" > Create Your Blog <IoIosArrowForward/></Link>

            {/* ----------------------search topics --------------------- */}
            <div  className={`max-[640px]:hidden w-[30%]  border rounded-md  border-blue-500 px-4 focus:border-sky-800 `}>
                <CiSearch className="inline text-lg " /> 
                <input type="text" id="serach-blog" onChange={handleSearching} placeholder="Search" className="bg-transparent outline-none px-4   py-2 text-sm   " />
            </div>

        </div>

        <div  className="grid grid-cols-2 gap-8 my-10">
            <Card item={{title:"All Blogs",description:"Mixture of all blogs"}} />
            {
                topics.map((item, index)=>{
                    return(
                       <Card item={item} key={index} />
                    )
                })
            }
        </div>
        </div>

        </HomeLayout>
    )
}

export default BlogPage;


function Card({item}) {
    return (
        <div className=" card shadow-lg shadow-white/5 rounded-md  overflow-hidden relative bg-white/5 text-white">
            <div className="group">
                <div className="bg-blue-600 h-[3px] transition-all group-hover:h-48 absolute top-0 bottom-0 left-0 right-0  ">

                </div>

                <div className=" px-5 py-8 h-48 flex flex-col justify-between group-hover:bg-transparent  bg-transparent relative z-10">
                    <div>
                        <h2 className="w-1/2  font-semibold text-xl ">{item.title} </h2>
                        <p className="text-sm">{item.description}</p>
                    </div>
                        
                    <div className="text-right">
                        <Link to={{pathname:`/blog-page/blogs`, search :item.title}} state={{item}}  className=" w-28 border px-5 py-1 rounded-md bg-blue-600  group-hover:bg-base-100 flex gap-5 items-center">view <IoIosArrowForward className="transition-transform duration-200 group-hover:translate-x-3 "/> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

