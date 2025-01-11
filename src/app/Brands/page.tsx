import React from 'react'
import Image from 'next/image'
const Brands = () => {
  return (
    <>
    <div className='main'>
      {/* main black border */}
      <div className="w-full h-auto min-h-[146px] md:h-[122px] bg-black flex flex-wrap items-center justify-around py-4 px-2 sm:px-4 md:px-6 lg:px-8">
       {/* versace brand */}
        <Image
          src={'/images/versace.png'}
          alt="Brand Logo 1"
          width={166}
          height={33}
          className="m-2 sm:m-3 md:m-0"
        />
        {/* zara brand */}
        <Image
          src={'/images/zara.png'}
          alt="Brand Logo 2"
          width={91}
          height={38}
          className="m-2 sm:m-3 md:m-0"
        />
        {/* gucci brand */}
        <Image
          src={'/images/gucci.png'}
          alt="Brand Logo 3"
          width={156}
          height={36}
          className="m-2 sm:m-3 md:m-0"
        />
        {/* prada brand */}
        <Image
          src={'/images/prada.png'}
          alt="Brand Logo 4"
          width={194}
          height={32}
          className="m-2 sm:m-3 md:m-0"
        />
        {/* calvin klein brand */}
        <Image
          src={'/images/calvin.png'}
          alt="Brand Logo 5"
          width={206}
          height={33}
          className="m-2 sm:m-3 md:m-0"
        />
      </div>
      </div>




   





      </>
      

  )
}

export default Brands
