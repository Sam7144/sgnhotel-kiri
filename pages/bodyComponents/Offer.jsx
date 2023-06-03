import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Offer() {
  return (
    <div className='mb-[50px] pb-20px] md:flex items-start justify-center md:gap-10'>
        <div className='md:w-[30%] text-center'>
            <Image src='/images/son-t.webp' width='100' height='100' className='mx-auto' alt=''/>
            <h1 className='py-5 text-2xl opacity-40'>Follow us on LINE</h1>
            <h3 className='opacity-90'>
                Add us on line for the latest offers and exclusive events at Sonera Kiri Book with 
                easy by contacting our reservation team by scanning the QR CODE below

            </h3>
            <Link href="/" legacyBehavior passHref>
            <a className="pt-[20px] underline cursor-pointer">Discover More</a>
          </Link>
        </div>
        <div className='md:w-[40%]'>
            <Image src='/images/dis.webp' className='w-full md:w-[400px] mt-[20px]' width='400' height='400' alt=''/>
        </div>
    </div>
  )
}

export default Offer