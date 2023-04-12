import React from 'react'
import { getShoppingCart } from '../../../public/fakedb'
import ApplieJobsCard from './ApplieJobsCard'
import { useLoaderData } from 'react-router-dom'

const AppliedJobs = () => {
  const jobData = useLoaderData()
  const shopingcart = getShoppingCart()
  const keys = Object.keys(shopingcart)


  return (
    <div>
      {
        keys.map(key => <ApplieJobsCard
        data = {jobData}
        value = {key}
        ></ApplieJobsCard>)
      }
    </div>
  )
}

export default AppliedJobs