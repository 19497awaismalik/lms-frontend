'use client'
import React from 'react'
import AdminSidebar from '../../../components/Admin/Sidbar/AdminSidebar'
import Heading from '../../utils/Heading'
import AllUsers from  '../../../components/Admin/Users/AllUser'
import Footer from '../../../components/Footer'
import DashboardHero from '../../../components/Admin/DashboardHero'
const Page = () => {
  return (
    <div>
     <Heading title="ELearning - Admin" 
      description="ELearing is a platform fot student to learn and get help from teachers"
      keywords="Programming,MERN Stack,Machine Learning,Redux Store "
      />
       <div className='flex'>
        <div className=' 1500px:w-[16%] w-1/6 mt-0 '>
          <AdminSidebar/>
          </div>
          <div className='w-[82%]'>
            <DashboardHero/>
            <AllUsers isTeam={true}/>
        </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Page