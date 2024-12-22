import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start py-10 bg-black border-b-2 border-white px-5">
        <div className="newsletter flex flex-col justify-center items-center gap-8 md:mt-6">
          <Image src="/assets/icons/logo-full.png" alt="logo" width={250} height={100} />
          <div className="flex w-full max-w-md items-center border border-gray-500 bg-gray-500 rounded-md overflow-hidden shadow-md ">
            {/* Input Field */}
            <Input
              type="email"
              placeholder="Sign-Up For Newsletters"
              className="flex-1 px-6 py-4 text-black bg-white placeholder-black focus:outline-none rounded border-4 border-gray-500"
            />
            {/* Button */}
            <Button
              type="submit"
              className="bg-teal-600 text-white font-bold px-6 py-4 hover:bg-teal-700 rounded border-gray-500 border-4"
            >
              GO
            </Button>
          </div>
        </div>

        <div className="links flex flex-col justify-start items-center my-5 md:my-0">
          <p className="text-blue-400 font-raleway mb-4 font-semibold">Links</p>
          <Link className="text-white font-raleway" href="/games">
            Games
          </Link>
          <Link className="text-white font-raleway" href="/tech">
            Tech
          </Link>
          <Link className="text-white font-raleway" href="/entertainment">
            Entertainment
          </Link>
          <Link className="text-white font-raleway" href="/mobile">
            Mobile
          </Link>
          <Link className="text-white font-raleway" href="/stocks">
            Stocks
          </Link>
        </div>

        <div className="company flex flex-col justify-start items-center my-5 md:my-0">
          <p className="text-blue-400 font-raleway mb-4 font-semibold">Company</p>
          <Link className="text-white font-raleway" href="/about-us">
            About Us
          </Link>
          <Link className="text-white font-raleway" href="/contact-us">
            Contact Us
          </Link>
          <Link className="text-white font-raleway" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="text-white font-raleway" href="/terms&conditions">
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className="bg-black text-white flex justify-between items-center p-3">
        <div className="flex justify-start items-center gap-2">
          <div>
            <Image src="/assets/icons/Facebook.png" width={24} height={24} alt="Facebook" />
          </div>
          <div>
            <Image src="/assets/icons/Instagram.png" width={24} height={24} alt="Instagram" />
          </div>
          <div>
            <Image src="/assets/icons/LinkedIn.png" width={24} height={24} alt="LinkedIn" />
          </div>
          <div>
            <Image src="/assets/icons/TwitterX.png" width={24} height={24} alt="TwitterX" />
          </div>
        </div>

        <div className="md:flex md:justify-end lg:justify-center md:items-center gap-2 hidden">
          <p className="text-white font-extrabold !important">
            <span className="text-white">@2024-25 Technikaz All Rights Reserved</span>
          </p>
        </div>

        <div className="hidden lg:flex"></div>
      </div>
    </footer>
  )
}

export default Footer
