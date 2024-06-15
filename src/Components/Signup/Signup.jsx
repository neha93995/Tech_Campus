import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Images/tech_campus_logo_white.png';
import { useContext, useState } from 'react';
import { signup } from '../API/ApiService';
import { AuthContext } from '../../Context/AuthContext';

export default function Signup() {

    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const [errorMessage , setErrorMessage] =  useState("");

    const [registerData, setRagisterData] = useState(
        {
            email:"",
            username:"",
            mobile_no:"",
            password:""
        }
    );

    const handleSignupData=(e)=>{
        setRagisterData(
            (registerData)=>
                ({...registerData, [e.target.name] : e.target.value})
        )
    }

    const handleSignup=()=>{
      
    
        signup(registerData)
        .then(response => {
            const data = response.data;
            if(data)
            {
                authContext.setUser( {
                    ...data,
                    password:""
                });
                authContext.setIsLogin(true);
                navigate('/');

            } else{
                setErrorMessage("Email already Exist!")
            }

        })
        .catch(error => {
            setErrorMessage("Something went wrong! please try again")
            console.error('Error:', error); // Handle error
        });

    }



    return (
        <>
            <section className="w-[100vw] h-[100vh] grid place-content-center text-white text-center">
                <div className="flex border rounded-lg overflow-hidden ">
                    <div className="bg-blue-600 p-5  grid place-content-center ">
                        <div>
                            <Link to='/'><img src={logo} alt="logo" className='w-40 m-auto ' /></Link>
                            <p className='my-8 text-xs'>Signup Using Social Media to get quick access</p>

                            <div className='flex flex-col gap-2 text-sm'>
                                <div className='py-2 px-7 border  rounded bg-slate-800'>Signup with Linkedin</div>
                                <div className='py-2 px-7 border  rounded bg-slate-800'>Signup with Github</div>
                                <div className='py-2 px-7 border  rounded bg-slate-800'>Signup with Google</div>
                            </div>
                        </div>
                    </div>
                    <div className=' py-5 px-16'>

                        <div >
                            <div className='text-center my-6 mx-3'>
                                <h1 className='text-2xl font-bold '>Register Your Account</h1>
                                <p className='text-xs'>Already have an account? <Link to='/login' className='text-blue-600' >login</Link></p>
                                <p className='text-red-600 text-xs '>{errorMessage}</p>
                            </div>

                            <div className='flex flex-col gap-2 my-10'>
                                <input className='bg-transparent outline-none border shadow-sm p-2 rounded' value={registerData.username} onChange={handleSignupData} name='username' type='text' placeholder='Username' />
                                <input className='bg-transparent outline-none border shadow-sm p-2 rounded' value={registerData.moblie_no} onChange={handleSignupData} name='mobile_no' type='tel' placeholder='Mobile Number' />
                                <input className='bg-transparent outline-none border shadow-sm p-2 rounded' value={registerData.email} onChange={handleSignupData} name='email' type='text' placeholder='Email Address' />
                                <input className='bg-transparent outline-none border shadow-sm p-2 rounded' value={registerData.password} onChange={handleSignupData} name='password' type='password' placeholder='Password' />
                            </div>
                            <button onClick={handleSignup} className='py-2 px-7 border bg-blue-600 rounded'>Create Account</button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}