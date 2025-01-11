import React from 'react';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-[#00000099] py-12 px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Column 1 */}
        <div className="sm:col-span-2 md:col-span-1">
          <Image src={'/images/shopco.png'} alt='logo img-1' width={100} height={100} />
          <p className="text-sm leading-relaxed mt-5">
            We have clothes that suit your style and<br /> which you &apos; re proud to wear. From <br />women to men.
          </p>
          <div className="mt-12 flex px-4 py-2 mx-3 gap-3">
            <Image src={'/images/twitter.png'} alt='Social.png' width={25} height={25} />
            <Image src={'/images/facebook.png'} alt='Social.png' width={25} height={25} />
            <Image src={'/images/instagram.png'} alt='Social.png' width={25} height={25} />
            <Image src={'/images/github.png'} alt='Social.png' width={25} height={25} />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg mb-4 text-[#000000]">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg text-[#000000] mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg text-[#000000] mb-4">FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-lg text-[#000000] mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 text-center sm:text-start text-xl text-[#00000099] flex flex-col md:flex-row items-center justify-around">
        <hr />
        <h1 className='mr-6 mb-[-22px]'>   © 2024 SHOP.CO. All rights reserved.</h1>
     
        <div className="mt-12 flex px-4 py-2 mx-3 gap-3 ">
            <Image src={'/images/visa.png'} alt='Social.png' width={60} height={60} />
            <Image src={'/images/mastercard.png'} alt='Social.png' width={50} height={50} />
            <Image src={'/images/pay.png'} alt='Social.png' width={60} height={60} />
            <Image src={'/images/paypal.png'} alt='Social.png' width={60} height={60} />
            <Image src={'/images/gpay.png'} alt='Social.png' width={60} height={60} />
          </div>
      </div>
     
    </footer>
  );
};

export default Footer;