import Image from "next/image";
import React from "react";

function Jali() {
  return (
    <div className="mt-[100px]">
      <div className="sm:flex justify-center w-[90%] md:w-[70%] mx-auto gap-10 mb-[100px]">
        <Image
          src="/villa/f.jpg"
          width="300"
          height={300}
          alt=""
          className="w-full sm:w-[50%] h-[300px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">
            The Eco Den
          </h1>
          <p className="text-center sm:text-left opacity-70">
            We offer a special programme aimed specifically at one to five
            year-olds in our Eco Den, making Soneva Kiri the only resort that
            offers such comprehensive, age-specific facilities. We continue to
            offer our specially curated Den programmes for children over 5 years
            and teenagers at the Eco Den and at other exciting locations around
            the island. At the Eco Den, the children get to play with toys and
            take part in activities, that meet Sonevas stringent standards of
            social and environmental responsibility. All children are looked
            after by qualified childcare experts, supported by local child
            carers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jali;
