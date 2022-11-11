import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import LoadingScreen from '../SharedPageSection/LoadingScreen';
import ManageCard from '../ManagePage.js/ManageCard';

const Myitems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myitems,setMyitems]=useState([])
    const navigate = useNavigate()
   
    useEffect(()=>{
       
        const getMyitems=async()=>{
            const email =await user.email;
          
            const url = `https://guarded-dusk-72997.herokuapp.com/myitem?email=${email}`
        try {
            const {data} = await axios.get(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyitems(data)
        } catch (error) {
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403 || error.response.status === 0) {
                signOut(auth);
                navigate('/login')
            }
        }
            
        }
        getMyitems();
    },[user])


    const deleteHandle =(id)=>{
        console.log(id);
        fetch(`https://guarded-dusk-72997.herokuapp.com/remove/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            const confarm = window.confirm('Delete this item')
            if (confarm) {
                if(data.deletedCount>0){
                    const rest = myitems.filter(item => item._id !==id)
                    setMyitems(rest)
                }
            }
            
        })
        
}
    if (!user) {
        navigate('/login')
    }
    if(loading){
        return <LoadingScreen></LoadingScreen>
    }
    return (
        <div>
         <h1 className='text-2xl font-semibold text-center mt-5'> my total items: {myitems?.length}</h1>
         <div className='container flex justify-end'>
             {
                user.displayName? <p><span className='font-semibold'>name:</span> {user?.displayName} </p> : <p><span className='font-semibold'></span>Email: {user?.email} </p>
         }
        
         </div>

          {
            myitems.map(item => <ManageCard item={item} key={item._id} deleteHandle={deleteHandle}></ManageCard>)  
          }
        </div>
    );
};

export default Myitems;