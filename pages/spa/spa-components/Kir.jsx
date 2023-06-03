import Image from "next/image";
import React from "react";

function Kili() {
  return (
    <div className="mt-[100px]">
      <div className="sm:flex justify-center w-[90%] md:w-[70%] mx-auto gap-10 mb-[100px]">
        <Image
          src="/spa/kiri.webp"
          width="400"
          height={300}
          alt=""
          className="w-full sm:w-[50%] h-[400px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">
            Soneva Kiri Spa
          </h1>
          <p className="text-center sm:text-left opacity-70">
            Hidden away within Koh Koods pristine rainforest, the Soneva Kiri
            Spa is a peaceful setting infused with traditional Thai charm. The
            complex includes eight couples treatment rooms, a yoga pavilion
            with aerial yoga equipment, two consultation rooms, a Watsu pool, a
            spa beach sala with three treatment bays and an extensive gym. The
            tranquil organic spa garden has four stone beds and a bamboo mist
            shower.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kili;
