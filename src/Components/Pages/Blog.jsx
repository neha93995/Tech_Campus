import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


import { Button1 } from "../LayOuts/Buttons";
import HomeLayout from "../LayOuts/HomeLayout";


import { FaArrowLeft } from "react-icons/fa";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { getAllBlogs, getBlogImages, getBlogsByTopic } from "../API/ApiService";


function Blog(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const item = location.state.item;
    const [blogs, setBlogs] = useState([]);
    

    useEffect(() => {
        getBlogs();
    }, [])


    const getBlogs = () => {

        if (item.title.toLowerCase() == 'all blogs') {
            getAllBlogs()
                .then((res) => {
                    setBlogs(res.data);
                })
                .catch((err) => console.log(err));
        }
        else{
            getBlogsByTopic(item.id)
            .then((res)=>{
                setBlogs(res.data)
                console.log("-----------------------------------",res.data)
            })
            .catch((err)=>console.log(err));
        }

    }
    console.log(item);


    return (
        <HomeLayout>
            <div className="p-5 relative" >

                <div >
                    <Button1 onClick={() => navigate(-1)}><FaArrowLeft /></Button1>
                </div>

                <div className="py-5 flex flex-col items-center gap-10 overflow-y-auto  h-[80vh] snap-y snap-mandatory ">
                    {/* --------------------------card---------------------------- */}
                    {
                        blogs.map((item, index) => {
                            return (
                                <BlogCard item={item} key={index} />
                            )
                        })
                    }



                </div>

            </div>
        </HomeLayout>
    )
}

export default Blog;


function BlogCard({ item }) {
    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const [viewImage, setViewImage] = useState(false);
    const [images, setImages] = useState([]);


    useEffect(() => {
        getImagesOfBlog();
    }, [])

    const getImagesOfBlog = () => {
        getBlogImages(item.id)
            .then((res) => {
                setImages(res.data);
            })
            .catch((err) => console.log(err));
    }


    const handleDislike = () => {
        setLike(false);
        setDisLike(true);
    };

    const handleLike = () => {
        setLike(true);
        setDisLike(false);
    };



    return (
        <div className="w-[40%] border rounded-md shadow-lg shadow-white/5 snap-center">
            <div className=" w-full object-contain rounded-md overflow-hidden">


                {/* ------------------blog images carousel------------------ */}
                <div className="w-full h-64 carousel ">
                    {
                        images.map((item, index) => {
                            return (
                                <div className="carousel-item w-full" key={index}>
                                    <img src={item.image} className="w-full" alt="Tailwind CSS Carousel component" />
                                </div>
                            )
                        })
                    }
                    <div className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h1 className="text-2xl mb-3 font-bold">{item.title}</h1>
                <p>{item.content}</p>
            </div>
            <div className="p-5 flex justify-between items-center">
                <div>{item.createAt}</div>
                <div className="flex gap-3 items-center text-xl">
                    <BiSolidLike onClick={handleLike} className={like ? 'text-red-600' : ''} />
                    <BiSolidDislike onClick={handleDislike} className={disLike ? 'text-red-600' : ''} />
                </div>
            </div>
        </div>
    );
}
