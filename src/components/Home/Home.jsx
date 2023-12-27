import React from 'react'
import Sidebar from './../Sidebar/SIdebar'
import Navbar from '../Navbar/Navbar'
import Breadcrumbs from './BreadCrumbs'
import OccurenceList from './OccurenceList'
export const Home = () => {
  return (
    <div className='w-full h-full bg-[#091540]'>
      <Navbar />
      <div className='flex gap-2'> 
      <Sidebar />
      <div className='mt-10'>
        <Breadcrumbs/>
        <div className='mt-10 px-4'>
          <OccurenceList />
        </div>
      </div>

      </div>
    </div>
  )
}
