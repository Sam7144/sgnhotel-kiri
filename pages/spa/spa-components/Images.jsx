import Image from 'next/image'
import React from 'react'

function Images() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto'>
            <Image src='/spa/spa1.jpg' width='300' height='300'
            className='w-full md:w-25% h-[300px] pb-5'
            alt=''/>
            <Image src='/spa/spa2.webp' width='300' height='300'
             className='w-full md:w-25% h-[300px] pb-5' alt=''/>
            <Image src='/spa/spa3.webp' width='300' height='300'
             className='w-full md:w-25% h-[300px] pb-5' alt=''/>
            <Image src='/spa/spa4.jpg' width='300' height='300'
             className='w-full md:w-25% h-[300px] pb-5' alt=''/>
        </div>
    </div> 
  )
}

export default Images