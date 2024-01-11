import React from 'react'
import Navbar from '../Home/Navbar'
import Karusel from './Karusel'
import BannerImg from './BannerImg'
import PhoneCard from './PhoneCard'
import ContactFooter from '../AboutUs/ContactFooter'

const OurServices = () => {
  return (
    <div>
      <Navbar />
      <div className='xl:pt-20 pb-20 grid text-center items-center justify-center xl:w-full'>
        <div className=''>
          <p className='text-gray-500 font-medium'> What We Do</p>
          <p className="text-6xl font-extrabold"> Our Services</p>
        </div>
      </div>
      <div className='w-[80%] pt-10 ml-8 lg:ml-20 md:ml-20 md:py-10 lg:mt-10 xl:-mt-10 text-center xl:ml-32 items-center justify-center'>
        <hr />
      </div>
      <Karusel />
      <BannerImg />
      <div className="pb-96"><PhoneCard /></div>
      <div className=""><ContactFooter /></div>


    </div>
  )
}

export default OurServices