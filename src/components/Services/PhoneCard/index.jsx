import React from 'react'
import Image from '../../../Assets/templatemo_573_eduwell/assets/images/testimonials-left-dec.png'
import Image2 from '../../../Assets/templatemo_573_eduwell/assets/images/testimonials-right-dec.png'
import Img from '../../../Assets/templatemo_573_eduwell/assets/images/service-icon-01.png'
import ImagePhone from '../../../Assets/templatemo_573_eduwell/assets/images/featured-product.jpg'

const PhoneCard = () => {
    return (
        <div style={{ backgroundImage: `url(${Image2})`, backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', height: '80vh' }}>
            <div className=''>
                <div style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'left top', backgroundRepeat: 'no-repeat', height: '60vh' }} className='w-full sm:w-full md:mt-56 lg:mt-44 xl:w-full xl:mt-20'>
                    <div className='grid justify-center text-center'>
                        <p className='text-[#7A7A7A] text-[13px] font-medium'> FEATURED SERVICE</p>
                        <p className='gap-[4%] justify-center items-center text-[28px] font-bold'> Best Of Our<span className='text-[#dc8cdb] px-2 items-center'>Product</span></p>
                    </div>
                    <div className='grid w-full xl:flex xl:w-full md:w-full lg:flex lg:w-[100%] mt-10 items-center justify-center'>
                        <div className='grid gap-14 xl:ml-10'>
                            <div className='w-[70%] px-6 text-right lg:w-full xl:w-[60%] grid gap-2 h-52 shadow-lg rounded-xl'>
                                <div className='flex justify-center shadow-lg w-20 h-10 ml-44 -mt-10'> <img className='w-12' src={Img} alt="" /></div>
                                <p className="text-xl font-extrabold">Best Strategy</p>
                                <p className="font-normal"> Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.</p>
                            </div>
                            <div className='w-[70%] px-6 text-right lg:w-full xl:w-[60%] grid h-52 gap-2 py-4 shadow-lg rounded-xl'>
                                <div className='flex justify-center shadow-lg w-20 h-10 ml-44 -mt-10'> <img className='w-12' src={Img} alt="" /></div>
                                <p className="text-xl font-extrabold">Best Strategy</p>
                                <p className="font-normal"> Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.</p>
                            </div>
                        </div>
                        <div className='w-[100%] xl:w-[40%]'>
                            <img className='w-[80%] xl:w-[100%] pb-20' src={ImagePhone} alt="" />
                        </div>
                        <div className='grid gap-14'>
                            <div className='w-[70%] px-6 text-right lg:w-full xl:w-[60%] grid gap-2 h-52 py-4 shadow-lg rounded-xl'>
                                <div className='flex justify-center shadow-lg w-20 h-10 -mt-10'> <img className='w-12' src={Img} alt="" /></div>
                                <p className="text-xl font-extrabold">Best Strategy</p>
                                <p className="font-normal"> Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.</p>
                            </div>
                            <div className='w-[70%] px-6 text-right lg:w-full xl:w-[60%] grid gap-2 h-52 py-4 shadow-lg rounded-xl'>
                                <div className='flex justify-center shadow-lg w-20 h-10 -mt-10'> <img className='w-12' src={Img} alt="" /></div>
                                <p className="text-xl font-extrabold">Best Strategy</p>
                                <p className="font-normal"> Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default PhoneCard