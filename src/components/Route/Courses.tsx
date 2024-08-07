
import React, { FC, useEffect, useState } from 'react'
import { useGetUserAllCoursesQuery } from '../../../redux/features/courses/courseApi'
import CourseCard from '../Course/CourseCard'
const Courses:FC = () => {
  
    let {data}=useGetUserAllCoursesQuery({});
    const [courses, setcourses] = useState([]);
    
    useEffect(()=>{
       if(data){
        setcourses(data?.courses);
        
       }

    },[data])

  return (
    <div className=' w-[90%] 800px:m-auto'>
         <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:leading-[60px] text-[#000] font-[700] travking-tight">
        Expand Your Career {" "}
        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 
        to-purple-800 '>Opportunity</span><br />
        Opportunity with Our Courses
      </h1>
      <br />
      <br />
      <div className='grid   items-center ml-6 800px:ml-0 grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] 800px:mb-28 '>
        {courses.map((item:any,index:number)=>{
            return (<CourseCard item={item} key={index}/>)
        })}



      </div>
    </div>
  )
}

export default Courses