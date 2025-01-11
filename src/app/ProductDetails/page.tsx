import Image from "next/image";
import CustomerReviews from "../Components/CustomerReviews";
const ProductDetails = () => {
  return (
    <div>
      {/* Product Card Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-6">
          {/* Small Images Section */}
          <div className="flex md:flex-col gap-12 border-none ">
            <div className="h-16    rounded-md  cursor-pointer m-3 md:my-2">
              <Image
                src="/images/pic9.png"
                alt="Thumbnail 1"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
            </div>
            <div className=" h-16 rounded-md cursor-pointer m-3 md:my-2">
              <Image
                src="/images/pic10.png"
                alt="Thumbnail 2"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
            </div>
            <div className=" h-16  rounded-md cursor-pointer m-3 md:my-2">
              <Image
                src="/images/pic11.png"
                alt="Thumbnail 3"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
            </div>
          </div>

          {/* Main Image Section */}
          <div className="  flex  flex-col md:flex-row justify-center items-center ">
            <Image
              src="/images/pic9.png"
              alt="Main Product Image"
              width={1000}
              height={1000}
              className="mr-0 mt-[60px] md:mt-[0px] md:mr-[250px] w-[300px] md:w-[950px] object-cover rounded-md"
            />
          </div>

          {/* Product Details Section */}
          <div className="col-span-1 mt-0 ">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900">
              ONE LIFE GRAPHIC T-SHIRT
            </h2>

            {/* Price */}
            <div className="flex items-center mt-4 space-x-2">
              <span className="text-xl font-bold text-gray-900">$260</span>
              <span className="text-base text-gray-500 line-through">$300</span>
              <span className="text-sm text-red-500 font-semibold">-40%</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-sm">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Color Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700">Select Colors</h3>
              <div className="flex space-x-4 mt-2">
                <div className="w-6 h-6 rounded-full bg-red-900 border border-gray-300 hover:border-black cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-[#314F4A] border border-gray-300 hover:border-black cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-[#31344F] border border-gray-300 hover:border-black cursor-pointer"></div>
              </div>
            </div>

            {/* Size Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700">Choose Size</h3>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100">
                  Small
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100">
                  Medium
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md bg-gray-100">
                  Large
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100">
                  X-Large
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6">
               <button className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
              
            </div>
          </div>
        </div>
      </div>
<CustomerReviews />
     
    </div>
  );
};

export default ProductDetails;