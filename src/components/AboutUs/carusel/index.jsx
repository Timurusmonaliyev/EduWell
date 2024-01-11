import React from 'react'
import Image from '../../../Assets/templatemo_573_eduwell/assets/images/testimonials-left-dec.png'
import Image2 from '../../../Assets/templatemo_573_eduwell/assets/images/testimonials-right-dec.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import Imagequota from '../../../Assets/templatemo_573_eduwell/assets/images/quote.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const Carusel = () => {
    return (
        <div className='sm:pt-28 md:pt-20 lg:mt-44 xl:-mt-20'>
            <div style={{ backgroundImage: `url(${Image2})`, backgroundPosition: '100% 60%', backgroundRepeat: 'no-repeat', height: '80vh' }}>
                <div style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat', height: '60vh' }} className='w-full sm:w-full md:mt-56 lg:-mt-44 xl:w-full xl:mt-20'>
                    <div className='grid justify-center text-center'>
                        <p className='text-[#7A7A7A] text-[13px] font-medium'> TESTIMONIALS</p>
                        <p className='gap-[4%] justify-center items-center text-[28px] font-bold'> What They<span className='text-[#dc8cdb] px-2 items-center'>Think</span></p>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={170}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <Swiper className='swipjon'>
                            <SwiperSlide id='slidelar' className=''>
                                <div className="w-[500px]">
                                    <div className="caruselcard text-center">
                                        <div>
                                            <i className="text-[16px] text-left text-[#141414]"> “just think about our website wherever you need free templates for your website”</i>
                                        </div>
                                        <div className='flex justify-between text-left items-end mt-10 px-4'>
                                            <div>
                                                <p className="text-xl text-[#141414] font-black"> Catherina Walk</p>
                                                <p className="text-sm text-[#dc8cdb] font-bold"> CEO & Founder</p>
                                            </div>
                                            <div>
                                                <img src={Imagequota} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id='slidelar' className=''>
                                <div className="w-[500px]">
                                    <div className="caruselcard text-center">
                                        <div>
                                            <i className="text-[16px] text-left text-[#141414]"> “Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”</i>
                                        </div>
                                        <div className='flex justify-between text-left items-end mt-10 px-4'>
                                            <div>
                                                <p className="text-xl text-[#141414] font-black"> David Martin</p>
                                                <p className="text-sm text-[#dc8cdb] font-bold"> CTO of Tech Comany</p>
                                            </div>
                                            <div>
                                                <img src={Imagequota} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id='slidelar' className=''>
                                <div className="w-[500px]">
                                    <div className="caruselcard text-center">
                                        <div>
                                            <i className="text-[16px] text-left text-[#141414]"> “just think about our website wherever you need free templates for your website”</i>
                                        </div>
                                        <div className='flex justify-between text-left items-end mt-10 px-4'>
                                            <div>
                                                <p className="text-xl text-[#141414] font-black"> Sophia Whity</p>
                                                <p className="text-sm text-[#dc8cdb] font-bold"> CEO and Co-Founder</p>
                                            </div>
                                            <div>
                                                <img src={Imagequota} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id='slidelar' className=''>
                                <div className="w-[500px]">
                                    <div className="caruselcard text-center">
                                        <div>
                                            <i className="text-[16px] text-left text-[#141414]"> “just think about our website wherever you need free templates for your website”</i>
                                        </div>
                                        <div className='flex justify-between text-left items-end mt-10 px-4'>
                                            <div>
                                                <p className="text-xl text-[#141414] font-black"> Catherina Walk</p>
                                                <p className="text-sm text-[#dc8cdb] font-bold"> CEO & Founder</p>
                                            </div>
                                            <div>
                                                <img src={Imagequota} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id='slidelar' className=''>
                                <div className="w-[500px]">
                                    <div className="caruselcard text-center">
                                        <div>
                                            <i className="text-[16px] text-left text-[#141414]"> “just think about our website wherever you need free templates for your website”</i>
                                        </div>
                                        <div className='flex justify-between text-left items-end mt-10 px-4'>
                                            <div>
                                                <p className="text-xl text-[#141414] font-black"> Catherina Walk</p>
                                                <p className="text-sm text-[#dc8cdb] font-bold"> CEO & Founder</p>
                                            </div>
                                            <div>
                                                <img src={Imagequota} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id='slidelar' className=''>
                                <div className="w-[500px]">
                                    <div className="caruselcard text-center">
                                        <div>
                                            <i className="text-[16px] text-left text-[#141414]"> “just think about our website wherever you need free templates for your website”</i>
                                        </div>
                                        <div className='flex justify-between text-left items-end mt-10 px-4'>
                                            <div>
                                                <p className="text-xl text-[#141414] font-black"> Catherina Walk</p>
                                                <p className="text-sm text-[#dc8cdb] font-bold"> CEO & Founder</p>
                                            </div>
                                            <div>
                                                <img src={Imagequota} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </Swiper>
                </div>
            </div >
        </div>
    )
}

export default Carusel