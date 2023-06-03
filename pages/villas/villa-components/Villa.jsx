import Image from "next/image";
import React from "react";
function Villa() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-[90%] mx-auto md:gap-10">
      <div className="mb-5">
        <Image src="/villa/i1.jpg" width="300" height="400" alt="" 
        className="w-full md:w-[300px] "
        />
        <h3 className="text-center md:text-left py-4 opacity-70">1 BedRoom BayView Villa</h3>
        <h1 className="text-center md:text-left text-2xl">BayView Pool Villa Suite</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left ">With a view into the beauty bay,this villa offer a private pool and an open air 
          bathroom nesteled with in the jungle
        </p>
      </div>
      <div className="mb-5">
        <Image src="/villa/i6.jpg" width="300" height="400"
        className="w-full md:w-[300px] "
        alt="" />
        <h3 className="text-center md:text-left py-4 opacity-70">1 BedRoom SunSet Ocean Villa View</h3>
        <h1 className="text-center md:text-left text-2xl">SunSet Ocean View Pool Villa Suite</h1>
        <p className="w-[90%] text-center md:text-left pt-2 ">
          Penched high on the cliff this villa offers majestic view,a private pool and 
          an open air bathroom 
        </p>
      </div>
      <div>
        <Image src="/villa/i3.jpg" width="300" height="400"
        className="w-full md:w-[300px] " alt="" />
        <h3 className="text-center md:text-left py-4 opacity-70">1 BedRoom Beach Villa</h3>
        <h1 className="text-center md:text-left text-2xl">Beach Pool Villa Suite</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
          This secluded villa offers direct beach access,a private pool an an open-air bathroom
        </p>
      </div>
      <div>
        <Image src="/villa/i4.jpg" width="300" height="400"
        className="w-full md:w-[300px] " alt="" />
        <h3 className="text-center md:text-left py-4 opacity-70">3 BedRoom Beach Villa</h3>
        <h1 className="text-center md:text-left text-2xl">3 BedsRooms Beach Pool Reserve</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
          A rustic chic-reserve perfect for families with treehouse with twin beds,water slide and
          is a secluded villa offers direct beach access,a private pool an an open-air bathroom
        </p>
      </div>
      <div>
        <Image src="/villa/i5.jpg" width="300" height="400"
        className="w-full md:w-[300px] " alt="" />
        <h3 className="text-center md:text-left py-4 opacity-70">4 BedRoom SunSet Ocean Villa View</h3>
        <h1 className="text-center md:text-left text-2xl">4BedRoom SunSet Ocean Villa Pool Reserve</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
          Contact our reservation team for availability and exclusive rates
        </p>
      </div>
      <div>
        <Image src="/villa/i6.jpg" width="300" height="400"
        className="w-full md:w-[300px] " alt="" />
        <h3 className="text-center md:text-left py-4 opacity-70">5 BedRoom BayView Villa</h3>
        <h1 className="text-center md:text-left text-2xl">5 BedRoom BayView Pool Reserve</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
        Contact our reservation team for availability and exclusive rates
        </p>
      </div>
      <div>
        <Image src="/villa/i4.jpg" width="300" height="400"
        className="w-full md:w-[300px] " alt="" />
        <h3 className="text-center md:text-left py-4 opacity-70">5 BedRoom SunSet Ocean View Villa </h3>
        <h1 className="text-center md:text-left text-2xl">5 BedRoom SunSet Ocean  View Pool Reserve</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
        Contact our reservation team for availability and exclusive rates
        </p>
      </div>
      <div>
        <Image src="/villa/i3.jpg" width="300" height="400"
        className="w-full md:w-[300px] " alt="" />
        <h3 className="text-center md:text-left py-4 opacity-70">5 BedRoom Beach Villa</h3>
        <h1 className="text-center md:text-left text-2xl">5 BedRoom Beach Pool Reserve</h1>
        <p className="w-[90%]  pt-2 text-center md:text-left">
        Contact our reservation team for availability and exclusive rates
        </p>
      </div>
    </div>
  );
}

export default Villa;
