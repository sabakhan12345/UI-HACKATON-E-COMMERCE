import Link from 'next/link'
import { SheetSide } from '@/components/sheetres';
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import cart from '../../../public/images/cart.png'
import profile from '../../../public/images/Vector.png'
import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';

const MainNavbar = () => {
  return (
    <header className=' flex  flex-wrap justify-between items-center max-w-frame h-[45px] gap-[40px] my-[30px] overflow-hidden  '>
     
      {/* humburger menu */}
     < SheetSide />
  
    {/* LOGO */}
        <h1 className=' text-xl font-bold sm:text-3xl items-center pl-3 font-integral'>SHOP.CO</h1>
    {/* NAVBAR */}
    <ul className="linking hidden  text-xl md:flex md:text-2xl justify-center items-center space-x-4">
    {/* < NavigationMenuDemo /> */}
      <Link href={"/"} className='flex  items-center '> Shop <RiArrowDropDownLine />
        </Link> 
      <Link href={"/ProductDetails"}>On Sale </Link>
      <Link href={"/NewArrivals"}>New Arrivals </Link>
      <Link href={"/Category"}>Brands </Link>
    </ul>
    {/* search box */}
  
        <div className="searchicon  bg-[#f0f0f0] w-[330px] h-[40px] rounded-[62px] hidden md:flex justify-start items-center ">
        <CiSearch className='ml-2'/>
        <input type="text" placeholder='Search for Products...' className='w-full h-full 
         rounded-[62px] bg-[#f0f0f0] ml-2 outline-none' />
        </div>
  
   <div className=' flex items-center mr-7 space-x-5  '>
    {/* search icon only responsiveness */}
    <CiSearch className='block text-xl mr-2 md:hidden' />
    {/* cart */}

    <Link href={'/Cart'} >
    <Image src={cart} alt='cart'  className='w-[24px] h-[24px]  text-2xl ' />
    </Link>
    {/* profile */}
    <Image src={profile} alt='profile' className='w-[24px] h-[24px]  text-2xl ' />
    </div>
    </header>
  )
}

export default MainNavbar