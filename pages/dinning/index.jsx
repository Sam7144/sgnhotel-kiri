import Image from 'next/image'
import React, { useState } from 'react'
import Soneva from './dinning-components/Soneva'
import Thai from './dinning-components/Thai'
import Tuk from './dinning-components/Tuk'
import View from './dinning-components/View'
import Spirited from './dinning-components/Spirited'
import Earth from './dinning-components/Earth'
import Wine from './dinning-components/Wine'

function index() {
  return (
    <div className='wrapper mt-[230px]'>
      <Image src='/new/d1.jpg' width={400} height={600}
      className='w-full  h-[500px]'
      alt=''></Image>
      <Soneva/>
      <Thai/>
      <Tuk/>
      <View/>
      <Spirited/>
      <Earth/>
      <Wine/>
    </div>
  )
}

export default index