import React, { Component, FC } from 'react'
import {Modal,Box} from '@mui/material';
interface Props{
    open:boolean,
    setOpen:(open:boolean)=>void,
    Component:any,
    setroute:(route:string)=>void
}
const CustomModel:FC<Props> = (props) => {

  const {open,setOpen,Component,setroute}=props;

  return (
    <Modal
    open={open}
    onClose={()=>setOpen(false)}
    arial-labelleby='model-model-title'
    arial-describeby='model-model-description'
    >
        <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] 800px:w-[450px] bg-white border-none dark:bg-slate-900 rounded-[8px]">
        <Component setOpen={setOpen} setroute={setroute}/>
        </Box>
    </Modal>
  )
}

export default CustomModel