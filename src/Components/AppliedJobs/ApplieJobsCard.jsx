import React, { useEffect, useState } from 'react'

const ApplieJobsCard = ({ data, value }) => { 
    
    const info = data.find(item => item.id == value)


    return (
        <div className='flex border-[1px] rounded-md border-gray-400 mx-32 my-6 justify-between'>
            <div className='flex gap-5 p-4'>
                <img className='h-40 w-40 px-4 py-14 rounded-md border-[1px] bg-gray-100  border-black' src={info.logo} alt="" />
                <div className='my-auto'>
                <h1 className='text-xl font-semibold'>{info.job_title}</h1>
                <p className='text-sm text-gray-500 font-semibold'>{info.company}</p>
                <div className='flex gap-3'>
                    <button className='border-2 border-gray-400 rounded-sm px-2 py-1 text-sm text-zinc-600 mt-2'>{info.nature}</button>
                    <button className='border-2 border-gray-400 rounded-sm px-2 py-1 text-sm text-zinc-600 mt-2'>Full Time</button>
                </div>
                <div className='flex gap-5 py-3'>
                    <div className='flex items-center'>
                        <img src="../../../public/Icons/Location Icon.png" alt="" />
                        <p className='text-sm text-gray-800 font-semibold'>Dhaka,Bangladesh</p>
                    </div>
                    <div className='flex items-center'>
                        <img src="../../../public/Icons/Frame.png" alt="" />
                        <p className='text-sm text-gray-800 font-semibold'>Salary: 100k-150k</p>
                    </div>
                </div>
                </div>

            </div>
            <button className='my-20 mr-6 bg-blue-600 px-3 py-2 rounded-md  text-white font-semibold'>View Details</button>
        </div>
    )
}

export default ApplieJobsCard