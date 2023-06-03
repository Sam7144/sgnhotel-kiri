import Image from "next/image";
import React from "react";

function Jali() {
  return (
    <div >
      <div className="sm:flex justify-center w-[90%] md:w-[70%]  mx-auto gap-10 mb-[100px]">
        <Image
          src="/spa/spa1.jpg"
          width="400"
          height={400}
          alt=""
          className="w-full sm:w-[50%] h-[400px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">
            Soneva Soul,
          </h1>
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">
            Soneva Jani
          </h1>
          <p className="text-center sm:text-left opacity-70">
            Surrounded by the majesty of nature, Soneva Souls three-level
            Island Spa complex at Soneva Jani is linked by raised walkways that
            wind among the trees. Complementing the existing Over-water Spa at
            The Gathering, it includes open-air treatment rooms, consultation
            suites, integrative medicine rooms, a state-of-the-art gym and juice
            bar. A yoga pavilion and meditation platform sit high above the tree
            line, offering 360-degree views across the turquoise private lagoon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jali;
