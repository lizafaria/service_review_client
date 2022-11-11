import React from 'react';
import testimonialImg from '../../Images/image 38.png'
import { MdFormatQuote } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
const Testimonials = () => {
    return (
        <div className='container mx-auto mb-24 font-poppins max-w-7xl'>
        <div className=' font-medium my-11 px-2'>
            <h1 className='text-2xl text-gray-800 md:text-3xl'>Customar feedback</h1>
           
        </div>
      <div className='grid grid-cols-1  mx-auto relative md:grid-cols-2'>
      <div className='w-full '>
            <img className='h-full w-5/6 mx-auto' src={testimonialImg} alt="" />
        </div>
        <div className='bg-transparent relative px-5 md:top-0   md:absolute md:inset-y-1/2 md:right-[100px] md:w-7/12'>
            <div className='text-gray-400 text-2xl  ml-11 md:text-9xl'>
            <MdFormatQuote/>
            </div>
            <div className='shadow-lg bg-white  px-2 rounded-md md:py-11'>
                <p className=' border-b pb-11'>
                "Thank you so much for your help. It's exactly what I've been looking for. You won't  regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                </p>
               <div className='flex justify-between mx-5 mt-5'>
                   <p className='font-semibold'>
                   Issabella
                   </p>
               <div>
               <p className='text-center text-amber-600 flex pl-3 space-x-2'>
                 <AiFillStar/>
                 <AiFillStar/>
                 <AiFillStar/>
                 <AiFillStar/>
                 <AiFillStar/>
                   </p>
                   <p> 25 reviews at Yelp</p>
               </div>
               </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Testimonials;