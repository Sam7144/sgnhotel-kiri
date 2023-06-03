import Image from "next/image";
import React from "react";

function View() {
  return (
    <div className="p-2 md:flex justify-center w-full md:w-[80%] gap-6 mx-auto my-[70px]">
      <Image
        src="/dinning/heading.webp"
        height={400}
        width={400}
        className="w-full md:w-[50%] pb-7"
        alt=""
      />
      <div className="w-full md:w-[50%] pb-7">
        <h1 className="text-4xl font-normal text-center md:text-left pb-7">
          The View
        </h1>
        <p className="opacity-70 text-center md:text-left">Nikkei (Japanese and Peruvian fusion)</p>
        <p className="opacity-70 text-center md:text-left">
          Take in the stunning view out across the Gulf of Thailand while
          experiencing Nikkei cuisine, a fusion of flavours from Japan and Peru.
          Chef Christophe effortlessly blends the delicacy and nuance of
          Japanese culinary traditions with the vibrant and zesty flavours of
          Peru.
        </p>
        <p className="opacity-70 text-center md:text-left">
          Open for dinner (usually closed on Wednesday and Sunday). This
          restaurant will be closed between March 11  31, 2023. The menu will
          be served at the Lunar Deck.
        </p>
      </div>
    </div>
  );
}

export default View;
