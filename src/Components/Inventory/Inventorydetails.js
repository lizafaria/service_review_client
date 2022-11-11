import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoadingScreen from '../SharedPageSection/LoadingScreen';

const Inventorydetails = () => {
    const { id } = useParams();
    const [details, setDetails]= useState({})
    const [ quantity , setQuantity]= useState(0)
    const [sell ,setSEll] = useState(0)
    
   
  useEffect(()=>{
    const url =`https://guarded-dusk-72997.herokuapp.com/inventory/${id}`
   
     
    fetch(url)
   .then(res=>res.json())
   .then(data=>{
       setDetails(data)
       setQuantity(data.quantity);
       setSEll(data.sell);
       console.log(data);
    
   })
  },[quantity])
  
      
 
  

    const deleverdbtnHandle =()=>{
        let newquantity;
        let sold = 1
        
        if (sell >= 1) {
            
            sold  = parseInt(details.sell) + 1
        }
        
        if (quantity > 0) {
            
         newquantity= parseInt(details.quantity) - 1
        
         setQuantity(newquantity)
        
        const stingNewquantity = newquantity + ''
        const stingNewsell = sold + ''

        const updataitem = {
            quantity: stingNewquantity,
            sell : stingNewsell
        }
         const url =`https://guarded-dusk-72997.herokuapp.com/delivered/${id}`
        fetch(url,{
       
             method: 'PUT',
             headers: { 
                 'Content-Type': 'application/json',
                
             },
             body: JSON.stringify(updataitem)
        
        })
        .then(res=> res.json())
        .then(data=>{
         //    console.log(data)
        })
        
        
       
    }
        
    }
    const inputquntity = useRef();
    const restockHandle =()=>{
        let restackValue = parseInt(inputquntity.current.value);
        let restackquantity;
        if (quantity < 1) {
            restackquantity=  restackValue;
        }

     if (quantity > 0) {
         restackquantity= parseInt(details.quantity) + restackValue
        
       
     }
        const stingNewquantity = restackquantity + ''
        const url =`https://guarded-dusk-72997.herokuapp.com/delivered/${id}`
        fetch(url,{
       
             method: 'PUT',
             headers: { 
                 'Content-Type': 'application/json',
                
             },
             body: JSON.stringify({quantity: stingNewquantity})
        
        })
        .then(res=> res.json())
        .then(data=>{
         
        })
        setQuantity(restackquantity)
        toast('Quantity added')
        
         inputquntity.current.value = ''
    }
    let quantities
     if (quantity === '0') {
        quantities = "Out of stack"
     }else{
        quantities = quantity
     }

    
    return (
        <div>
            <div className='grid grid-cols-1 container md:grid-cols-2 '>
            <div className='flex justify-center mt-5'>
                <img className='w-8/12 h-auto max-h-[650px]' src={details?.image} alt="" />
            </div>
            <div className='pl-5 mt-5  flex  items-center'>


            <div className='space-y-5'>
            <h1 className='text-2xl font-semibold text-gray-900'>{details?.title}</h1>
            <p >supplier name : {details?.supplierName}</p>
            <p >Availability :<span className='bg-gray-300 px-3 py-2 rounded-full mx-2 font-semibold'> {quantities} </span> <span className=' font-semibold'>in stack</span></p>
            <p>Sold :  {details?.sell}</p>
            <p className='text-2xl font-semibold  '>Price : <span className='text-emerald-600'>${details?.price}</span> </p>
            <div className=' w-10/12'>
                <p>{details?.discribtion}</p>
            </div>
            
            <div>
            <button onClick={deleverdbtnHandle} className='border px-5 py-2 bg-emerald-600 text-white'>Delivered</button>
            <a className='px-5 py-2 border border-emerald-600 ml-7 text-emerald-600' href="#restack">Restack</a>
            </div>

            </div>
            </div>

        </div>
        <div className='bg-red-50 h-72 my-44 flex justify-center items-center'>
        <div className=' w-full mx-auto rounded bg-gray-400 p-5 flex justify-center items-center md:w-8/12 lg:w-6/12' id={`restack`}>
            <input ref={inputquntity}  className='rounded-l bg-gray-100 h-11 w-10/12 px-7' placeholder='restack quantity number....' type="number" name="restock" id="" />
            <button onClick={restockHandle} className='px-5 py-1.5 text-white text-2xl bg-emerald-600 rounded-r'>Restack</button>
        </div>
        </div>
        
        </div>
    );
};

export default Inventorydetails;