import Image from "next/image";
import React from "react";
import Jali from "./spa-components/jali";
import Images from "./spa-components/Images";
import SplideImages3 from "./spa-components/spide3";
import Kili from "./spa-components/Kir";
import Soul from "./spa-components/Soul";

function index() {
  return (
    <div className="mt-[230px] wrapper">
      <Image
        width="400"
        height="400"
        alt=""
        src="/spa/spa1.jpg"
        className="w-full h-[400px]"
      />
      <h1 className="text-5xl text-center my-[50px]">
        Soneva Soul at Our Resorts
      </h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        Each Soneva Soul wellness centre is built in perfect harmony with its
        breath-taking surrounds, elevating your wellness experience far beyond
        pampering treatments or traditional spa therapies.
      </p>
      <Jali />
      <Images />
      <h1 className="text-5xl text-center my-[50px]">
        Soneva Soul, Soneva Fushi
      </h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        Reconnect with nature at the original barefoot hideaway in the Maldives
        Baa Atoll. Soneva Soul at Soneva Fushi offers transformative treatments
        in an idyllic tropical island setting. Encircled by the islands lush
        jungle, the two-storey wellness complex is inspired by its tranquil
        location, inviting guests to rejuvenate, restore and relax.
      </p>
      <SplideImages3/>
      <Kili/>
      <Soul/>
    </div>
  );
}

export default index;
