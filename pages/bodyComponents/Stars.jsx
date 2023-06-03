import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Stars() {
  return (
    <div className='mb-[20px] md:flex items-start justify-center'>
        <div className='w-full md:w-[35%]'>
            <Image src='/images/stars.jpg' width='400' height='400'className='w-full md:w-[400px]' alt=''/>
        </div>
        <div  className='w-full md:w-[35%] text-center'>
            <h1 className='py-4 text-2xl'>Discover Our Best Offers</h1>
            <p className='pb-4 opacity-50'>
                Browse our signare Offers for every occassion,from family-friendly 
                packages to romatic gataways.Book direct for our best price guarantee
                ,plus complimentary services and experiences.Contact Our reservation team to
                customize your dream Soneva Holiday
            </p>
            <Link href='/' legacyBehavior passHref>
                <a className='underline py-4'>Book Now</a>
            </Link>
        </div>
    </div>
  )
}

export default Stars