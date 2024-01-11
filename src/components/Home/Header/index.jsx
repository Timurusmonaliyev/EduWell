import React from 'react'
import Image from '../../../Assets/templatemo_573_eduwell/assets/images/banner-right-image.png'
import BackgroundImage from '../../../Assets/templatemo_573_eduwell/assets/images/banner-right-dec.png'
import BackgroundImage2yani1 from '../../../Assets/templatemo_573_eduwell/assets/images/banner-left-dec.png'


const Header = () => {
  return (
    <div className='container w-[100%] sm:grid md:grid lg:flex lg:mt-10 xl:flex xl:mt-16 text-left'>
      <div className='w-[100%] text-center sm:w-[100%] lg:text-left lg:pl-10 md:w-[90%] md:mt-10 xl:w-[50%] xl:text-left xl:px-28 xl:mt-28' style={{ backgroundImage: `url(${BackgroundImage2yani1})`, backgroundPosition: '0%', backgroundRepeat: 'no-repeat', height: '100vh',backgroundSize:'trasparent' }}>
        <p className='text-[#7A7A7A] text-[17px] font-medium'>Welcome To Our School</p>
        <h2 className='text-[64px] text-[#111111] font-black leading-none mt-4 pb-10'>Best Place To Learn Graphic <span className='text-left text-[#dc8cdb] font-[Open Sans] font-black'>Design!</span></h2>
        <div class="main-button-gradient">
          <div class="scroll-to-section"><a href="#contact-section">Join Us Now!</a></div>
        </div>
      </div>
      <div className='w-[100%] sm:w-full md:w-[100%] lg:w-[70%] xl:w-[60%]' style={{ backgroundImage: `url(${BackgroundImage})`, backgroundPosition: '100% 0%', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <img className='w-[100%] sm:w-full md:w-[100%] lg:w-[90%] xl:w-[64%] xl:ml-44' src={Image} alt="" />
      </div>
    </div>
  )
}

export default Header