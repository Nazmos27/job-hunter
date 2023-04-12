import React, { useEffect, useState } from 'react'

const ApplieJobsCard = ({data,value}) => {
    console.log(data,value);
    const info = data.find(item => item.id == value)
    
    
  return (
    <div>
        <p>{info.id}</p>
    </div>
  )
}

export default ApplieJobsCard