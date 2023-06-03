import Image from 'next/image'
import React from 'react'

function Thai() {
  return (
    <div className='md:flex justify-center p-2 overflow-x-hidden w-[90%] mx-auto'>
        <div className='w-full md:w-[49%] flex justify-center gap-6 mr-6 py-[15px] items-start'>
            <Image src='/dinning/thai1.jpg' width='200' height='200' className='w-1/2 h-full' alt=''/>
            <div className='w-1/2'>
                <h2 className='pb-4 opacity-80'>Mexican <span>Thai</span></h2>
                <h1 className='pb-4 opacity-70'>Colors of The Garden</h1>
                <p className='text-sm opacity-90 md:w-[80%]'>The experience include a journey through the Oragnic Garden
                    a Medicinal Mixology cocktail with the Botanical Bartender and stargazing
                </p>
            </div>
        </div>
        <div className='w-full md:w-[49%] flex justify-center gap-6 mr-6 py-[15px] items-start'>
        <Image src='/dinning/thai2.webp' width='200' height='200' className='w-1/2 h-full' alt=''/>
        <div className='w-1/2'>
                <h2 className='pb-4 opacity-80'>Asian,Mediterranean and Europe</h2>
                <h1 className='pb-4 opacity-70'>Dinning Room</h1>
                <p className='text-sm opacity-90 md:w-[80%]'>Perched atop rocky cliffs,The Dinning Room entreats you to share in moments.At breakfast, bask is 
                    a leisurery ambiance as you choose from an array of entcing morning delights take your pick from a wealth
                    of global dishes and specialists at dinner 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Thai