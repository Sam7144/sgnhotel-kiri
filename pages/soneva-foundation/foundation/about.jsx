import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <div className="sm:flex justify-center w-[90%] md:w-[70%] mx-auto gap-10 mb-[100px]">
        <Image
          src="/foundation/f8.webp"
          width="400"
          height={400}
          alt=""
          className="w-full sm:w-[50%] h-[400px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center">
            About the Soneva
          </h1>
          <h1 className="text-3xl pt-0 pb-5 text-center ">
            Foundation
          </h1>
          <p className="text-center  opacity-70">
            The Soneva Foundation a registered charity in the UK with
            registration number 1138811.
          </p>
          <p className="text-center opacity-70">
            The Trustees are Sonu Shivdasani, Eva Malmstrom Shivdasani, and
            Bruce Bromley. The Secretary of the Soneva Foundation is Arnfinn
            Oines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
