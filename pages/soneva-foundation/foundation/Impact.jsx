import Image from "next/image";
import React from "react";

function Impact() {
  return (
    <div>
      <div className="sm:flex justify-center w-[90%] md:w-[70%] mx-auto gap-10 mb-[100px]">
        <Image
          src="/foundation/f15.webp"
          width="400"
          height={400}
          alt=""
          className="w-full sm:w-[50%] h-[400px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center">Impact Investing</h1>
          <p className="text-center  opacity-70">
            We are constantly looking for partners to work with. To make a
            greater impact we are interested in investments in our existing and
            potentially new projects. For some projects we can look at
            investment options where we are able to recover funds invested
            either in full or partially. If you are interested kindly contact us
            and we will discuss options.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
