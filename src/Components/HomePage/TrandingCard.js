import React from 'react';

const TrandingCard = ({ book}) => {
    const {_id, image,title,sell,price,supplierName,discribtion}= book
    return (
        <div className='flex w-11/12 m-2 bg-gray-100 px-11 py-2 rounded'>
            <div className='w-5/12 mx-auto'>
                <img className='w-11/12 h-72 rounded-md' src={image} alt="" />
            </div>
            <div className='w-6/12 flex justify-center items-center'>
               <div className='space-y-2'>
               <h1 className='font-semibold'>{title}</h1>
                
                <p className='text-gray-600'>{supplierName}</p>
                <p>{discribtion.slice(0,100)}...</p>
                <p className='text-2xl text-basic'>${price}</p>
               </div>

            </div>

        </div>
    );
};

export default TrandingCard;