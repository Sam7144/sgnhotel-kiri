import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="mt-[230px]">
      <Image
        src="/dinning/flower.webp"
        width={400}
        height={400}
        className="
        w-full object-cover h-[400px]
        "
        alt=""
      />
      <h1 className="text-center text-2xl opacity-80 py-6">Events Calendar</h1>
      <h1 className="text-center text-5xl opacity-90 py-6">Soneva Stars</h1>
      <p className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto pb-5 text-center">
        This year, there’s no better time to visit Soneva. Introducing our
        Soneva Stars Programme, which celebrates the diverse array of guest
        activities and experiences on offer this year, ranging from
        Michelin-starred chefs to sporting legends and acclaimed therapists.
      </p>
      <div className="sm:flex justify-center w-[90%] md:w-[70%] mx-auto gap-10">
        <Image src="/dinning/event2.jpg" width="400" height={400} alt=""
        className="w-full sm:w-[50%] h-[400px] pb-5"
        />
        <div className=" sm:w-[50%] pb-5">
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">Dazzling Dining</h1>
          <h1 className="text-3xl pt-0 pb-5 text-center sm:text-left">Offer</h1>
          <p className="text-center sm:text-left opacity-70">
            Book to stay between now and April 8, 2023, and enjoy exquisite
            cuisine by multi-award-winning chefs for just THB 750 per person.
            Dine on exquisite cuisine by multi-award-winning chefs Mark
            Lundgaard, Judy Joo, Esther Choi, Jonathan Zandbergen and Kamilla
            Seidler while staying at our luxurious barefoot hideaway on Koh
            Kood.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
