'use client'
import Link from "next/link";
// import Contact from "../";
import React, { useState } from "react";
import Image from "next/image";
import { FcMenu } from "react-icons/fc";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="flex justify-between    font-Dancing script  border-b-2">
           <div className=" text-[4vw] md:text-[1.5vw] font-bold  p-2 pl-7">
  Exclusive
</div>

 
<div className="m-3">
      
<div className="md:hidden">
<button
  className="p-2 border font-bold rounded hover:bg-[#F5F5F5]"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <FcMenu />
</button>
  {menuOpen && (
    <ul className="mt-2 bg-white shadow-lg rounded w-full">
      {/* Menu Items */}
      <li className="text-[4vw] hover:bg-[#F5F5F5]">
        <Link
          href="home"
          className="block px-4 py-2"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li className="text-[4vw] hover:bg-[#F5F5F5]">
        <Link
          href="about"
          className="block px-4 py-2"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
      </li>
      <li className="text-[4vw] hover:bg-[#F5F5F5]">
        <Link
          href="contact"
          className="block px-4 py-2"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
      <li className="text-[4vw] hover:bg-[#F5F5F5]">
        <Link
          href="signup"
          className="block px-4 py-2"
          onClick={() => setMenuOpen(false)}
        >
          Sign up
        </Link>
      </li>
      {/* Search Bar */}
      <li className="mt-2">
        <div className="flex items-center bg-[#F5F5F5] px-2 py-1 rounded">
          <input
            type="text"
            className="p-1 bg-[#F5F5F5] w-full focus:border-none border-transparent focus:outline-none text-[3.5vw]"
            placeholder="Search..."
          />
          <Image
            src="/search.png"
            width={20}
            alt="Search"
            height={20}
            className="cursor-pointer"
          />
        </div>
      </li>
      {/* Icons */}
      <li className="flex justify-around mt-2">
        <Image
          src="/heart.png"
          width={20}
          alt="Favorite"
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/cart.png"
          width={20}
          alt="Cart"
          height={20}
          className="cursor-pointer"
        />
      </li>
    </ul>
  )}
</div>


    {/* md screen */}
      <div className="hidden md:flex justify-between items-center gap-4">
        <ul className="flex gap-8   mr-14 ">
          <li className="text-[1.5vw]  hover:bg-[#F5F5F5]">
            <Link href="home" className=" p-1  hover:border-b hover:border-black ">
              Home
            </Link>
          </li>
          <li className="text-[1.5vw] hover:bg-[#F5F5F5]">
            <Link href="about" className=" p-1 hover:border-b hover:border-black">
              About
            </Link>
          </li>
          <li className="text-[1.5vw] hover:bg-[#F5F5F5]">
            <Link href="contact" className="p-1  hover:border-b hover:border-black">
              Contact
            </Link>
          </li>
          <li className="text-[1.5vw] hover:bg-[#F5F5F5] ">
            <Link href="signup" className="p-1  hover:border-b hover:border-black">
              Sign up
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="bg-[#F5F5F5] flex items-center px-2 py-1 rounded">
          <input
            type="text"
            className="p-1 bg-[#F5F5F5] w-[20vw] focus:border-none border-transparent focus:outline-none"
            placeholder="Search..."
          />
          <Image
            src="/search.png"
            width={20}
            alt="Search"
            height={20}
            className="cursor-pointer"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <Image
            src="/heart.png"
            width={20}
            alt="Favorite"
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/cart.png"
            width={20}
            alt="Cart"
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>

           
        </div>)
}
export default Header;