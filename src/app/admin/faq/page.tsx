'use client'
import React, { FC } from 'react'
import AdminSidebar from '../../../components/Admin/Sidbar/AdminSidebar'
import Heading from '../../utils/Heading'
import EditFaq from '../../../components/Admin/Customization/EditFaq'
import Footer from '../../../components/Footer'
import DashboardHero from '../../../components/Admin/DashboardHero'
const Page:FC = () => {
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
          <div className='w-[85%]'>
           <DashboardHero />
            <EditFaq />
        </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Page