import { useNavigate } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";


import { Button1, Button2, Button3 } from "../LayOuts/Buttons";


import { FaArrowLeft ,FaCloudUploadAlt} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { getAllTopics, postBlog } from "../API/ApiService";
import { AuthContext } from "../../Context/AuthContext";


function CreateBlog() {

    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [remainingWords, setRemainingWords] = useState(1000);
    const [topics , setTopics] = useState([]);
    const authContext = useContext(AuthContext);
    const [isPreviewImage, setIsPreviewImage] = useState(false);

    const [blogs, setBlogs] = useState({
        content:"",
        title:"",
        userId:0,
        images:[],
        topicId:0
    })

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


    const getImage=(e)=> {
        e.preventDefault();
    const files = e.target.files;
    const arr = [];
    const images=[];

    const readFiles = async () => {
        console.log(files.length)
        for (let i = 0; i < files.length; i++) {
            const uploadedImage = files[i];
            images.push(uploadedImage);
            const fileReader = new FileReader();

            // Create a promise to handle the async readAsDataURL
            const fileReadPromise = new Promise((resolve, reject) => {
                fileReader.onload = () => resolve(fileReader.result);
                fileReader.onerror = reject;
                fileReader.readAsDataURL(uploadedImage);
            });

            try {
                const result = await fileReadPromise;
                arr.push(result);
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }

    };

    console.log(files)
    setBlogs(prevInfo => ({
            ...prevInfo,
            images: images
        }));
    setPreviewImage(arr);

    readFiles();
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        getImage(e);
    };

    const handlBlogInput=(e)=>{
        setBlogs({
            ...blogs,
            [e.target.name]:e.target.value
        })

        if(e.target.name==="content")
        {
            let value = e.target.value;
            setRemainingWords(e.target.maxLength-value.length);
        }
    }

    
    const handleBlogSubmit =async()=>{

        const formData = new FormData();
        
        formData.append('title',blogs.title);
        formData.append('content',blogs.content);
        formData.append('userId',1);
        formData.append('topicId',blogs.topicId)

        for(let image of blogs.images)
        {
            console.log(image)
            formData.append("images",image);
        }

        console.log(blogs)
        
            await postBlog(formData)
            .then((res)=>{
                console.log("--------------------------- succesfull",res)
                if(res.data)
                {
                        // navigate("/blog-page");
                }
                
            })
            .catch((err)=>console.log(err));

       
    }


    return (
        <HomeLayout>
            <div className="p-5 text-white  ">

                <div className="flex justify-between items-center">
                    <Button1 onClick={() => navigate(-1)}><FaArrowLeft /></Button1>
                    <Button1 onClick={handleBlogSubmit} >Save</Button1>
                </div>

                {/* ---------------------------------blog date------- */}
                <div className="my-5 flex justify-between gap-20 border p-5 ">
                    <div className="w-1/2 ">
                        <div> 
                            <select className="bg-base-100 p-2 outline-none border rounded-md w-full " onChange={handlBlogInput} name="topicId" >
                                <option value={0}>Select your Topic</option>
                                {
                                    topics.map((item, index)=>{
                                        return(
                                            <option key={index} value={item.id}>{item.title}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="my-5">
                            <h1 className="text-lg ">Write Title</h1>
                            <input type="text" className="outline-none p-2 bg-transparent border rounded-lg w-full"  placeholder="Title..." name="title" onChange={handlBlogInput} />
                        </div>

                        <div className="my-3">
                            {/* ----------image upload--------------- */}
                            <div className="flex flex-col gap-3 w-full">
                                    <div className="flex justify-between"> <h1>Upload your image</h1> <Button3 onClick={()=>setIsPreviewImage(true)}>preview images </Button3></div>
                                    <label
                                        htmlFor="avatar"
                                        className={`cursor-pointer border border-dashed rounded-md h-24 p-4 w-full bg-white/5 ${isDragging ? 'bg-blue-200' : ''}`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                    >
                                        <div className="flex flex-col justify-center items-center text-gray-500">
                                            <FaCloudUploadAlt />
                                            {isDragging ? <p className="text-center ">Drop the file here</p> : <p className="text-center ">Drag and drop an image, or click to select</p>}
                                            <p className="text-xs ">.jpg, .jpeg, .png, .svg</p>
                                        </div>
                                    </label>
                                    <input className="hidden" type="file" id="avatar" multiple  accept=".jpg, .jpeg, .png, .svg" name="avatar" onChange={getImage} />
                                </div>
                        </div>
                        <div>
                            <h1>Write Your Content Here ({remainingWords})</h1>
                            <div>
                                <textarea  className="border p-5 bg-transparent outline-none w-full"  rows={4} cols={100} placeholder="Write your content here......." name="content" onChange={handlBlogInput} maxLength={1000} />
                            </div>
                        </div>
                    </div>
                    {/* -----------------------------preview image--------------------- */}
                    
                    <div className="w-1/2">
                        <div className="grid grid-cols-3 gap-5">
                        {
                            isPreviewImage &&
                            previewImage.map((item,index)=>{
                                return (
                                    <img src={item} key={index} className=" w-full h-full " />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}


export default CreateBlog;