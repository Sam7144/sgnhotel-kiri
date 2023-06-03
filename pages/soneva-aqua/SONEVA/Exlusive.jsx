import Image from 'next/image'
import React from 'react'

function Exlusive() {
  return (
    <div className='p-2 '>
        <h1 className='text-center text-3xl mb-10'>Exclusive offers</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-center'>
        <div className='exp1 relative pt-4 pl-3 '>
            <h1 className='bg-white border rounded-md w-[90%] text-center sm:w-[70%] md:w-[60%] lg:w-[55%] cursor-pointer p-3 '>Experience More</h1>
        </div>
        <div className=' flex flex-col pt-4 pl-3 w-full gap-15 lg:gap-5'>
            <h1 className='py-3'>Soneva fushi</h1>
            <h2 className='pb-3'>sea,sand and sail</h2>
            <p className='w-full w-full'>Discover the breath-taking maldivies with a 6-day,5-night combination package
                 enjoy a 1-night full bondage ...
            </p>
        </div>
        <div className='exp2 relative pt-4 pl-3 my-4 lg:my-0'>
            <h1 className='bg-white border rounded-md w-[90%] text-center sm:w-[70%] md:w-[60%] lg:w-[55%] cursor-pointer p-3'>Experience More</h1>
        </div>
        <div className=' flex flex-col pt-4 pl-3 w-full gap-15 lg:gap-5'>
            <h1 className='py-3'>Soneva aqua</h1>
            <h1 className='pb-3 text-3xl opacity-60'>Ocean Adventure</h1>
            <p className='w-full'>Emabark on unforgetable tour on maldivies with a 6-day,5-night combination package
                 enjoy a 1-night full bondage ...
            </p>
        </div>
        </div>
    </div>
  )
}

export default Exlusive