import React, { FC, useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'

import {
    HomeOutlinedIcon, ArrowForwardIosIcon, ArrowBackIosIcon, PeopleOutlinedIcon,
    ReceiptOutlinedIcon, BarCharOutlinedIcon, MapOutlinedIcon, GroupsIcon, OndemanedVideoIcon,
    VideoCallIcon, WebIcon, QuizIcon, WysiwygIcon, ManageHistotyIcon, ExitToAppIcon
} from './icons'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import avatarDefault from '../../../../public/avatar.jpg'
import { Box, Typography, IconButton } from '@mui/material'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { RootState } from '../../../../redux/store'
// import { HiOutlineMenuAlt3 } from 'react-icons/hi'
interface ItemProps{
    title:string,
    icon:any
    to:string,
    isCollapsed:boolean,
    selected:string,
    setselected:(selected:string)=>void
}
const Item:FC<ItemProps> = (props) => {
    const { title, to, icon, selected, setselected, isCollapsed } = props;

    return (<>

        <Link href={to}>
            <MenuItem active={selected === title} onClick={() => setselected(title)} className={`${isCollapsed ? "py-[5px]" : "py-1"}   text-white `} icon={icon}>
                <Typography className=' !text-[16px] !font-Poppins  pt-1 pl-1  '>{!isCollapsed && title}</Typography>

            </MenuItem>
        </Link>
    </>)

}
const Sidebar:FC = () => {

    let { user } = useSelector((state:RootState) => state.auth);

    const [selected, setselected] = useState("Dashbaord");
    const [isCollapsed, setisCollapsed] = useState(false);
    // console.log(isCollapsed)
    const { theme } = useTheme();


    return (
        <>
            {/* <h1 className=' md:hidden flex fixed  top-6 left-4  text-5xl text-white cursor-pointer' >
    <HiOutlineMenuAlt3  size={30} 
     className='cursor-pointer'/>
  </h1> */}
            <Box
                sx={{
                    "& .pro-sidebar-inner": {
                        background: `${theme === 'dark' ? "#111c43 !important" : "#fff !important"
                            }`
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important"
                    },
                    "& .pro-inner-item:hover": {
                        color: "#868dfb !important"
                    },
                    "& .pro-menu-item.active": {
                        color: "#6870fa !important",

                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important",
                        opacity: 1,
                        display: 'flex',
                    },
                    "& .pro-menu-item": {
                        color: `${theme !== 'dark' && "#000"}`
                    },
                }}
                className="!bg-white dark:bg-[#111c43]"
            >

                <ProSidebar collapsed={isCollapsed} style={{
                    position: "fixed", top: -10, 
                    overflowY: !isCollapsed ? 'auto' : "hidden",
                    // width:isCollapsed?"5%":"18%"
                    border: isCollapsed && theme === 'light' ? "2px solid #111c43" : "", height: isCollapsed ? "100vh" : "101vh"
                }} className={`mt-0 pt-0   z-[999]`}>
                    <Menu iconShape='square' >


                        {/* LOGO AND MENU ICONS */}

                        <MenuItem onClick={() => setisCollapsed(!isCollapsed)} icon={isCollapsed ? <ArrowForwardIosIcon className='dark:text-white text-black cursor-pointer' /> : undefined} style={{ margin: '10px 0px 20px 0px' }}>
                            {!isCollapsed && (
                                <Box
                                    display={'flex'}
                                    justifyContent={'end'}
                                    mt={0}
                                    ml={'30px'}
                                >

                                    <Link href={'/'}>
                                        <h3 className='  400px:text-[25px] font-Poppins  dark:text-white text-black  '>ELearning</h3>
                                    </Link>
                                    <IconButton onClick={() => setisCollapsed(!isCollapsed)} className='  pl-2  '>
                                        <ArrowBackIosIcon className={` text-black  dark:text-white   cursor-pointer`} />

                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {!isCollapsed && (
                            <Box marginBottom={"25px"}>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Image src={user?.avatar ? user.avatar.url : avatarDefault} priority={true}
                                        style={{ cursor: "pointer", borderRadius: "50%", border: "3px solid #5b6fe6" }}
                                        width={100} height={90} alt="avatar" />

                                </Box>
                                <Box textAlign={'center'}>
                                    <Typography variant='h4' className='!text-[20px] dark:text-white text-black !font-Poppins '>
                                        {user?.name}
                                    </Typography>

                                    <Typography variant='h6' className='!text-[20px] dark:text-white text-black capitalize !font-Poppins ' sx={{ m: "10px 0 0 0" }}>
                                        -{user?.role}

                                    </Typography>

                                </Box>
                            </Box>
                        )}
                        <Box paddingLeft={isCollapsed ? undefined : '10px'}>
                            <Item title='Dashbaord'
                                to='/admin'
                                icon={<HomeOutlinedIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />
                            <Typography variant='h5'
                                sx={{ m: '15px 0 5px 20px' }}
                                className='!text-[18px] dark:text-white text-black capitalize font-[400] !font-Poppins '>
                                {!isCollapsed && 'Data'}
                            </Typography>

                            <Item title='Users'
                                to='/admin/users'
                                icon={<GroupsIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />

                            <Item title='Invoices'
                                to='/admin/invoices'
                                icon={<ReceiptOutlinedIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed} />
                            <Typography variant='h5'
                                sx={{ m: '15px 0 5px 20px' }}
                                className='!text-[18px] dark:text-white text-black capitalize !font-[400] !font-Poppins '>
                                {!isCollapsed && 'Content'}</Typography>

                            <Item title='Create Course'
                                to='/admin/create-course'
                                icon={<VideoCallIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />
                            <Item title='Live Course'
                                to='/admin/courses'
                                icon={<OndemanedVideoIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />
                            <Typography variant='h5'
                                sx={{ m: '15px 0 5px 20px' }}
                                className='!text-[18px] dark:text-white text-black capitalize !font-[400] !font-Poppins'>
                                {!isCollapsed && 'Customization'}</Typography>
                            <Item title='Hero'
                                to='/admin/hero'
                                icon={<WebIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />
                            <Item title='FAQ'
                                to='/admin/faq'
                                icon={<QuizIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />
                            <Item title='Categories'
                                to='/admin/categories'
                                icon={<WysiwygIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />
                            <Typography variant='h5'
                                sx={{ m: '15px 0 5px 20px' }}
                                className='!text-[18px] dark:text-white text-black capitalize !font-[400] !font-Poppins'>
                                {!isCollapsed && 'Controllers'}</Typography>
                            <Item title='Manage Team'
                                to='/admin/team'
                                icon={<PeopleOutlinedIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed} />
                            <Typography variant='h5'
                                sx={{ m: '15px 0 5px 20px' }}
                                className='!text-[18px]   dark:text-white text-black capitalize !font-[400] !font-Poppins'>
                                {!isCollapsed && 'Analytics'}</Typography>
                            <Item title='Courses Analytics'
                                to='/admin/courses-analytics'
                                icon={<BarCharOutlinedIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed} />

                            <Item title='Orders Analytics'
                                to='/admin/orders-analytics'
                                icon={<MapOutlinedIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />

                            <Item title='Users Analytics'
                                to='/admin/users-analytics'
                                icon={<ManageHistotyIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed}
                            />
                            <Typography variant='h5'
                                sx={{ m: '15px 0 5px 20px' }}
                                className='!text-[18px] dark:text-white text-black capitalize !font-[400] !font-Poppins'>
                                {!isCollapsed && 'Extras'}</Typography>
                            <Item title='Logout'
                                to='/admin/logout'
                                icon={<ExitToAppIcon />}
                                selected={selected}
                                setselected={setselected}
                                isCollapsed={isCollapsed} />
                        </Box>
                    </Menu>

                </ProSidebar>
            </Box>
        </>
    )
}
export default Sidebar