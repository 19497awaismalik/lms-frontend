'use client'
import React, { FC, Suspense, useEffect } from 'react'
import { useLoadUserQuery } from '../../../../redux/features/api/apiSlice';
import Loader from '../../../components/Loader/Loader';
import { redirect } from 'next/navigation';
import CourseContent from '../../../components/Course/CourseContent'
interface Props{
    params:any
}
const Page:FC<Props> = ({params}) => {
    const id=params.id;
    let {data,isLoading,error}=useLoadUserQuery({});

    useEffect(()=>{
        if(data){
        const isPurchased=data && data.user.courses.find((item:any)=>item._id===id);
        if(!isPurchased){
            redirect('/');
        }
        if(error){
            redirect('/');
        }
        }
        
},[data,error,id])
  return (
    <div className=' w-full h-full'>
         {isLoading?<Loader/>:
        <Suspense>
             <CourseContent id={id} user={data && data.user}/>
        </Suspense>
        }
       
    </div>
  )
}

export default Page