import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex justify-around items-center m-10'>
      <Link to="/"><h3 className='text-3xl font-semibold'>CareerHub</h3></Link>      <div className='flex gap-9 text-blue-400'>
        <Link to="/appliedjobs">Applied Jobs</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <button className='bg-blue-500 text-white px-4 py-3 rounded-md'><Link to="/applying">Start Applying</Link></button>
    </nav>
  )
}

export default NavBar