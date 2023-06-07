import Image from "next/image";
import React from "react";
import About from "./foundation/about";
import SplideImages3 from "./foundation/splideFoundation";
import Foundation from "./foundation/foundation";
import Contact from "./foundation/Contact";
import Impact from "./foundation/Impact";

function index() {
  return (
    <div className="wrapper mt-[230px]">
      <Image
        width="400"
        height="400"
        alt=""
        src="/new/d2.jpg"
        className="w-full h-[400px]"
      />
      <h1 className="text-5xl text-center my-[50px]">Soneva Foundation</h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        The Soneva Foundation supports the development of projects that have a
        positive environmental, social and economic impact. Wherever possible,
        the Soneva Foundation uses impact investing principles, seeking to
        recover outlays through carbon finance, which in turn will be fed back
        into projects to help extend the reach and benefits to more families.
      </p>
      <SplideImages3/>
      <h1 className="text-5xl text-center my-[100px]">Soneva Foundations Projects</h1>
      <Foundation/>
      <About/>
      <Contact/>
      <Impact/>
    </div>
  );
}

export default index;
