import Image from "next/image";
import React from "react";

function Aqua() {
  return (
    <div className="w-full my-[30px]">
      <div className="md:w-[70%] mx-auto md:flex items-start justify-center gap-10">
        <Image src="/images/aq2.webp" width={300} height={300} className="
        w-full md:w-[300px]
        " alt=""></Image>
        <div className="flex flex-col">
          <h1 className="opacity-70 text-3xl pb-5 text-center md:text-left">Soneva in Aqua</h1>
          <p className="opacity-50 pb-4">
            An ultra-luxurious 23-metre yacht, Soneva in Aqua combines Soneva’s
            signature hospitality with the freedom of a private charter. Sailing
            from Soneva Fushi and Soneva Jani in the Maldives, voyages range
            from day trips to longer, live-aboard adventures.
          </p>
          <p className="opacity-50 text-center md:text-left pb-4">
            Ideal for up to four adults and two children, the two-bedroom yacht
            has spacious decks and elegant interiors, including an on-deck
            Jacuzzi, dining areas, and glass-bottomed spa tub. The experienced
            crew onboard includes the captain, local skipper and fishing guide,
            Barefoot Guardian, chef, wellness therapist and mechanic. On
            request, they can also be joined by a dive master, surf instructor,
            astronomer or digital storyteller to capture photos and videos.
          </p>
          <p className="opacity-50 pb-4 text-center md:text-left">
            Each bespoke trip is tailored to guests’ needs, whether they want to
            explore the best surf breaks or dive spots, drop anchor at deserted
            islands, or simply sail towards the sunset.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aqua;
