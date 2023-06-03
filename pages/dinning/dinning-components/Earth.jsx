import Image from "next/image";
import React from "react";

function Earth() {
  return (
    <div className="p-2 md:flex justify-center w-full md:w-[80%] gap-6 mx-auto my-[70px]">
      <Image
        src="/dinning/earth.webp"
        height={400}
        width={400}
        className="w-full md:w-[50%] pb-7 md:object-contain"
        alt=""
      />
      <div className="w-full md:w-[50%] pb-7">
        <h1 className="text-4xl font-normal text-center md:text-left pb-7">
          Down to Earth
        </h1>
        <p className="opacity-70 text-center md:text-left">Indian | Destination Dining</p>
        <p className="opacity-70 text-center md:text-left">
          Visit Down to Earth to discover delectable dishes that can trace their
          culinary heritage back to the days of the Indian Maharajahs, Maharanis
          and their lavish palaces. Dine on a sumptuous menu spiced with the
          subtle flavours of Indias traditional Northern Frontier cuisine and a
          touch of the Middle East.
        </p>
        <p className="opacity-70 text-center md:text-left">
        Available on Monday, Friday and Saturday
        </p>
      </div>
    </div>
  );
}

export default Earth;
