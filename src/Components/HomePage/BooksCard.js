import React from 'react';

const BooksCard = ({book,updatebtnHandle}) => {
    const {_id,title,image,price,supplierName,category,discribtion,quantity}=book;
    let quantities
    if (quantity === '0') {
       quantities = "Out of stack"
    }else{
       quantities = quantity
    }
   
    return (
        <div className=' flex justify-center'>
           
           <div className='p-5  rounded shadow-lg bg-gray-50 max-w-[400px] h-[700px '>
                <div className='h-96 mt-5'>
                    <img className=' h-full  rounded-r-lg mx-auto' src={image} alt="" />
                </div>
                <div className='space-y-2 mt-3'>
                    <small className='text-gray-50 px-5 py-1 bg-gray-300 rounded-md'>{category}</small>
                    <h1 className='text-xl font-semibold text-gray-900'>{title}</h1>
                    <p className='text-gray-600'>supplier name :<span className='text-gray-800'>{supplierName}</span></p>
                    <p className='text-gray-800'>{discribtion.slice(0,50)}....</p>
                   <div className='flex justify-between'>
                   <h2 className='text-basic text-2xl font-semibold '>${price}</h2>
                   <p className='text-gray-800 font-semibold'>Quantity : {quantities}</p>
                   </div>
                   <div className='flex justify-end'> <button onClick={()=>updatebtnHandle(_id)} className='px-7 py-1.5 text-xl bg-green-600 text-gray-200 font-semibold rounded-3xl'>Updata</button></div>

                </div>


           </div>
        </div>
    );
};

export default BooksCard;