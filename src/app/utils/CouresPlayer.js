'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CouresPlayer = (props) => {
    const {videoUrl,title}=props;

    
    const [videoData, setvideoData] = useState({
        otp:"",
        playbackInfo:""
    })
    useEffect(()=>{
    axios.post(`http://localhost:8000/api/v1/getVdoCipherOTP`,{
        videoId:videoUrl
    }).then((response)=>{
        setvideoData(response.data)
    })
    },[videoUrl])

  return (
    <>
       <div style={{paddingtop:"41%",position:"relative"}}>
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