
import Image from "next/image";
import xicon from '../../../public/images/x-icon.png'
import Link from "next/link";
import React from "react";

const Navbar1 = () => {
  return (
    <div className="bg-black h-[38px] text-white flex text-center py-2 px-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto ">
        <h1 className="text-xs sm:text-sm">
          Sign up and get 20% off to your first order.{" "}
          <Link href="#" className="underline font-medium">
            Sign Up Now
          </Link>   
        </h1>
      </div >
      {/* cross icon */}
      <Image src={xicon} alt="x-icon" className="absolute right-[50px]  hidden sm:flex w-[20px] h-[20px] "/>
    </div>
  );
};

export default Navbar1;
