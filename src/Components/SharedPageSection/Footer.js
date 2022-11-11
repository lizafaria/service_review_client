import React from 'react';

const Footer = () => {
      const footerdate = new Date().getFullYear();



    return (
       <div className='bg-black'>
            <div className='pt-11 mt-44 container mx-auto'>
            
            <div className='grid grid-cols-2  lg:grid-cols-4  mx-auto'>
   
            <div className='space-y-2 text-gray-300 ml-7 md:ml-24 mb-7'>
           <div>
           <h2 className='text-xl text-headerColor  font-semibold text-orange-400 mb-3'>
                  Ben<span className='text-green-500'>g</span>liyan
                   </h2>
                   <p>About</p>
                   <p>Blog</p>
                   <p>Manage</p>
                   <p>Contact Us</p>
           </div>
               </div>
               <div className='space-y-2 text-gray-300 ml-7 md:ml-24 mb-7'>
                  <div>
                  <h1 className='text-2xl font-semibold text-gray-200  mb-3'>Product</h1>
                   <p>manage item</p>
                   <p>My item</p>
                   <p>add to database</p>
                   <p>Contact Us</p>
                  </div>
               </div>
               <div className='space-y-2 text-gray-300  ml-7 md:ml-24 mb-7'>
                 <div>
                 <h1 className='text-2xl font-semibold  text-gray-200 mb-3'>Links</h1>
                       <p>Blogs</p>
                       <p>Bengliyan inventory</p>
                       <p>Top sold</p>
                       <p>Commnets</p>
                 </div>
                   
               </div>
               <div className='space-y-2 text-gray-300  ml-7 md:ml-24 mb-7'>
                  <div>
                  <h1 className='text-2xl font-semibold text-gray-200  mb-3'>More</h1>
                       <p>Help</p>
                       <p>Developers</p>
                       <p>Privacy Policy</p>
                       <p>Terms & Conditions</p>
                  </div>
                   
               </div>
   
            </div>
   
           <div className='mt-11 text-center pb-5 justify-center text-lg font-medium block text-gray-300 md:flex'>
               <p>&copy; {footerdate} || All Right Reserved</p>
             <p> by Mmr creation ltd.</p>
           </div>
   
   
           </div>
       </div>
    );
};

export default Footer;