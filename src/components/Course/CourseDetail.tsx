import { styles } from '../../app/styles/styles';
import CouresPlayer from '../../app/utils/CouresPlayer';
import Ratings from '../../app/utils/Ratings';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react'
import { IoCheckmarkDoneOutline, IoCloseOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux'
import { format } from 'timeago.js';
import CourseContentList from '../Course/CourseContentList'
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../../components/Payment/CheckOutForm'
// import { useLoadUserQuery } from '../../../redux/features/api/apiSlice.js';
import Image from 'next/image';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { RootState } from '../../../redux/store';
// import Loader from '../Loader/Loader.js';
import avatar from '../../../public/avatar.jpg'
interface Props{
    data:any,
    stripePromise:any,
    clientSecret:string,
    isDemo?:boolean
    setOpen:(open:boolean)=>void,
    setroute:(route:string)=>void
}
const CourseDetail:FC<Props> = ({data,stripePromise,clientSecret,setOpen:openAuthModal,setroute}) => {
// console.log({stripePromise,clientSecret});

// let {data:userData,isLoading}=useLoadUserQuery(undefined,{});
let userData=useSelector((state:RootState)=>state.auth)

const [user, setUser] = useState<any>("");
const [open, setOpen] = useState(false);

const discountPercentage = ((data?.estimatedPrice - data?.price)
/ data?.estimatedPrice)* 100

const discountPercentagePrice = discountPercentage.toFixed(2);

// let user=userData.user
useEffect(()=>{
    
    setUser(userData && userData?.user)
   
},[userData])

const isPurchased=user && user?.courses?.find((item:any)=>item._id===data._id);

const handleOrder=()=>{
  if(user){
    setOpen(true);
  }else{
    setroute("Login");
    openAuthModal(true);
  }
  
}

return (
  <>
  {/* {isLoading?<Loader/>: ( */}

    <div className=' w-[90%] 800px:w-[90%] m-auto py-5'>
      <div className=' w-full flex flex-col-reverse 800px:flex-row'>

        <div className=' w-full 800px:w-[50%] 800px:pr-5'>
          <h1 className=' text-[25px] font-Poppins font-[600] text-black dark:text-white'>
            {data?.name}
          </h1>
        
          <div className=' flex items-center justify-between pt-3'>
            <div className=' flex items-center'>
              <Ratings rating={data.ratings}/>
              <h5 className=' text-black dark:text-white'>{data?.reviews?.length} Reviews</h5>
            </div>
        
            <div >
              <h5 className=' text-black dark:text-white'> {data?.purchased} Students</h5>
            </div>
          </div>
          <br />
          <h1 className=' text-[25px] font-Poppins font-[600] text-black dark:text-white'>
            What you will learn from this course? </h1>
           {data?.benefits?.map((item:any,index:number)=>{
            return (
              <div className=' w-full flex 800px:items-center py-2' key={index}>
                <div className=' w-[15pz] mr-1'>
                  <IoCheckmarkDoneOutline size={20} className=' text-black dark:text-white'/>
                </div>
                <p className=' pl-2 text-black dark:text-white'>{item.title}</p>
              </div>
            )
           }) 
        }
        <br />
        <br />
        <h1 className=' text-[25px] font-Poppins font-[600] text-black dark:text-white'>
            What are the prerequisites for starting this course?</h1>
            {data?.prerequisites?.map((item:any,index:number)=>{
            return (
              <div className=' w-full flex 800px:items-center py-2' key={index}>
                <div className=' w-[15pz] mr-1'>
                  <IoCheckmarkDoneOutline size={20} className=' text-black dark:text-white'/>
                </div>
                <p className=' pl-2 text-black dark:text-white'>{item.title}</p>
              </div>
            )
           }) 
        }
        <br />
        <br />
        <div className=''>
          <h1 className=' text-black dark:text-white font-Poppins font-[600] text-[25px]  '>
            Course Overview
          </h1>
          <CourseContentList data={data?.courseData} isDemo={true} />
        <br />
        <br />
        <p className=' text-black dark:text-white text-[18px] mt-[20px]  text-justify w-full '>
          {data.description}
        </p>
        </div>
        <br />
        <br />
       
        <div className=' !w-full '>
        <div className='800px:flex w-full items-center '>
              <Ratings rating={data.ratings}/>
              <div className='mb-2 800px:mb-[unset]'>
              <h1 className=' text-[25px] font-Poppins  text-black dark:text-white'>
                {Number.isInteger(data?.ratings) ? data.ratings.toFixed(1) : data.ratings.toFixed(2) } {" "}
                Course Rating *
                 {" "}{ data?.reviews.length} Reviews   
                </h1>
                </div>
              </div>
        <br />
        {(data?.reviews && [...data.reviews].reverse()).map((item:any,index:number)=>{
                            
          return (
            <div className=' w-full pb-4' key={index}>
              <div className=' flex'>
                <div className=' w-[50px] h-[50px]'>
                  <div className=' w-[50px] h-[50px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer'>
                  <Image
                        src={item?.user ? item?.user?.avatar?.url:avatar}
                        width={50} height={50} alt='avatar' className=' rounded-full w-[50px] h-[50px] object-cover'
                        />
                  </div>
                </div>
            
                <div className=' hidden 800px:block pl-2  '>
                  <div className=' flex items-center'>
                    <h5 className=' text-[20px] pr-2  text-black dark:text-white'>
                      {item.user.name}</h5>
                      <Ratings rating={item.rating}/>
                  </div>
                  <p className=' text-black text-[20px] dark:text-white '>{item.comment}</p>
                  <small className=' text-[#000000d1] dark:text-[#ffffff83]'>
                    {format(item.createdAt)}
                  </small>
                </div>
                <div className=' pl-2 flex 800px:hidden items-center'>
                  <h5 className=' text-[18px] pr-2 text-black dark:text-white'>
                    {item.user.name}
                  </h5>
                  <Ratings rating={item.ratings}/>
                </div>
              </div>
              <div className=''>
              {item.commentReplies.map((item:any,index:number)=>{
                        return (
                       <div className=' 800px:pl-16 pl-16' key={index}>
                        <div className='w-full flex mb-2'>
                <div className=' w-[50px] h-[50px]'>
                <Image 
                src={
                item?.user ?item.user?.avatar?.url:
                avatar}
                width={50} height={50} alt='avatar' className=' rounded-full w-[50px] h-[50px] border border-black dark:border-none object-cover'/>    
                </div>
                <div className=' pl-3'>
                   <div className=' w-full flex'>
                   <h1 className=' text-[20px] text-black dark:text-white'>
                        {item && item?.user?.name}
                    </h1> 
                    {item.user.role==='admin' && <VscVerifiedFilled className=' !text-[#0095f6] ml-2 text-[20px]'/>}
                   </div>
                        <p className=' text-black dark:text-white'>{item.comment}</p>
                        <small className=' dark:text-[#ffffff83] text-[#000000b8]'> 
                        {format(item.createdAt)} *</small>
                </div>
               </div>
                       </div> 
                    )})}
              </div>
            </div>
          )
        })
        }
        
        </div>
        
        </div>
        <div className=' w-full 800px:w-[50%] relative'>
        <div className=' sticky top-[100px] left-0 z-50 w-full'>
          <CouresPlayer 
          videoUrl={data.demoUrl}
          title={data?.title}
          />
          <div className=' flex items-center 800px:pl-0 '>
        <h1 className=' pt-5 text-[25px]  text-black dark:text-white'>
          {data?.price ===0?"Free ":   data?.price + "$"}          

        </h1>
        <h1 className=' pl-3 text-[20px] mt-2 line-through opacity-80  text-black dark:text-white'>
          {   data?.estimatedPrice}$          
        </h1>
        <h1 className='pl-5 pt-4 text-p[22px]  text-black dark:text-white '>
          {discountPercentagePrice}% <span className=' font-[500]'> Off</span>
        </h1>
      </div>
      <div className=' flex items-center'>
        {isPurchased ? (
            <Link href={`/course-access/${data._id}`} className={` ${styles.button} !w-[180px] my-3 font-Poppins
            cursor-pointer bg-[crimson] text-white
            `}>Enter to Course</Link>
        ):(<div className={`${styles.button}!w-[180px] my-3 font-Poppins
        cursor-pointer bg-[crimson] text-white`} onClick={handleOrder}>
            Buy Now {data.price} $

        </div>)}
      </div>
      <br />
    <div className=' 800px:pl-5 font-Poppins'>
    <p className='pb-1  text-black dark:text-white list-item'>Source code included</p>
      <p className='pb-1  text-black dark:text-white  list-item'>Full lifetime assess</p>
      <p className='pb-1  text-black dark:text-white  list-item'>Certificate of completion</p>
      <p className='pb-1  text-black dark:text-white  list-item'>Premium Support</p>
    </div>
        </div>
        <div></div>
      </div>
      </div>
      {open && (
        <div className='w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center'>
          <div className=' 800px:w-[500px] w-full min-h-[500px]  bg-white rounded-xl shadow p-3'>
            <div className=' w-full flex justify-end'>
              <IoCloseOutline size={40} className='text-black cursor-pointer' onClick={()=>setOpen(false)}/>
            </div>
            <div className=" w-full">
              { stripePromise && clientSecret && <Elements stripe={stripePromise} options={{clientSecret}}>
                <CheckOutForm setOpen={setOpen} data={data} user={user}/>
                </Elements>}
            </div>
          </div>
        </div>
      )}


    
    </div>
  {/* )} */}
  </>

  )
}

export default CourseDetail