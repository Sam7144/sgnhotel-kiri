import Image from 'next/image'
import React from 'react'

function Foundation() {
  return (
    <div className='my-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto'>
        <div className='mb-4'>
            <Image src='/foundation/f13.webp' width='300' height='400'
            className='w-full md:w-[300px] h-[400]'
            alt=''/>
            <h1 className='text-center text-3xl pt-3 md:text-left pb-4'>Action Aganist Hunger</h1>
            <p className='opacity-70 text-center md:text-left'>
                Childhood manutration is a is potentially a fata health condition.
                The Soneva foundation works with Action Aganist Hunger to fight across the world.

            </p>
        </div>   
        <div className='mb-4'>
            <Image src='/foundation/f12.jpg' width='300' height='400'
            className='w-full md:w-[300px] h-[400]' alt=''/>
            <h1 className='text-center text-3xl pt-3 md:text-left pb-4'>Coral Propagation</h1>
            <p className='opacity-70 text-center md:text-left'>
                The Hornbill is an imporatnt species for the island as it helps spread 
                of bigger trees which improves bioderversity of forest.
            </p>
        </div> 
        <div className='mb-4'>
            <Image src='/foundation/f11.webp' width='300' height='400' 
            className='w-full md:w-[300px] h-[400]'
            alt=''/>
            <h1 className='text-center text-3xl pt-3 md:text-left pb-4'>Hornbill Reintroduction</h1>
            <p className='opacity-70 text-center md:text-left'>
                The Hornbill is an imporatnt species for the island as it helps spread 
                of bigger trees which improves bioderversity of forest.
            </p>
        </div>  
    </div>
  )
}

export default Foundation