import React, { useEffect, useState } from 'react'
import NavBar from '../Navbar/NavBar'
import headerImg from "../../assets/All Images/P3OLGJ1 copy 1.png"
import { useLoaderData } from 'react-router-dom'
import JobCard from '../JobCard/JobCard'
import JobDetailCard from '../JobDetailCard/JobDetailCard'

const Home = () => {
    const [jobs, setJobs] = useState([])
    const [active,setActive] = useState(4)
    const showMoreBtn = ()=>{
        const all = 6
        setActive(all)
    }
    useEffect(() => {
        fetch('joblist.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])






    const jobLists = useLoaderData()
    // console.log(jobLists);
    return (
        <div className='mx-20'>
            <div className='md:flex flex flex-col-reverse'>
                <div className='md:mt-20 md:ml-10  space-y-10'>
                    <h1 className='md:text-5xl text-2xl font-semibold'>One step <br />Closer To Your <br /> Dream Job</h1>
                    <p className=' md:mr-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-blue-500 text-white px-4 py-3 rounded-md'>Get Started</button>
                </div>
                <img className='md:h-[500px]' src={headerImg} alt="" />
            </div>
            <section className='my-20 space-y-2'>
                <h1 className='text-3xl font-semibold text-center'>Job Category List</h1>
                <p className='text-center  text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:flex md:gap-10 space-y-3 justify-center pt-10'>
                    {
                        jobLists.map(job => <JobCard
                            key={job.id}
                            job={job}
                        ></JobCard>)
                    }
                </div>
            </section>
            <main className='my-20 space-y-4'>
                <h1 className='text-3xl font-semibold text-center'>Featured Jobs</h1>
                <p className='text-center text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:grid md:grid-cols-2 md:gap-10 md:mx-10 md:py-10 space-y-3'>
                    {
                        jobs.slice(0,active).map(item => <JobDetailCard
                            key={item.id}
                            item={item}
                        ></JobDetailCard>)
                    }
                </div>
                <button onClick={() => showMoreBtn()} className='bg-blue-600 p-4  md:ml-[480px] rounded-md  text-white font-semibold'>See All Jobs</button>
            </main>
        </div>

    )
}

export default Home