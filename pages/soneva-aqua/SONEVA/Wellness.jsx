import Image from 'next/image'
import React from 'react'

function Wellness() {
  return (
    <div className='md:flex justify-center  gap-10 w-full my-[30px]'>
        <Image src='/images/spa.jpg' width='400' height='400'className='w-full md:w-[35%]' alt=''/>
        <div className='md:w-[35%]'>
            <h1 className='text-2xl text-center md:text-left pb-[30px]'>Wellness On Soneva In Aqua</h1>
            <p className='text-center md:text-left'>Our experienced crew include dedicated wellness and yoga experts.Start the day with sunrise
                yoga on deck,indulge in a massage,or meditate under star strewn skies
            </p>
        </div>
    </div>
  )
}

export default Wellness