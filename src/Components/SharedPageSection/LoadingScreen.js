import React from 'react';
import loading from '../../Images/loader-img.gif'

const LoadingScreen = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <img className=' h-20' src={loading} alt="" />
        </div>
    );
};

export default LoadingScreen;