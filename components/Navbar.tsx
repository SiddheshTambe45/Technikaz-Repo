import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react' // Import the search icon

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-start max-w-7xl mx-auto px-0 border-b-2 border-black">
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

        <div className="flex justify-end items-center gap-2">
          <div>
            <Image src="/assets/icons/Letter.png" width={24} height={24} alt="Letter" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-3 gap-24">
        <div className="flex justify-start items-center gap-2">
          <Link href="/">
            <Image src="/assets/icons/logo-full.png" width={180} height={45} alt="Technikaz-logo" />
          </Link>
        </div>

        <div className="lg:flex lg:justify-start lg:items-center gap-12 hidden">
          <Link className="font-raleway font-black" href="/games">
            GAMES
          </Link>
          <Link className="font-raleway font-black" href="/tech">
            TECH
          </Link>
          <Link className="font-raleway font-black" href="/entertainment">
            ENTERTAINMENT
          </Link>
          <Link className="font-raleway font-black" href="/mobiles">
            MOBILES
          </Link>
          <Link className="font-raleway font-black" href="/stock">
            STOCK
          </Link>
        </div>

        <div className="flex justify-end items-center gap-2 ">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10" // Add padding to avoid overlapping the icon
              alt="search by Akveo on IconScout"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
