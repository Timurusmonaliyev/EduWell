import React from 'react'
import Image from '../../../Assets/templatemo_573_eduwell/assets/images/cta-bg.png'
import Image2 from '../../../Assets/templatemo_573_eduwell/assets/images/cta-left-image.png'

const BannerImg = () => {
    return (
        <div>
            <div className='grid w-full h-[100vh] py-10 text-center items-center justify-center md:px-10 lg:flex xl:px-40 xl:flex gap-20 xl:mt-20' style={{ backgroundImage: `url(${Image})`, backgroundPosition: ' center right', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <div className='w-full md:w-full'>
                    <img className='w-[70%] mt-10 md:w-[100%] lg:w-[100%] xl:w-[100%]' src={Image2} alt="" />
                </div>
                <div className='w-[100%] text-white text-left px-8 md:w-[100%]'>
                    <p className='text-white text-[]'>Get the sale right now!</p>
                    <p className='xl:text-white text-[60px] font-black sm:w-full py-2'>Up to 50% OFF For 1+ courses</p>
                    <p className='text-white text-[15px] pb-4'>Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.</p>
                    <button className='bg-white rounded-md text-[#dc8cdb] px-6 py-2 '> VIEW COURSES</button>
                </div>
            </div>
        </div>
    )
}

export default BannerImg