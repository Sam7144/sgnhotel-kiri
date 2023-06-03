import Image from 'next/image'
import React from 'react'

function Tuk() {
  return (
    <div className='p-2 md:flex justify-center w-full md:w-[80%] gap-6 mx-auto my-[20px]'>
        <Image src='/dinning/flower.webp' height={400} width={400} className='w-full md:w-[50%] pb-7' alt=''/>
        <div className='w-full md:w-[50%] pb-7'>
            <h1 className='text-4xl font-normal text-center md:text-left'>Kruua Mae Tuk</h1>
            <h1 className='text-4xl font-normal text-center md:text-left'>(Tuks Kitchen)</h1>
            <h3 className='py-5 opacity-70 text-center md:text-left'>Traditional Thai</h3>
            <p className='opacity-70 text-center md:text-left'>
                Thai Gourment reastaurant with with no -menu dinning concept and a vast selection
                dishes that are inspired by ingrdeinets grown from koh Kood and seafood caught by local fishermen
            </p>
            <p className='opacity-70 text-center md:text-left'>
                open for dinner(except wednesday and sunday).The menu is being served at lunar Deck
            </p>
        </div>
    </div>
  )
}

export default Tuk