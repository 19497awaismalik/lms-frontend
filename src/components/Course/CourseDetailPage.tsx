'use client'
import React,{FC, useEffect, useState} from 'react'
import { useGetCourseDetailQuery } from '../../../redux/features/courses/courseApi';
import Loader from '../Loader/Loader';
import Heading from '../../app/utils/Heading';
import Header from '../Header';
import Footer from '../Footer';
import CourseDetail from './CourseDetail'
import { useCreatePaymentIntentMutation, useGetStripePublishablekeyQuery } from '../../../redux/features/orders/ordersApi';
import { loadStripe } from '@stripe/stripe-js';
interface Props{
    id:string
}
const CourseDetailPage:FC<Props> = ({id}) => {

 let [route, setroute] = useState("Login");
 let [open, setOpen] = useState(false);

 let {data,isLoading}=useGetCourseDetailQuery(id);

 let {data:config}=useGetStripePublishablekeyQuery({});

 let [createPaymentIntent,{data:paymentIntentData}]=useCreatePaymentIntentMutation({})
 
const [stripePromise, setStripePromise] = useState(null);

const [clientSecret, setClientSecret] = useState("");
 
 useEffect(()=>{
if(config){
  const publishableKey= config.publishableKey;
  
  loadStripe(publishableKey).then((resp:any)=>{setStripePromise(resp)});
}
if(data){
  const amount=Math.round(data.course.price * 100);
  createPaymentIntent(amount);

}
 },[config,createPaymentIntent,data]);
 
 useEffect(()=>{
if(paymentIntentData){
  setClientSecret(paymentIntentData && paymentIntentData?.client_secret);
}
},[paymentIntentData])

  return (
  
  <div>
    {isLoading ? (<Loader/>):(
        <>
         <Heading title={data.course.name +" - ELearnig"} 
      description="ELearing is a platform fot student to learn and get help from teachers"
      keywords={data.course.tags}
      />
       <Header
        open={open}
        setOpen={setOpen}
        activeItem={1}
        setroute={setroute}
        route={route}
        />
        
        {
        stripePromise &&
         <CourseDetail data={data.course} isDemo={true} stripePromise={stripePromise} clientSecret={clientSecret}
        setOpen={setOpen}
        setroute={setroute}
        />}
        <Footer/>

        </>
    )}
  </div>
  
  
    )
    }

export default CourseDetailPage