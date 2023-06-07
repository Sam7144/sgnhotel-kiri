"use client"
import Image from "next/image";
import React from "react";
import Villa from "./villa-components/Villa";
import Form from "../soneva-aqua/SONEVA/Form2";

function index() {
  return (
    <div className="mt-[230px] wrapper w-full mx-auto">
      <Image
        width="400"
        height="400"
        alt=""
        src="/new/d4.jpg"
        className="w-full h-[400px] object-fill"
      />
      <h1 className="text-2xl text-center my-[50px]">Browse our</h1>
      <h1 className="text-5xl text-center my-[50px]">
        Luxury Villas in Thailand
      </h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        Located in a tropical rainforest, on an unspoiled island with some of
        the best beaches in Thailand, Soneva Kiri offers an unparalleled blend
        of luxury and eco-friendly design. This extraordinary island hideaway
        comprises 33 expansive one to five bedroom pool luxury villas that blend
        seamlessly with the islands natural beauty.
      </p>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        Choose from our sprawling 3 Bedroom Beach Pool Reserve perched atop 
        cliffs or find yourself right on the sandy shores in one of our 1 Bedroom Beach Pool Suites
      </p>
      <Villa/>
      <Form/>
    </div>
  );
}

export default index;
