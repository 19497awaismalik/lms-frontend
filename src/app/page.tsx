'use client'
import React, {FC, Suspense, useState } from 'react'
import Heading from './utils/Heading'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Courses from '../components/Route/Courses'
import Reviews from '../components/Route/Reviews'
import FAQ from '../FAQ/FAQ'
import Footer from '../components/Footer'
const Page:FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setactiveItem] = useState(0);

  const [route, setroute] = useState("Login");
  
  return (
    <div>
      <Heading title="ELearning" 
      description="ELearing is a platform for student to learn and get help from teachers"
      keywords="Programming,MERN Stack,Machine Learning,Redux Store"
      />
       <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setroute={setroute}
        route={route}
        />
      
        <Hero/>
        <Courses/>
        <Reviews/>
        <FAQ/>
        <Footer/>
      
    </div>
  )
}

export default Page