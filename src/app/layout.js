'use client'
import { Poppins,Josefin_Sans } from 'next/font/google'
import './globals.css'
import ThemeProviders from './utils/theme-provider'
import { Toaster } from 'react-hot-toast'
import Providers from './utils/Provider'
import { SessionProvider } from 'next-auth/react'
import { useLoadUserQuery } from '../../redux/features/api/apiSlice'
import Loader from '../components/Loader/Loader'
import { useEffect } from 'react'

import socketIO from 'socket.io-client';
const ENDPOINT=process.env.NEXT_PUBLIC_SOCKET_URI || "";
const socketId=socketIO(ENDPOINT,{transports:['websocket']});

const poppins = Poppins({ 
  subsets: ['latin'] ,
  weight:["400","500","600","700"],
  variable:"--font-Poppins"
})
const josefin = Josefin_Sans({ 
  subsets: ['latin'] ,
  weight:["400","500","600","700"],
  variable:"--font-Josefin"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${josefin.variable}  !bg-white dark:bg-gradient-to-b bg-no-repeat dark:from-gray-900  dark:to-black duration-300  `} >
      
     <Providers>
     <SessionProvider>
     <ThemeProviders  attribute='class' defaultTheme='system'  enableSystem>
       <Custom> {children}</Custom>
        <Toaster position='top-center' reverseOrder={false}/>
      </ThemeProviders>
      </SessionProvider>
     </Providers>
        </body>
    </html>
  )
}
const Custom=({children})=>{
  let{isLoading}=useLoadUserQuery();
  useEffect(()=>{

    socketId.on('connection',()=>{})
  },[])

  return (
    <>
    {
      isLoading?<><Loader/></>:
     <> {children}</>
      

    }
    </>
  )
}