import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Images/tech_campus_logo_white.png';
import { GetAllUsers, getUserPersonalInfo, login } from '../API/ApiService';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

export default function Login()
{
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const [loginData, setLoginData] = useState({email:"", password:""});
    const [errorMessage, setErrorMessage] = useState("");
    const handleLoginData=(e)=>{
        setLoginData((loginData)=>(
            {
                ...loginData,
                [e.target.name]:e.target.value
            }
        ))
    }

    const handleLogin = () => 
    {
        login(loginData)
        .then(async(response)=> {
            const data = response.data;
            if(data)
            {
                let avatar =""; 
                await getUserPersonalInfo(response.data.id)
                .then((res2)=>
                    {
                        avatar = res2.data.avatar;
                    }
                )
                .catch((err)=>console.log(err));
                
                const result = {
                    ...data,
                    password:"",
                    avatar:avatar
                }
                
                authContext.setUser(result);
                authContext.setIsLogin(true);
                navigate('/');
            } else{
                setErrorMessage("Wrong email or password!")
            }
            
        })
        .catch(error => {
            setErrorMessage("Something went wrong! try again ")
            console.error('Error:', error); // Handle error
        });



    }

    return(
        <>
            <section className="w-[100vw] h-[100vh] grid place-content-center text-white text-center">
                <div className="flex border rounded-lg overflow-hidden h-96">
                    <div className="bg-blue-600 p-5  grid place-content-center ">
                        <div>
                            <Link to='/'><img src={logo} alt="logo" className='w-40 m-auto ' /></Link>
                            <p className='my-8 text-xs'>Login Using Social Media to get quick access</p>

                            <div className='flex flex-col gap-2 text-sm'>
                                <div className='py-2 px-7 border  rounded bg-slate-800'>Signin with Linkedin</div>
                                <div className='py-2 px-7 border  rounded bg-slate-800'>Signin with Github</div>
                                <div className='py-2 px-7 border  rounded bg-slate-800'>Signin with Google</div>
                            </div>
                        </div>
                    </div>    
                    <div className=' py-5 px-16'>

                        <div >
                            <div className='text-center my-6 mx-3'>
                                <h1 className='text-2xl font-bold '>Login to your accound</h1>
                                <p className='text-xs'>Don't have an account? <Link to='/signup' className='text-blue-600' >Sign up</Link></p>
                            </div>

                            <div className='flex flex-col gap-2 my-10'>
                                <input onChange={handleLoginData} value={loginData.email} name='email' className='bg-transparent outline-none border shadow-sm p-2 rounded' type='text' placeholder='Email Address'/>
                                <input onChange={handleLoginData} value={loginData.password} name='password' className='bg-transparent outline-none border shadow-sm p-2 rounded' type='password'  placeholder='Password'/>
                            </div>
                            <button onClick={handleLogin} className='py-2 px-7 border bg-blue-600 rounded'>Login with Gmail</button>
                            <div className='w-full text-red-700 font-semibold my-3 '>{errorMessage}</div>
                        </div>    
                    </div>    
                </div>
            </section>

        
        </>
    )
}