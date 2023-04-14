import React, { useEffect, useState } from 'react'
import { getShoppingCart } from '../../../public/fakedb'
import ApplieJobsCard from './ApplieJobsCard'
import { useLoaderData } from 'react-router-dom'

const AppliedJobs = () => {
  const jobData = useLoaderData()
  const shopingcart = getShoppingCart()
  const keys = Object.keys(shopingcart)
  // console.log(jobData);
  
  // console.log(remote);
  const [cart,setCart] = useState(jobData)
  const [remoteData,setRemoteData] = useState(jobData)
  useEffect(() => {
    const remote = jobData.filter(item => item.nature === 'Remote')
    setRemoteData(remote)
  } ,[])
  const natureBtn = () => {
    setCart(remoteData)
    console.log(remoteData);
  }
  
  


  return (
    <div>
      <h1 className='text-center text-3xl font-semibold my-20'>Applied Jobs</h1>
      <button onClick={() => natureBtn()} className='px-5 py-2 ml-[1000px] bg-red-400 text-white rounded-md'>On-Site</button>
      <button className='px-5 py-2 mt-4 ml-[1000px] bg-red-400 text-white rounded-md'>Remote</button>

      {
        keys.map(key => <ApplieJobsCard
          data={jobData}
          value={key}
        ></ApplieJobsCard>)
      }
    </div>
  )
}

export default AppliedJobs