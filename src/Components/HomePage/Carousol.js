import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import CarosolCard from './CarosolCard';
import image1 from '../../Images/girl-reading-books-online.png'
import image2 from '../../Images/girl-searching-online.png'
import image3 from '../../Images/reading-books.png'
import image4 from '../../Images/girl-reading-books-online.png'


const Carousol = () => {
    const featuredProducts = [
        <CarosolCard heading={'ISBN search features'} text={'start your learing journey by browsing milions of books from our library'} catagory={'SEARCH BOOKS EASILY'}  styles={'bg-green-50' } image={image2}/>,
        <CarosolCard heading={'Read books pdf online'} text={'Let your customers read books online without leaving website'} catagory={'IMBED PDF FEATURE'} styles={'bg-green-50' } image={image1}/>,
        <CarosolCard heading={'Over 12 million books'} text={'search your books in ISBI number or author name and save your time'} catagory={'Largest Catalog'} styles={'bg-red-50'}  image={image3}/>
     
    ];
    let count = 0;
    let slideInterval;
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    return (
        <div>
            <div ref={slideRef} className="w-full select-none  relative">
            <div className="aspect-w-16 aspect-h-9 ">
                {/* <img src={featuredProducts[currentIndex]} alt="" /> */}
                {featuredProducts[currentIndex]}
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnPrevClick}
                >
                    <AiOutlineVerticalRight size={30} />
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnNextClick}
                >
                    <AiOutlineVerticalLeft size={30} />
                </button>
            </div>
        </div>
        </div>
    );
};

export default Carousol;