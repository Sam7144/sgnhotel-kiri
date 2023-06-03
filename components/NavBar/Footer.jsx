import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="wrapper px-3  my-[20px] py-[20px] grid grid-cols-1 lg:grid-cols-5 bg-gray-500 text-white">
      <div>
        <Image src="/images/son-t.webp" width="100" height="100" alt="" />
      </div>
      <div className="flex flex-col  ">
        <Link href="/" legacyBehavior passHref>
          <a className=" cursor-pointer ">Resorts</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className=" cursor-pointer ">Book Now</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer ">Villa Ownership</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer ">Soneva Foundation</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer ">Responsibility</a>
        </Link>
      </div>
      <div className="flex flex-col ">
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">Our Partners</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">The islanders</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">Magazine</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">Awards</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">Carrers</a>
        </Link>
      </div>
      <div className="flex flex-col ">
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">Our Philosophy</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">Meet Our Founders</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className=" cursor-pointer">Sustainability at</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className=" cursor-pointer">Soneva</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className="cursor-pointer">Brand Center</a>
        </Link>
        <Link href="/" legacyBehavior passHref>
          <a className=" cursor-pointer">Privancy Policy</a>
        </Link>
      </div>
      <div className="flex flex-col ">
        <Link href="/" legacyBehavior passHref>
          <a className=" cursor-pointer">Contact Us</a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
