import Image from "next/image";
import React from "react";
function Villa() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center w-[90%] mx-auto md:gap-10">
      <div className="mb-5">
        <Image
          src="/villa/c1.jpg"
          width="200"
          height="400"
          alt=""
          className="w-full md:w-[200px] "
        />
        <h1 className="text-center md:text-left text-2xl">
          Private Cinema Paradiso
        </h1>
        <p className="w-[90%]  pt-2 text-center md:text-left ">
          Watch classic movies under the stars at our jungle auditorium in the
          centre of a tropical lagoon. Recline on comfortable cushion
        </p>
      </div>
      <div className="mb-5">
        <Image
          src="/villa/c2.webp"
          width="200"
          height="400"
          className="w-full md:w-[200px] "
          alt=""
        />
        <h1 className="text-center md:text-left  text-2xl">
          Seven Days,Seven Beaches
        </h1>
        <p className="w-[90%] text-center md:text-left pt-2 ">
          Step aboard a wooden fishing boat to explore some of Thailands most
          beautiful beaches, bays and hidden cove
        </p>
      </div>
      <div>
        <Image
          src="/villa/c3.webp"
          width="200"
          height="400"
          className="w-full md:w-[200px] "
          alt=""
        />
        <h1 className="text-center md:text-left text-2xl">Dinning Cruises</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
          Set sail on a culinary adventure from the Soneva Kiri jetty on a
          traditional wooden boat. Start the day with a sunrise breakfast
        </p>
      </div>
      <div>
        <Image
          src="/villa/c4.jpg"
          width="200"
          height="400"
          className="w-full md:w-[200px] "
          alt=""
        />
        <h1 className="text-center md:text-left text-2xl">
          Ao Salat SeaFood BBQ
        </h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
          Step aboard a wooden boat and sip on a glass of Champagne as the sun
          sets on the horizon. When you arrive at Ao Salat
        </p>
      </div>
    </div>
  );
}

export default Villa;
