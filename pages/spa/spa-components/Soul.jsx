import Image from "next/image";
import React from "react";

function Soul() {
  return (
    <div className="mt-[100px]">
      <div className="sm:flex justify-center w-[90%] md:w-[70%] mx-auto gap-10 mb-[100px]">
        <Image
          src="/spa/soul.jpg"
          width="400"
          height={300}
          alt=""
          className="w-full sm:w-[50%] h-[400px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">
            Soneva Soul
          </h1>
          <p className="text-center sm:text-left opacity-70">
            Soneva Soul is a new, transformative wellness concept that blends
            thousands of years of ancient healing wisdom with the latest science
            and innovation. Guided by the principle of lifestyle evolution,
            our experienced therapists, medical experts and wellness specialists
            create personalised wellness experiences that empower you to realise
            your utmost potential, achieve your long-term wellness goals and
            reconnect your mind, body and soul.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Soul;
