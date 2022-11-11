import React, { useEffect } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const VerifyWarning = () => {
  
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(
        auth
      );
    const navigate = useNavigate()
    const varify = user?.emailVerified || user?.providerData[0].providerId === 'google.com';
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
   
    if(varify){
        navigate('/home')
        console.log(user);
     }

   const sendmailhandle =async()=>{
    await sendEmailVerification();
    alert('Sent email');
   }
   console.log(user);
    return (
        <div>
            <h1 className='text-center text-3xl mt-44'>
              please  Verify your  email address
            </h1>
            <p className='text-center mt-5'>didn't find mail? <span onClick={sendmailhandle} className='text-blue-400 cursor-pointer'>resend again</span></p>
        </div>
    );
};

export default VerifyWarning;