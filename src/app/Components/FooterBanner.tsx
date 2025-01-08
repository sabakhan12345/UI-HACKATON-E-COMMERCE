import React from 'react';
import { Mail } from 'lucide-react';

const FooterBanner = () => {
  return (
    <div className="bg-[#000000] w-full h-auto mt-16 rounded-xl md:mx-auto p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 md:justify-center overflow-hidden">
      {/* Heading */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-2xl md:text-5xl font-bold text-white leading-snug">
          STAY UP TO DATE ABOUT<br /> OUR LATEST OFFERS
        </h1>
      </div>

      {/* Form */}
      <form className="flex-1 flex flex-col items-center space-y-4 w-full">
        {/* Email Input */}
        <div className="relative w-full max-w-[400px]">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full p-4 pl-12 rounded-full bg-[#FFFFFF] text-black"
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Subscribe to Newsletter"
          className="w-full max-w-[400px] p-4 rounded-full bg-[#FFFFFF] text-black cursor-pointer"
        />
      </form>
    </div>
  );
};

export default FooterBanner;
