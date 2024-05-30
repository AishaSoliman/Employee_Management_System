/* eslint-disable no-unused-vars */
// import React from 'react'
// eslint-disable-next-line no-unused-vars
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider,} from 'react-router-dom';
import HomePage from '../src/pages/HomePage'
import MainLayout from './layouts/MainLayout';
import EmployeesPage from './pages/EmployeesPage';
import DepartmentsPage from './pages/DepartmentsPage';
import CompaniesPage from './pages/CompaniesPage';
import NotFoundPage from './pages/NotFoundPage';
import EmployeeProfile from './pages/EmployeeProfile';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/employees' element={<EmployeesPage />}/>
        <Route path="/employees/view/:id" element={<EmployeeProfile/>} />
        <Route path='/companies' element={<CompaniesPage />}/>
        <Route path='/departments' element={<DepartmentsPage />}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
      
    )
  );

  
  return (
    // // <div>App</div>
    // <>
    //   <NavBar />
      
    // {/* <!-- Hero --> */}
    // <Hero />

    // {/* <!-- Developers and Employers --> */}
    // <HomeCards />

    // {/* <!-- Browse Jobs --> */}
    // <EmployeeListing />

    // <Footer/>
    // </>
    <>
    <RouterProvider router={router} />

    </>
  )
  
}

export default App