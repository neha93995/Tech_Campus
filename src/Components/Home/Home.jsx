import Footer from "../Footer/Footer";
import TopHeader from "../Header/TopHeader";
import home_girl_img from '../../Images/Home_girl.png'
import './Home.css';


import { MdOutlineEmojiEmotions } from "react-icons/md";

function Home()
{
    return(
        <div >
        <TopHeader/>

        <div className="h-[100vh">

            <section>
                <div className="w-[80%] m-auto my-10 flex items-center justify-evenly">
                    <div>
                        <img src={home_girl_img}  alt="home girl"/>
                    </div>
                    <div className="Home_title text-5xl text-right font-bold">
                        <div ><MdOutlineEmojiEmotions className="animation_circle text-blue-600 w-10 h-10 text-sm text-center" /></div>
                        <h1>Learn The Way Of </h1>
                        <h1 className="my-3 text-blue-600 font-extrabold">LEARNING...</h1>

                        <button className="text-sm bg-blue-600 text-white  py-3 px-6 rounded-full">Create Account</button>
                    </div>
                </div> 
            </section>
        
        </div>
        <Footer/>
        </div>
    )
}


export default Home;