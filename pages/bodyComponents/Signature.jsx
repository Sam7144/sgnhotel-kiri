import Link from 'next/link'
import React from 'react'

function Signature() {
  return (
    <div className='mt-[100px] mb-[50px] pb-[20px] w-full  bg-pink-100'>
        <div className='w-[90%] mx-auto text-center'>
        <h1 className='py-5 text-3xl'>Signature Luxury Meets Thai hospitality</h1>
        <p className=''>
            Thirty three private Villas range from one to five bedrooms.Whether next 
            to beach,hidden in the jungle on hillsides or commanding spectacular views from
            clifftops,each has a private pool,vast indoor and outdoor living spaces and verdant gardens
            .Every Villa comes with electric buggy or biscycles to explore Soneva Kiris winding forest 
            paths and all have a Barefoot Guardian,offering a personalized sercice 24/7
        </p>
        <Link href="/" legacyBehavior passHref>
              <a className="py-3 underline cursor-pointer">Discover Our Villas</a>
            </Link>
    </div>
    </div>
  )
}

export default Signature