// import React from 'react'
// import logo from '../assets/images/logo1.jpg'
import { Link } from 'react-router-dom'
const NavBar = () => {
    
  return (
    // <div>NavBar</div>
    <>
     <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center mr-4" to="/index.html">
              {/* <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              /> */}
              <span className="hidden md:block text-white text-2xl font-bold"
                >Employee Management System</span
              >
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</Link>
                <Link
                  to="/companies"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Company</Link>
                <Link
                  to="/departments"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Department</Link>
                <Link
                  to="/employees"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Employee</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar