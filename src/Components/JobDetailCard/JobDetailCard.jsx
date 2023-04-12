import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const JobDetailCard = ({item}) => {
    const navigate = useNavigate()

    const applyNowBtn = (btnId) => {
        navigate('/applynow',{state:{index:btnId}})
    }

    const {id , job_title ,nature ,img , company} = item
  return (
    <div className=' bg-gray-200 p-10 rounded-md space-y-2 '>
        <img className='h-10 w-28' src={img} alt="" />
        <h1 className='text-xl font-semibold'>{job_title}</h1>
        <p className='text-sm text-gray-500 font-semibold'>{company}</p>
        <div className='md:flex gap-3'>
            <button className='border-2 border-gray-400 rounded-sm px-2 py-1 text-sm text-zinc-600 mt-2'>{nature}</button>
            <button className='border-2 border-gray-400 rounded-sm px-2 py-1 text-sm text-zinc-600 mt-2'>Full Time</button>
        </div>
        <div className='md:flex gap-5 py-3'>
            <div className='flex items-center'>
                <img src="../../../public/Icons/Location Icon.png" alt="" />
                <p className='text-sm text-gray-800 font-semibold'>Dhaka,Bangladesh</p>
            </div>
            <div className='flex items-center'>
                <img src="../../../public/Icons/Frame.png" alt="" />
                <p className='text-sm text-gray-800 font-semibold'>Salary: 100k-150k</p>
            </div>
        </div>
        <button onClick={()=>applyNowBtn(id)} className='bg-blue-600 px-3 py-2 rounded-md  text-white font-semibold'>View Details</button>

    </div>
  )
}

export default JobDetailCard