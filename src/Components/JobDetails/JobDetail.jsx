import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'

const JobDetail = () => {
    const { state } = useLocation()
    const { index } = state
    const joblist = useLoaderData()



    const addToDb = id => {
        let shoppingCart = getShoppingCart();
        // add quantity
        const quantity = shoppingCart[id];
        if (!quantity) {
            shoppingCart[id] = 1;
        }
        else {
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
    // console.log();
    const getShoppingCart = () => {
        let shoppingCart = {};

        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
        return shoppingCart;
    }





    return (
        <div className='flex flex-row mx-28 py-36'>
            <div className='space-y-6 basis-2/3'>
                <p><b>Job_Description:</b> {joblist[index - 1].Job_Description}</p>
                <p><b>Job_Responsibility:</b> {joblist[index - 1].Job_Responsibility}</p>
                <p><b>Educational Requirements:</b> <br /> Bachelor Degree Of Any Reputational University</p>
                <p><b>Experience:</b><br /> 2-3 years in the field</p>
            </div>
            <div className='space-y-4 basis-1/3 bg-blue-100 p-6 rounded-md flex flex-col justify-center'>
                <h2 className='font-semibold'>Job Details</h2>
                <hr className='border-[1px] border-gray-400 my-2' />
                <div className=' flex items-center gap-2'>
                    <img src="../../../public/Icons/Frame.png" alt="" />
                    <p className='text-sm text-gray-800 font-semibold'><span className='text-sm font-bold'>Salary:</span> 100K to 150K</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="../../../public/Icons/Frame-1.png" alt="" />
                    <p className='text-sm text-gray-800 font-semibold'><span className='text-sm font-bold'>Job Title:</span> {joblist[index - 1].job_title}</p>
                </div>

                <h2 className='font-semibold'>Contact Information</h2>
                <hr className='border-[1px] border-gray-400 my-2' />
                <div className='flex items-center gap-2'>
                    <img src="../../../public/Icons/Frame-2.png" alt="" />
                    <p className='text-sm text-gray-800 font-semibold'><span className='text-sm font-bold'>Phone:</span> 01789 512 433</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="../../../public/Icons/Frame-3.png" alt="" />
                    <p className='text-sm text-gray-800 font-semibold'><span className='text-sm font-bold'>Email:</span> nazmos789@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="../../../public/Icons/Frame-4.png" alt="" />
                    <p className='text-sm text-gray-800 font-semibold'><span className='text-sm font-bold'>Address:</span> 45/3 B.K. Das ganguli lane,Kayettuli,Dhaka</p>
                </div>
                <button onClick={() => addToDb(joblist[index - 1].id)} className='bg-blue-500 px-6 py-2 rounded-md text-white font-semibold'>Apply Now</button>
            </div>
        </div>
    )
}

export default JobDetail