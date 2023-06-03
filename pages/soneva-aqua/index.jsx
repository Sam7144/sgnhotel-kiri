import React from 'react'
import Aqua from './SONEVA/Aqua'
import SplideImages from './SONEVA/splide'
import Exlusive from './SONEVA/Exlusive'
import Testimonials from './SONEVA/Testimonials'
import Dining from './SONEVA/Dining'
import Wellness from './SONEVA/Wellness'
import Form from './SONEVA/Form2'

function index() {
  return (
    <div className='wrapper mt-[230px] w-full'>
      <div className='  mx-auto aqua text-white  flex flex-col items-center justify-center'>
        <h1 className='text-5xl w-[90] md:w-[40%] text-center font-medium'>Our Luxury Yatcht in The Maldivies</h1>
        <p className='w-95 md:w-[60%] text-center pt-5'>Explore the Indian Ocean in Aqua a sophisicated 23-metre that combines our 
          signature luxury with a sense of freedom  and adventure

        </p>
      </div>
      <Aqua/>
      <SplideImages/>
      <Exlusive/>
      <Testimonials/>
      <Dining/>
      <Wellness/>
  
    </div>
  )
}

export default index