import Image from "next/image";
import React from "react";

function Jali2() {
  return (
    <div className="mt-[100px]">
      <div className="sm:flex justify-center w-[90%] md:w-[70%] mx-auto gap-10 mb-[100px]">
        <Image
          src="/villa/f2.webp"
          width="300"
          height={300}
          alt=""
          className="w-full sm:w-[50%] h-[300px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">
            DIY Workshops
          </h1>
          <p className="text-center sm:text-left opacity-70">
            Young Sonevians can learn to do-it-themselves with a range of
            hands-on workshops that harness their creativity. With a focus on
            sustainability and upcycling, sessions can include designing and
            painting a t-shirt, decorating a bag, or creating a photo frame to
            take home as a souvenir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jali2;
