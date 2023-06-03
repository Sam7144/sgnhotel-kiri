"use client";
import React, { useState } from "react";
import headerLeft from "./headerLeft";
import Link from "next/link";
import Image from "next/image";
function Header() {
  const[open,setOpen]=useState(false)
  const displayMenu=()=>{
    if(open===true){
      setOpen(false)
    }
    else{
      setOpen(true)
    }
  }
  console.log(open)
  return (
    <div className=" h-[200px] max-w-[1300px] mx-auto flex flex-col items-center   gap-6 fixed top-0 left-0 right-0 bg-white z-10">
      <div className="flex justify-between px-3 w-full pt-[70px]">
        <div className="lg:hidden"><button onClick={displayMenu} className="text-xl tr">{open?`close`:"menu"}</button></div>
        {
          open&&(
            <div className="lg:hidden mobile absolute mt-[80px] border bg-pink-100 flex left-0 pl-3 flex-col w-[100%]  rounded-sd">

          <Link href="/" legacyBehavior passHref>
            <a className="te py-2">Home</a>
          </Link>
          <Link href="/soneva-aqua" legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Soneva-In-Aqua</a>
          </Link>
          <Link href="/dinning" legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Dinning</a>
          </Link>
          <Link href="/events" legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>events</a>
          </Link>
          <Link href="/soneva-foundation" legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Responsibility</a>
          </Link>
          <Link href="/spa" legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>wellness</a>
          </Link>
          <Link href='/villas' legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Villas</a>
        </Link>
        <Link href='/soneva-aqua' legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Experiences</a>
        </Link>
        <Link href='/dinning' legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Dinning</a>
        </Link>
        <Link href='/offer' legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Exclusive Offers</a>
        </Link>
        <Link href='/family' legacyBehavior passHref>
            <a className='hover:text-gray-400 active:text-gray-700 pb-2'>Family</a>
        </Link>
          
        
    </div>
          )
        }
        <div className="hidden lg:flex justify-between items-center p-5 w-[35%]">
          <Link href="/" legacyBehavior passHref>
            <a className="te">Home</a>
          </Link>
          <Link href="/soneva-aqua" legacyBehavior passHref>
            <a>Soneva-In-Aqua</a>
          </Link>
          <Link href="/dinning" legacyBehavior passHref>
            <a>Dinning</a>
          </Link>
          <Link href="/events" legacyBehavior passHref>
            <a>events</a>
          </Link>
        </div>
        <div className="w-[26%] flex items-center justify-center cursor-pointer">
          <Image
            src="/images/son-t.webp"
            width={100}
            height={100}
            alt=""
          ></Image>
        </div>
        <div className="hidden lg:flex justify-between items-center  p-5 w-[35%]">
          <Link href="/soneva-foundation" legacyBehavior passHref>
            <a className="te">Responsibility</a>
          </Link>
          <Link href="/spa" legacyBehavior passHref>
            <a>wellness</a>
          </Link>
          <Link href="/contanct-us" legacyBehavior passHref>
            <a>contact us</a>
          </Link>
          <Link href="/reserve" legacyBehavior passHref>
            <a className="border py-1 px-3 border-r">reserve</a>
          </Link>
        </div>
        <div className="lg:hidden">
        <Link href="/reserve" legacyBehavior passHref>
            <a className="border py-1 px-3 rounded-4">reserve</a>
          </Link>
        </div>
      </div>
      <div className="hidden mb-[30px] lg:flex items-center justify-between w-full md:w-[30%] text-sm">
        <Link href='/villas' legacyBehavior passHref>
            <a>Villas</a>
        </Link>
        <Link href='/soneva-aqua' legacyBehavior passHref>
            <a>Experiences</a>
        </Link>
        <Link href='/dinning' legacyBehavior passHref>
            <a>Dinning</a>
        </Link>
        <Link href='/offer' legacyBehavior passHref>
            <a>Exclusive Offers</a>
        </Link>
        <Link href='/family' legacyBehavior passHref>
            <a>Family</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
