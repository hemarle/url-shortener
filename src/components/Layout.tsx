
import React from 'react'
import { Link } from 'react-router'

function Layout(props:{children:React.ReactNode}) {
  return (
    <div className="bg-gray-900 min-h-screen  p-4 lg:4 lg:p-8">
 
    <div className="relative w-full max-w-7xl mx-auto">
    
    <div className="flex justify-between items-center lg:py-4 lg:px-6">
     <Link to="/">
      <div className="text-white text-3xl">Linkly</div>
     </Link>
      <div className="flex space-x-4">
   
   <Link to="/login">
        <button className="bg-gray-800 text-gray-400 border border-gray-700 rounded-full px-6 py-2 shadow-md">Login</button>
   </Link>
   <Link to="/register">
        <button className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md">Register Now</button>
   </Link>
      </div>
    </div>
    </div>

    {props.children}
    </div>
  )
}

export default Layout
