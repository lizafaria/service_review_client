import React from 'react';
import addimage from '../../Images/undraw_New_entries_re_cffr.png'
import { GiSnail } from 'react-icons/gi';
import axios from 'axios';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const Additem = () => {
    const [user, loading, error] = useAuthState(auth);
    const additembtnHandle=(e)=>{
        e.preventDefault();
        const item = {
            title :e.target.name.value,
            email:user.email,
            image: e.target.image.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            supplierName: e.target.supplier.value,
            category: e.target.category.value,
            discribtion: e.target.discribtion.value,

        }
        axios.post('https://guarded-dusk-72997.herokuapp.com/add',item)
        .then(Response =>{
            const {data}= Response;
            if(data.insertedId){
                toast('product added')
            }
            console.log(data);
        })

        
    }
    return (
        <div>
            <div className='flex justify-center items-center '>
                <h1 className=' text-3xl mt-7 mb-2 px-4 my-2.5 rounded font-semibold bg-black text-white'>Add Product</h1></div>
            <p className='flex justify-center text-md items-center italic'><GiSnail/> turbo fast....</p>
            <div className='grid grid-cols-1 container mx-auto px-2  md:grid-cols-2'>
            <div className='' >
                <img className='w-full  ' src={addimage} alt="" />
            </div>
            <div className='mb-20 '>
            <form onSubmit={additembtnHandle} className='  bg-white p-2 border-2  rounded w-10/12 mx-auto mt-5'>
                <div className='my-2  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="name">Title :</label>
                    <input autoComplete='off' name='name' className='focus:outline-none focus:border-b border-gray-400 w-11/12  h-9 px-3 bg-gray-100 rounded' type="text" placeholder='Prodact heading....' required/>
                </div>
                <div className='my-2  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="image">Image:</label>
                    <input name='image' className='focus:outline-none focus:border-b border-gray-400 w-11/12 h-9 px-3 bg-gray-100 rounded' type="text" placeholder='image url here....' required/>
                </div>
               
               <div className='grid grid-cols-2'>
               <div className='my-2  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="price">price:</label>
                    <input name='price' className='focus:outline-none focus:border-b border-gray-400 w-10/12 h-9 px-3 bg-gray-100 rounded'type="number" placeholder='input price....' required/>
                </div>
               <div className='my-2 ml-1  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="quantity">quantity:</label>
                    <input name='quantity' className='focus:outline-none focus:border-b border-gray-400 w-full h-9 px-3 bg-gray-100 rounded' type="number" placeholder='type quantity....' required/>
                    
                </div>
               </div>


               <div className='grid grid-cols-2'>
               <div className='my-2  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="supplier">supplier:</label>
                    <input name='supplier' className='focus:outline-none focus:border-b border-gray-400 w-10/12 h-9 px-3 bg-gray-100 rounded'type="text" placeholder='supplier name....' required/>
                </div>
               <div className='my-2 ml-1  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="category">Category:</label>
                    <input name='category' list='category' className='focus:outline-none focus:border-b border-gray-400 w-full h-9 px-3 bg-gray-100 rounded' type="text" placeholder='category name here....' required/>
                    <datalist id="category">
                        <option value="novel"/>
                        <option value="poetry"/>
                        <option value="short story"/>
                        <option value="sci fi book"/>
                        <option value="essay"/>
                    </datalist>
                    
                </div>
               </div>
               {/* <div className='my-2  flex  items-center'>
                    <label className='text-gray-600'  htmlFor="supplier">supplier:</label>
                    <input name='supplier' className='focus:outline-none focus:border-b border-gray-400 w-full  h-9 px-3 bg-gray-100 rounded' type="text" placeholder='Prodact heading....'/>
                </div> */}
                <div className='my-2  '>
                    <label className='text-gray-600' htmlFor="discribtion">Discribtion:</label>
                   <textarea className='focus:outline-none focus:border-b border-gray-400 w-full p-3 bg-gray-100 rounded' placeholder='Discribtion.....' name="discribtion" id="" cols="30" rows="5" required></textarea>
                </div>
                <div className='flex justify-end'>
                    <input className='px-5 py-1 text-xl font-semibold bg-green-400 rounded text-white ' type="submit" value="Submit" />
                </div>
            </form>
            </div>
            
        </div>
        </div>
    );
};

export default Additem;