import React, { useEffect, useState } from 'react';
import ManageCard from './ManageCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ManagePage = () => {
    const navigate = useNavigate()
    const [allitems ,setallitems]=useState([])
    useEffect(()=>{
        axios.get('https://guarded-dusk-72997.herokuapp.com/all')
        .then(Response=>{
            const items =(Response.data);
            setallitems(items)
        })
    },[allitems])
    const additembtnHandle = ()=>{
        navigate('/add')
    }
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
                        const rest = allitems.filter(item => item._id !==id)
                        setallitems(rest)
                    }
                }
                
            })
            
    }
    return (
        <div>
           <div className='flex justify-center mt-5'> <button onClick={additembtnHandle} className='rounded w-6/12 max-w-[500px] min-w-[100px]  py-2 font-semibold text-gray-100 bg-green-400'>Add item</button></div>
            {
                allitems.map(item => <ManageCard item={item} key={item._id} deleteHandle={deleteHandle}></ManageCard>)
            }
        
        </div>
    );
};

export default ManagePage;