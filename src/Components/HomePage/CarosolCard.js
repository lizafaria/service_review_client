import React from 'react';

const CarosolCard = ({image,styles,catagory,heading,text,imagefix}) => {
    return (
        <div className={`h-[700px] grid grid-cols-1 ${styles} md:grid-cols-2`}>
        <div className='flex justify-center items-center ml-5 my-5 order-2 md:order-1 '>
        <div className='space-y-5 w-10/12'>
            <div className='flex '><p className='bg-gray-100 px-4 font-semibold text-gray-500 py-2 rounded text-md '>{catagory}</p></div>
              <h1 className='text-3xl w-10/12 font-semibold text-gray-800 md:text-6xl'>{heading}</h1>
              <p className='text-base text-gray-700 md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe.</p>
              <button className='bg-basic text-white px-5 py-1 text-xl rounded'>read now</button>
          </div>
        </div>
          <div  className='flex justify-center items-center  order-1 md:order-2'>
              <img className='h-auto lg:h-[600px]' src={image} alt="" />
          </div>
 </div>
    );
};

export default CarosolCard;