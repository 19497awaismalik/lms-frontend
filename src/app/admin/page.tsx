'use client'
import React, { FC } from 'react'
import AdminSidebar from '../../components/Admin/Sidbar/AdminSidebar'
import Heading from '../utils/Heading'
import { AdminProtected } from '../hooks/adminProtected'
import DashboardHero from '../../components/Admin/DashboardHero'
import Footer from '../../components/Footer'
const Page:FC = () => {


  return (
    <div>
      <AdminProtected>
      <Heading title="ELearning - Admin" 
      description="ELearing is a platform fot student to learn and get help from teachers"
      keywords="Programming,MERN Stack,Machine Learning,Redux Store "
      />
      <div className='flex '>
        <div className='md:w-[16%] 1500px:w-[16%] flex   mt-0 '>
            <AdminSidebar
            //  isOpen={true}
            />
        </div>
        {/* <div className='md:w-[16%] 1500px:w-[16%] md:hidden  flex mt-0 '>
            <AdminSidebar isOpen={false}/>
        </div> */}
        <div className='w-[85%]'>
            <DashboardHero isDashboard={true}/>
        </div>
      </div>
      <Footer/>
      </AdminProtected>
    </div>
  )
}

export default Page