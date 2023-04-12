import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='md:flex justify-around items-center m-10'>
      <Link to="/"><h3 className='md:text-3xl text-xl font-semibold'>JobHunter</h3></Link>      
      <div className='flex md:gap-9 gap-3 mb-2 text-blue-400'>
        
        <Link to="/">Home</Link>
        <Link to="/appliedjobs">Applied Jobs</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <button className='bg-blue-500 text-white md:px-4 md:py-3 px-2 py-1 text-xs  rounded-md'><Link to="/applying">Start Applying</Link></button>
    </nav>
  )
}

export default NavBar