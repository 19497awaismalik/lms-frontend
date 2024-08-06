import React, { FC } from 'react'
import CourseDetailPage from '../../../components/Course/CourseDetailPage'
interface Props{
    params:any
}
const Page:FC<Props> = ({params}) => {
    const id=params.id;
  return (
    <div>
       <CourseDetailPage id={id}/>
       
    </div>
  )
}

export default Page