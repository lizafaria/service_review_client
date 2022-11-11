import React, { useEffect, useState } from 'react';
import TrandingCard from './TrandingCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '../Style/blogStyle.css'

// import "./styles.css";
import { EffectCoverflow, FreeMode, Navigation, Pagination } from 'swiper';

// import required modules


const TrandingSection = () => {
    const [topbooks, setTopbooks]= useState([])
    useEffect(()=>{
        
      fetch('https://guarded-dusk-72997.herokuapp.com/top')
      .then(res=> res.json())
      .then(data=>{
        setTopbooks(data)
          
      })
     
    },[])
    console.log(topbooks);

    
  

    return (
        
        <div className='container mx-auto mb-24  max-w-7xl'>
            <h1 className='text-2xl text-gray-800 md:text-3xl mt-20 mb-7' > What's in trand</h1>
               <Swiper
     
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
      >
            {
              topbooks.map( book=>
                 <SwiperSlide className='SwiperSlide'>
                     <TrandingCard book={book}>
                    </TrandingCard>
                </SwiperSlide>

              )  
            }
           
            </Swiper>
        </div>
    );
};

export default TrandingSection;