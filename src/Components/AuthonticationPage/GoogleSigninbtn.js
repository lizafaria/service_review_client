import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGoogle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import useToken from '../../hooks/usueToken';
const GoogleSigninbtn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token]= useToken(user)

    const navigate = useNavigate()
    const varify = user?.emailVerified || user?.providerId;
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const googlesigninHandle =()=>{
        signInWithGoogle()
    }
    if(varify){
        navigate('/verify')
    }
    if(token){
        navigate(from, { replace: true })
     }
   
    return (
        <div onClick={googlesigninHandle} className='w-10/12 cursor-pointer mt-3 mx-auto flex border rounded border-green-900 items-center justify-center'>
        <p className='flex items-center py-1 text-xl text-gray-900'> <FaGoogle/> <span className='pl-2'>Sign in with google</span> </p>
    </div>
    );
};

export default GoogleSigninbtn;