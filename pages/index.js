import Untouched from '@/pages/bodyComponents/Untouched'
import Head from 'next/head'
import Image from 'next/image'
import Discover from './bodyComponents/Discover'
import Signature from './bodyComponents/Signature'
import Offer from './bodyComponents/Offer'
import Advert from './bodyComponents/Advert'
import Craft from './bodyComponents/Craft'
import Stars from './bodyComponents/Stars'

export default function Home() {
  return (
    <>
      <Head>
        <title>SGN Hotel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className='wrapper'>
      <div className='sonera flex flex-col items-center justify-center mt-[230px]'>
        <h1 className='text-5xl text-white font-semibold'>Soneva Kiri</h1>
      </div>
    <Untouched/>
    <Discover/>
    <Signature/>
    <Offer/>
    <Advert/>
    <Craft/>
    <Stars/>
     </main>
    </>
  )
}
