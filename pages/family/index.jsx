import Image from "next/image";
import React from "react";
import Images from "./family-components/Image";
import Jali from "./family-components/Den";
import Jali2 from "./family-components/Workshops";
import Villa from "./family-components/familyVanilla";

function index() {
  return (
    <div className="wrapper mt-[230px]">
      <Image
        width="400"
        height="400"
        alt=""
        src="/new/d2.jpg"
        className="w-full h-[400px] object-fill"
      />
      <h1 className="text-5xl text-center my-[50px]">
        A Family Resort in Thailand
      </h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        When we envisioned Soneva Kiri, we knew wanted to do something special
        for the children. Something incredibly special, and so we created the
        Den and the Eco Den.
      </p>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        Discover Soneva Kiri through a childs eyes.
      </p>
      <h1 className="text-5xl text-center my-[50px]">The Den</h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto mb-[100px] text-center">
        The Den is our pride and joy. When we envisioned Soneva Kiri, we knew
        wanted to do something special for children. Incredibly special. If we
        wanted to rekindle a childlike wonder in adults, then we had to go
        profusely over the edge in our childrens offering. A giant moulded
        bamboo playground shaped like a manta ray, The Den is dedicated to
        learning, to excitement, to meaningful experiences. Professional child
        minders pique your childrens imaginations, teaching them to play Thai
        instruments, unleashing their creative talents with painting and the
        visual arts, and carefully watching them at play in the wonderous world
        of moulded bamboo spaces up, down and around.
      </p>
      <Images/>
      <Jali/>
      <Jali2/>
      <Villa/>
    </div>
  );
}

export default index;
