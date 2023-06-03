import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="wrapper mt-[230px]">
        <Image
        width="400"
        height="400"
        alt=""
        src="/villa/l1.jpg"
        className="w-full h-[400px] object-fill"
      />
      <h1 className="text-5xl text-center my-[50px]">
        Discover Our Best Offers
      </h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        Browse our signature offers for every occasion, from family-friendly
        packages to romantic getaways. Book direct for our best price guarantee,
        plus complimentary services and experiences. Contact our Reservations
        Team to customise your dream Soneva holiday.
      </p>
    </div>
  );
}

export default index;
