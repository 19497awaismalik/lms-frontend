'use client'
import axios from 'axios';

import React, { FC, useEffect, useState } from 'react'
interface Props{
    videoUrl:string,
    title?:string
}
const CouresPlayer:FC<Props> = (props) => {
    const {videoUrl,title}=props;

    
    const [videoData, setvideoData] = useState({
        otp:"",
        playbackInfo:""
    })
    useEffect(()=>{
    axios.post(`https://lms-backend-self.vercel.app/api/v1/getVdoCipherOTP`,{
        videoId:videoUrl
    }).then((response)=>{
        setvideoData(response.data)
    })
    },[videoUrl])

  return (
    <>
       <div style={{paddingTop:"41%",position:"relative"}}>
     {videoData.otp && videoData.playbackInfo!==""  &&(
      <iframe src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=wS93zCpG1o3UYBVY`} 
      style={{
      border:0,
      height:"360px",
      width:"700px",
      maxWidth:"100%"
    }} allowFullScreen={true} allow="encrypted-media" className='w-[90%]'></iframe>
      )}
      </div>
    </>
  )
}

export default CouresPlayer
