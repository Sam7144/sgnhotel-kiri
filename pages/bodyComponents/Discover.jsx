import Image from "next/image";
import Link from "next/link";
import React from "react";

function Discover() {
  return (
    <div className="wrapper">
      <h1 className="text-2xl pb-4 text-center lg:text-left">Discover Soneva Kiri</h1>
      <div className="lg:flex items-start justify-between">
        <div className="w-full lg:w-[32%] text-center lg:text-left">
          <Image
            src="/images/son1.jpg"
            width={400}
            height={400}
            className="object-cover 
          w-full
          "
            alt=""
          ></Image>
          <h1 className="py-3">Villa Suites And Reserves</h1>
          <p>
            Expansive one to five bedrooms luxury villa blend semelessly with
            island natural beauty .Surrounded by tropical garden with private
            pools and secluded,open-air,bathrooms ,choosen from beachside,jungle
            or spectacular clifftop setting
          </p>
          <Link href="/" legacyBehavior passHref>
            <a className="py-3 cursor-pointer underline">Discover More</a>
          </Link>
        </div>
        <div className="w-full lg:w-[32%] text-center lg:text-left">
          <Image
            src="/images/son2.webp"
            width={400}
            height={400}
            className="object-cover 
          w-full
          "
            alt=""
          ></Image>
          <h1 className="py-3">Soneva unlimited</h1>
          <p>
            indulge in every facet of soneva kiri including unlimited dining and
            access to visting michelin-starred chefs,unlimited rare
            experiences,limitless spa treatment and so much for usd 870 per
            person,per day
          </p>
          <Link href="/" legacyBehavior passHref>
            <a className="py-3 underline cursor-pointer">Discover More</a>
          </Link>
        </div>
        <div className="w-full lg:w-[32%] text-center lg:text-left">
          <Image
            src="/images/son3.webp"
            width={400}
            height={400}
            className="object-cover 
          w-full
          "
            alt=""
          ></Image>
          <h1 className="py-3">Intuitive wellness</h1>
          <p>
            The Soneva Kiri spa is a tranquil haven where professionals
            wellensee journys are infused with the traditional thai healing
            knowledge.Indulge in relaxing or restoring rituals reconnect through
            yoga and meditation and join expert led programmes
          </p>
          <Link href="/" legacyBehavior passHref>
            <a className="py-3 underline cursor-pointer">Discover More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Discover;
