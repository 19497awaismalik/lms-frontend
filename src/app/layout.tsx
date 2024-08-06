"use client"
import React, { FC, ReactNode, useEffect } from "react";
import { Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from './utils/theme-provider'
import Providers from './utils/Provider'
import Loader from '../components/Loader/Loader'

import socketIO from 'socket.io-client';
import { Toaster } from "react-hot-toast";
import { useLoadUserQuery } from "../../redux/features/api/apiSlice";
import { SessionProvider } from "next-auth/react";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins"
})
const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin"
})

interface Node{
  children:ReactNode
}
export default function RootLayout({children}:Node) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${josefin.variable}  !bg-white dark:bg-gradient-to-b bg-no-repeat dark:from-gray-900  dark:to-black duration-300  `} >
        <SessionProvider>
          <Providers>
            <ThemeProviders attribute='class' defaultTheme='system' enableSystem>
              <Custom>{children}</Custom>
              <Toaster position='top-center' reverseOrder={false} />
            </ThemeProviders>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}

interface CustomProps{
  children:ReactNode
}
const Custom:FC<CustomProps> = ({ children }) => {
  let { isLoading } = useLoadUserQuery("");
  // let isLoading=false;
  useEffect(() => {

    socketId.on('connection', () => { })
  }, [])

  return (
    <>
      {
        isLoading ? <><Loader /></> :
          <> {children}</>


      }
    </>
  )
}