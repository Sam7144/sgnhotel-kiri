import Image from "next/image";
import React from "react";

function Spirited() {
  return (
    <div className="p-2 md:flex justify-center w-full md:w-[80%] gap-6 mx-auto my-[100px]">
      <Image
        src="/dinning/spirited.jpg"
        height={400}
        width={400}
        className="w-full md:w-[50%] pb-7"
        alt=""
      />
      <div className="w-full md:w-[50%] pb-7">
        <h1 className="text-4xl font-normal text-center md:text-left">
          So Spirited
        </h1>
        <p className="opacity-70 py-4 text-center md:text-left">Tapas and beverages</p>
        <p className="opacity-70 text-center md:text-left">Nikkei (Japanese and Peruvian fusion)</p>
        <p className="opacity-70 text-center md:text-left">
          So Spirited is our poolside restaurant perched on a cliff, overlooking
          the sea beyond. Savour sweet juices from local Thai fruits, snack on
          late-afternoon bites, and enjoy a wide range of cocktails and
          mocktails to cool off after a day in the sun.
        </p>
        <p className="opacity-70 text-center md:text-left">
        Open for lunch and dinner
        </p>
      </div>
    </div>
  );
}

export default Spirited;
