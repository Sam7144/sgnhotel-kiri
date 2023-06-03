import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

function Dining() {
    const splideOptions = {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };
  return (
    <div>
        <h1 className="text-center my-[50px] text-3xl opacity-40">Dinning Experiences</h1>
        <p className="w-[70%] text-center mx-auto pb-[30px]">The Soneva in Aqua crew comes with your dedicated chefs.Every Meal is tailored to you,
            whether a healthy sunrise breakfast on deck,a barbecue with catch of the day on diserted island or
            a Maldivian banquest under the stars.The freedom of choice is yours under high stars
        </p>
        <div className="w-[90%] mx-auto">
        <Splide aria-label="My Favorite Images" options={splideOptions} >
          <SplideSlide>
           <Image  src="/images/dn1.jpg" className="object-fit"  width={300} height={300} alt="Image 1" />
        
          </SplideSlide>
          <SplideSlide>
            <Image  src="/images/dn2.jpg" className="object-fit" width={300} height={300} alt="Image 1" />
            
          </SplideSlide>
          <SplideSlide>
          <Image  src="/images/dn3.jpg" className="object-fit"  width={300} height={300} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
          <Image  src="/images/dn4.jpg" className="object-fit"  width={300} height={300} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
          <Image  src="/images/dn5.webp" className="object-fit"  width={300} height={300} alt="Image 1" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default Dining