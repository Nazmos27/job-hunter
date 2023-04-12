import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className='p-10 bg-[#7e8ffe18] rounded-md'>
        <img className='pb-2' src={job.img} alt="" />
        <h2 className='font-semibold text-gray-800'>{job.job_type}</h2>
        <p className='text-sm text-gray-500 '>{job.quantity}</p>
    </div>
  )
}

export default JobCard