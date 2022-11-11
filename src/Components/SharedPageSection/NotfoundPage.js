import React from 'react';
import errorimage from '../../Images/undraw_Page_not_found_re_e9o6.png'

const NotfoundPage = () => {
    return (
        <div className='flex justify-center items-center container mt-5'>
            <img className='x ' src={errorimage} alt="" />
        </div>
    );
};

export default NotfoundPage;