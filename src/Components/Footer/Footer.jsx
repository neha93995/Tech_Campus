import footer_logo from '../../Images/tech_campus_logo_white.png'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className="h-52 bg-blue-600 py-6 px-20 text-white">
                <div className='flex gap-10'>
                    <div className='w-3/12'>
                        <img src={footer_logo} alt="footer_logo" className='w-24' />
                        <p className='text-xs my-3'>The best place to learn data Structures, algorithms, most asked coding interview questions. real interview experiences free of cost.</p>
                        <ul className='flex gap-1 text-2xl '>
                            <li className='border p-1 hover:bg-white hover:text-blue-600 rounded-md'><FaLinkedinIn /></li>
                            <li className='border p-1 hover:bg-white hover:text-blue-600 rounded-md'><FaXTwitter /></li>
                            <li className='border p-1 hover:bg-white hover:text-blue-600 rounded-md'><FaInstagram /></li>
                            <li className='border p-1 hover:bg-white hover:text-blue-600 rounded-md'><FaYoutube /></li>
                        </ul>
                    </div>
                    <div className=' w-9/12 flex justify-evenly'>
                        <div>
                            <h1>ABOUT</h1>
                            <ul className='mt-3 text-xs'>
                                <li>list 1</li>
                                <li>list 2</li>
                                <li>list 3</li>
                                <li>list 4</li>
                                <li>list 5</li>
                            </ul>
                        </div>
                        <div>
                            <h1>NOTES</h1>
                            <ul  className='mt-3 text-xs'>
                                <li>list 1</li>
                                <li>list 2</li>
                                <li>list 3</li>
                                <li>list 4</li>
                                <li>list 5</li>
                            </ul>
                        </div>
                        <div>
                            <h1>TEST</h1>
                            <ul  className=' mt-3 text-xs'>
                                <li>list 1</li>
                                <li>list 2</li>
                                <li>list 3</li>
                                <li>list 4</li>
                                <li>list 5</li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div>

                </div>

            </div>
        </>
    )
}


export default Footer;