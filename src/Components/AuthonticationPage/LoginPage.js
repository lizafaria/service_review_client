import React from 'react';
import logincaracter from '../../Images/5186395-ai (2).svg'
import plantlogin from '../../Images/5186395-ai (3).svg'
import '../Style/login.css'
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleSigninbtn from './GoogleSigninbtn';
import auth from '../../Firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import useToken from '../../hooks/usueToken';
import LoadingScreen from '../SharedPageSection/LoadingScreen';


const LoginPage = () => {


    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user)


    
     




      const varify = user?.emailVerified || user?.providerId;
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if(loading){
        return <LoadingScreen></LoadingScreen>
    }
     
    const loginhandle =async(e)=>{
       
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       await signInWithEmailAndPassword(email, password)
      
       
    }
    if(varify){
        navigate('/verify')
    }
    if(token){
        navigate(from, { replace: true })
     }



    return (
        <div className='container mx-auto'>
            <div className='login-section flex justify-center items-center pt-5 mx-auto relative' >
                <div className=' w-11/12  h-[530px] bg-green-200 lg:w-3/12'>
                    <h1 className='text-center text-3xl mt-11 mb-9 text-gray-700 font-semibold'>Welcome back</h1>
                    <p className=' ml-9 font-semibold text-md text-gray-800'>Please login to your account</p>
                    <p className='ml-9 text-red-500'>{error?.message}</p>
                   
                    <form onSubmit={loginhandle}  className='flex justify-center items-center mt-5'>
                    
                        <div className='w-10/12'>
                            <label className='text-base pt-2 text-gray-700' htmlFor="email">Email address:</label>

                            <input className='block  w-full h-9 rounded bg-gray-100' type="email" name="email" id="email" required/>
                            <label className='text-base pt-2 text-gray-700' htmlFor="password">Password :</label>
                            <input className='block  w-full h-9 rounded bg-gray-100' type="password" name="password" id="password" required/>

                            
                            <input className=' mt-5 w-full bg-green-400 py-1 text-white text-2xl rounded' type="submit" value="Login" />
                            <div className='flex justify-end mt-2 text-gray-700'><p>Forget password?</p></div>
                        </div>
                    
                    </form>
                    <div className='flex w-10/12 mx-auto items-center '>
                        <div className='w-full  border-b border-gray-700'></div>
                        <p className='px-5'>Or</p>
                        <div className='w-full  border-b  border-gray-700'></div>
                    </div>
                    <GoogleSigninbtn></GoogleSigninbtn>
                    <div className='w-10/12 mx-auto mt-2'>
                        <p>Don't have an account?<span className='text-blue-400 pl-0.5 underline cursor-pointer' onClick={() => navigate('/register')} >create account</span></p>
                    </div>





                </div>

                <div className='absolute bottom-[75px] left-96 hidden lg:block'>
                    <img className='w-full h-60 ' src={logincaracter} alt="" />
                </div>
                <div className='absolute bottom-[68px]  right-[16%] w-3/12 hidden lg:block'>
                    <img className='w-full ' src={plantlogin} alt="" />
                </div>
                
            </div>
            
        </div>
    );
};

export default LoginPage;