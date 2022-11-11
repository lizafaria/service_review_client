import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import caracter from '../../Images/Sign in-pana-svg.svg'
import { useNavigate } from 'react-router-dom';
import '../Style/registerpage.css'
import GoogleSigninbtn from './GoogleSigninbtn';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'
import useToken from '../../hooks/usueToken';

const Register = () => {
    const navigate = useNavigate();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)

      const varify = user?.emailVerified || user?.providerId;

      let passerror

    const registerUser =async(e)=>{
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmPassword.value;
        if (password === confirmpassword) {
            await createUserWithEmailAndPassword(email, password)
        }else{
            toast("password did not match")
            return
        }
       
        await updateProfile({ displayName });
        if(varify){
            if(token){

                navigate('/home')
            }
        }else{
            navigate('/verify')
        }
    }
    
    
    return (
        <div className=''>
            <div className='register-container flex justify-center items-center pt-5 mx-auto relative'>
                <div className=' w-11/12  h-[600px] bg-green-200 lg:w-3/12'>
                    <h1 className='text-center text-3xl mt-5 mb-5 text-gray-700 font-semibold'>Register</h1>
                    <p className='ml-9 text-red-500'>{error?.message} </p>
                   
                    <form onSubmit={registerUser} className='flex justify-center items-center mt-5'>
                     
                        <div className='w-10/12'>
                            <label className='text-base pt-2 text-gray-700' htmlFor="name">Name:</label>
                            <input className='block  w-full h-9 rounded bg-gray-100' type="text" name="name" id="" required/>

                            <label className='text-base pt-2 text-gray-700' htmlFor="email">Email address:</label>
                            <input className='block  w-full h-9 rounded bg-gray-100' type="email" name="email" id="" required/>

                            <label className='text-base pt-2 text-gray-700' htmlFor="password">Create password :</label>
                            <input className='block  w-full h-9 rounded bg-gray-100' type="password" name="password" id="" required/>
                            <label className='text-base pt-2 text-gray-700' htmlFor="confirmPassword">Confirm password :</label>
                            <input className='block  w-full h-9 rounded bg-gray-100' type="password" name="confirmPassword" id="" required/>

                            
                            <input className=' mt-5 w-full bg-green-400 py-1 text-white text-2xl rounded' type="submit" value="Register" />

                        </div>
                    
                    </form>
                    <div className='flex w-10/12 mx-auto items-center '>
                        <div className='w-full  border-b border-gray-700'></div>
                        <p className='px-5'>Or</p>
                        <div className='w-full  border-b  border-gray-700'></div>
                    </div>
                      <GoogleSigninbtn></GoogleSigninbtn>
                    <div className='w-10/12 mx-auto mt-2'>
                        <p>Already have an account?<span className='text-blue-400 pl-0.5 underline cursor-pointer' onClick={() => navigate('/login')} > sign in</span></p>
                    </div>


                </div>
                <div className='absolute bottom-0 right-96 w-2/12 hidden lg:block'>
                    <img className='caracter-image w-full' src={caracter} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;