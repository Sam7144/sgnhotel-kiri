/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
function SplideImages3() {
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
    <div className="w-[90%] mx-auto">
      <div>
        <Splide aria-label="My Favorite Images" options={splideOptions} >
          <SplideSlide>
           <Image  src="/spa/m1.jpg" className="object-fit"  width={300} height={300} alt="Image 1" />
        
          </SplideSlide>
          <SplideSlide>
            <Image  src="/spa/m2.webp" className="object-fit" width={300} height={300} alt="Image 1" />
            
          </SplideSlide>
          <SplideSlide>
          <Image  src="/spa/m3.jpg" className="object-fit"  width={300} height={300} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
          <Image  src="/spa/m4.webp" className="object-fit" width={300} height={300} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
          <Image  src="/spa/m5.webp" className="object-fit" width={300} height={300} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
          <Image  src="/spa/m6.jpg" className="object-fit" width={300} height={300} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
          <Image  src="/spa/m7.jpg" className="object-fit" width={300} height={300} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
          <Image  src="/spa/m6.jpg" className="object-fit" width={300} height={300} alt="Image 1" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default SplideImages3;
