
import React, { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const ManageCard = ({item,deleteHandle}) => {
    const {_id,title,email,image,price,supplierName}=item;
    return (
        <div>
        <div class="flex relative my-5   mx-auto  items-center  rounded-lg  shadow-md md:flex-row md:max-w-2xl  border-gray-700 bg-gray-200 ">
<img class=" h-28 m-2 w-auto rounded-r-lg md:h-20" src={image} alt=""/>
<div class=" block justify-between leading-normal w-8/12 md:flex">
   <div>
   <h5 class="  font-bold tracking-tight  text-gray-700 ">{title.slice(0,29)}..</h5>
    <p class=" text-sm  text-gray-400">By <span>{email.slice(0,20)}...</span></p>
    
   </div>
   <div>
       <p className='text-gray-500 text-sm md:text-base'>price: ${price} </p>
       <p className='text-gray-500 text-sm md:text-base'>Supplier: {supplierName.slice(0,10)}..</p>
   </div>
    <div onClick={()=>deleteHandle(_id)} className='text-white flex items-center justify-center absolute inset-y-1/3 right-1 px-1.5 py-2 bg-gray-400 rounded-full text-xl'>
    
    <FaTrashAlt />
</div>
</div>
</div>

    </div>
    );
};

export default ManageCard;