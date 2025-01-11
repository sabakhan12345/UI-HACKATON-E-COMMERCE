import React from 'react'
import Image   from 'next/image'
import DressStyle from './DressStyle'
import TopSelling from './TopSelling'

 export default function  Hero ()  {
  return (
    <>
    <main className=' w-full h-full  md:h-[500px] flex  flex-col md:flex-row justify-between items-start bg-[#f2f0f1] overflow-hidden'>

   
    {/* left */}
    <div className="w-full md:w-[500px]  md:mt-10 md:ml-10 px-2 md:px-4 py-3 md:py-5">
      <h1 className='text-2xl md:text-4xl font-extrabold justify-center w-[400px] px-4 '>
        FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-sm mt-4 w-[400px] px-4'>
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style..
        </p>
        <button className='bg-black  py-2 px-8 ml-4 mt-4 justify-center rounded-[16px] text-sm text-white'>SHOP NOW</button>

    </div>

{/* RIGHT SIDE  */}
<div className=" relative   mt-3 md:mt-5 mr-10 ">
  <Image  src={"/images/header-homepage.png"}  className='w-[500px] h-[450px] md:mr-5 overflow-hidden fill  ' alt='home-image'  width={200} height={200} />
  {/* star */}
  <Image  src={"/images/star.png"}  className='overflow-hidden absolute w-[50px] top-[100px] left-[30px] md:w-[70px] md:top-[120px] md:left-[10px] ' alt='star-image'  width={100} height={100} />
  <Image  src={"/images/star.png"}  className='overflow-hidden absolute w-[90px] top-3 right-10 md:w-[120px] md:top-[30px] md:right-[0px] ' alt='star-image'  width={100} height={100} />
</div>
</main>


{/* brands tag */}
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









{/* new arrivals page */}
  <div  id='newarrivals' className="bg-white pt-[90px] py-10 px-4 md:px-8 lg:px-16 xl:px-32">
        {/* Header */}
        <h1 className="text-center font-integral text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 md:mb-12">
          New Arrivals
        </h1>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {[
            {
              src: "/images/pic1.png",
              alt: "T-Shirt with Tape Details",
              title: "T-Shirt with Tape Details",
              rating: 4.5,
              currentPrice: 120,
              oldPrice: null,
              discount: null,
            },
            {
              src: "/images/pic2.png",
              alt: "Skinny Fit Jeans",
              title: "Skinny Fit Jeans",
              rating: 3.5,
              currentPrice: 240,
              oldPrice: 260,
              discount: 20,
            },
            {
              src: "/images/pic3.png",
              alt: "Checkered Shirt",
              title: "Checkered Shirt",
              rating: 4.5,
              currentPrice: 180,
              oldPrice: null,
              discount: null,
            },
            {
              src: "/images/pic4.png",
              alt: "Sleeve Striped T-Shirt",
              title: "Sleeve Striped T-Shirt",
              rating: 4.5,
              currentPrice: 130,
              oldPrice: 160,
              discount: 30,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg overflow-hidden "
            >
              <div className="w-full aspect-square relative">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 w-full flex flex-col items-start">
                <h2 className="capitalize text-[32px] font-satoshi text-lg font-bold leading-tight mb-1 w-full truncate">
                  {product.title}
                </h2>
                <div className="flex items-center mb-2">
                  <Image src="/images/rating.png" alt="Rating Stars" width={80} height={15} />
                  <div className="flex items-center ml-2 text-sm text-gray-600">
                    <span>{product.rating}</span>
                    <span>/5</span>
                  </div>
                </div>
                <div className="flex items-center w-full justify-between">
                  {/* Combined Price Section - flex-wrap added here */}
                  <div className="flex flex-wrap items-center"> {/* Added items-center here */}
                    <p className="text-xl font-bold text-black">${product.currentPrice}</p>
                    {product.oldPrice && (
                      <span className="flex items-center ml-2 text-gray-400 ">
                        <p className="mr-2 line-through">${product.oldPrice}</p>
                        <div className="bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap"> {/* Added whitespace-nowrap */}
                          -{product.discount}%
                        </div>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="bg-white border border-gray-300 rounded-full py-2 px-20 hover:bg-gray-100 transition duration-300">
            View All
          </button>
        </div>
      </div>
     
  
  <TopSelling/>
  <DressStyle/>
    </> 
  )
}

