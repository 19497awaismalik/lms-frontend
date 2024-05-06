import React from 'react'
import CourseDetailPage from '../../../components/Course/CourseDetailPage'
const Page = ({params}) => {
    const id=params.id;
  return (
    <div>
        <CourseDetailPage id={id}/>
    </div>
  )
}

export default Page