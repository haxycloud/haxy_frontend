import React from 'react'
import Sidebar from '../Sidebar/SIdebar'
import Navbar from '../Navbar/Navbar'
import Breadcrumbs from './BreadCrumbs'
import OccurenceCard from './OccurenceCard'
export default function Occurences(){
return (
  <div className='w-full h-screen bg-[#091540]'>
    <Navbar />
    <div className='flex gap-2 w-full'>
      <Sidebar />
      <div className='mt-10 w-full'>
        <Breadcrumbs />
        <div className='mt-10 px-4 w-full'>
        <OccurenceCard/>
        </div>
      </div>

    </div>
  </div>
)
}
