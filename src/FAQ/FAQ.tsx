import { styles } from '../app/styles/styles'
import React, { useState,useEffect, FC } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { useGetHeroDataQuery } from '../../redux/features/layout/layoutApi'


const FAQ:FC = () => {
    const [questions, setquestions] = useState<any[]>([]);
    let {data}=useGetHeroDataQuery("FAQ",{})

        useEffect(()=>{
            if(data){
                setquestions(data?.layout?.faq);
            }

        },[data])

const toggleQuestion=(id:string)=>{

    setquestions((prev)=>{
        return  prev.map((q)=>{
      return  q._id===id?{...q,active:!q.active}:q}) })
}

  return (
      <div className='w-[90%] 800px:w-[80%] min-h-screen  m-auto mt-[50px] '>
        <h1 className={`${styles.title} mt-5`}>
            Frequently Asked Questions
        </h1>
        <div className='mt-12'>
            <dl className='space-y-8'>
                {
                  questions &&  questions.map((q)=>{ return <div key={q._id} 
                    className={ `${q?._id!==questions[0]?._id && "border-t" }
                    border-gray-200  pt-4 `}>
                        <dt className='text-lg'>
                            <button className='flex items-start dark:text-white text-black 
                            justify-between w-full text-left focus:outline-none' >

                                <span className='font-medium text-black dark:text-white'>
                                    {q.question}</span>
                                <span className=' ml-6 flex-shrink-0 pt-4 ' 
                                onClick={()=>toggleQuestion(q._id)}>
                                    {q.active ?(<HiMinus className='h-6 w-6'/>):(<HiPlus className='h-6 w-6 '/>)}
                                </span>
                            </button>
                        </dt>
                        {q.active &&(
                            <dd className='mt-2 pr-12'>
                                <span className='font-medium text-black dark:text-white'>
                                    {q.answer}</span>
                               
                            </dd>
                        )}
                        </div>
                    })
                }
            </dl>
            <br />
            <br />
           
        </div>
      
        </div>
  )
}

export default FAQ