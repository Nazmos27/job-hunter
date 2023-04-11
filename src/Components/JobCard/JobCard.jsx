import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className='p-10 bg-gray-300 rounded-md'>
        <img src={job.img} alt="" />
        <h2>{job.job_title}</h2>
        <p>{job.quantity}</p>
    </div>
  )
}

export default JobCard