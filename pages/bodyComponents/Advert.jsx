import Image from 'next/image'
import React from 'react'

function Advert() {
  return (
    <div className='mb-[20px] grid grid-cols-1 items -start sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 '>
        <Image src='/images/sont1.jpg' width='400' height='400'
        className='w-full object-contain gap-6 '
        alt=''/>
        <Image src='/images/sont2.jpg' width='400' height='400' 
        className='w-full object-contain mt-[10px]'alt=''/>
        <Image src='/images/sont3.jpg' width='400' height='400'
        className='w-full object-contain mt-[10px] ' alt=''/>
        <Image src='/images/sont4.webp' width='400' height='400'
        className='w-full object-contain mt-[10px] ' alt=''/>
    </div>
  )
}

export default Advert