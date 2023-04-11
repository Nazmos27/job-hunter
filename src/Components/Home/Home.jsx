import React, { useEffect, useState } from 'react'
import NavBar from '../Navbar/NavBar'
import headerImg from "../../assets/All Images/P3OLGJ1 copy 1.png"
import { useLoaderData } from 'react-router-dom'
import JobCard from '../JobCard/JobCard'

const Home = () => {
    const jobLists = useLoaderData()
    // console.log(jobLists);
    return (
        <div className='mx-20'>
            <div className='flex'>
                <div className='mt-20 ml-10 space-y-10'>
                    <h1 className='text-5xl font-semibold'>One step <br />Closer To Your <br /> Dream Job</h1>
                    <p className=' mr-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-blue-500 text-white px-4 py-3 rounded-md'>Get Started</button>
                </div>
                <img className='h-[500px]' src={headerImg} alt="" />
            </div>
            <section className='my-20 space-y-2'>
                <h1 className='text-3xl font-semibold text-center'>Job Category List</h1>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex gap-10 justify-center pt-10'>
                    {
                        jobLists.map(job => <JobCard
                        key={job.id}
                        job={job}
                        ></JobCard>)
                    }
                </div>
            </section>
        </div>

    )
}

export default Home