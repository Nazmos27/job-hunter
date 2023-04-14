import React from 'react'
import { useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
  console.error(error);
  return (
    <div className='flex flex-col justify-center items-center mt-60'>
      <h1 className='text-3xl font-semibold text-red-600'>Oops!</h1>
      <p className='text-2xl'>404</p>
      <p className='text-2xl italic'>Not Found</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Errorpage