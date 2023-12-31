import { useState } from 'react'

import './App.css'
import NavBar from './Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
