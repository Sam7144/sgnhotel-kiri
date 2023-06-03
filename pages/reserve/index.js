"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve = () => {
  return (
    <div className="mt-[230px] wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="bd rounded-md">
          <Image
            src="/images/d1.webp"
            width="300"
            height={300}
            alt=""
            className="w-full  h-[300px] pb-5"
          />
          <h3 className="text-gray-700 pl-2 ">Soneva Aqua</h3>
          <h4 className="text-gray-700 pl-2">Noonu Atoll Maldivies</h4>
          <div className="w-[95%] border-b mx-auto"/>
          <div className="text-center">
          <Link legacyBehavior passHref href="/villas">
            <a className=" p-2 text-gray-400">
            <p>from $2000</p>
            <p>Per Night</p>
            <p>Excluding taxes and fees</p>
            <div className="bd2 p-3 mt-3 text-red-500 w-[90%] font-bold hover:bg-gray-300 mx-auto rounded-full">View Rates</div>
            </a>
          </Link>
          </div>
        </div>
        <div className="bd rounded-md">
          <Image
            src="/images/d1.webp"
            width="300"
            height={300}
            alt=""
            className="w-full  h-[300px] pb-5"
          />
          <h3 className="text-gray-700 pl-2 ">Soneva fushi</h3>
          <h4 className="text-gray-700 pl-2">Baa Atoll Maldivies</h4>
          <div className="w-[95%] border-b mx-auto"/>
          <div className="text-center">
          <Link legacyBehavior passHref href="/soneva-aqua">
            <a className=" p-2 text-gray-400">
            <p>from $1160</p>
            <p>Per Night</p>
            <p>Excluding taxes and fees</p>
            <div className="bd2 p-3 mt-3 text-red-500 w-[90%] font-bold hover:bg-gray-300 mx-auto rounded-full">View Rates</div>
            </a>
          </Link>
          </div>
        </div>
        <div className="bd rounded-md">
          <Image
            src="/images/d1.webp"
            width="300"
            height={300}
            alt=""
            className="w-full  h-[300px] pb-5"
          />
          <h3 className="text-gray-700 pl-2 ">Soneva Kiri</h3>
          <h4 className="text-gray-700 pl-2">Koo Maldivies</h4>
          <div className="w-[95%] border-b mx-auto"/>
          <div className="text-center">
          <Link legacyBehavior passHref href="/soneva-aqua">
            <a className=" p-2 text-gray-400">
            <p>from $744</p>
            <p>Per Night</p>
            <p>Excluding taxes and fees</p>
            <div className="bd2 p-3 mt-3 text-red-500 w-[90%] font-bold hover:bg-gray-300 mx-auto rounded-full">View Rates</div>
            </a>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reserve;
