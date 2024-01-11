import React from 'react'
import Image3 from '../../../Assets/templatemo_573_eduwell/assets/images/service-icon-01.png'
import Image4 from '../../../Assets/templatemo_573_eduwell/assets/images/service-icon-02.png'
import Image5 from '../../../Assets/templatemo_573_eduwell/assets/images/service-icon-03.png'
import Image6 from '../../../Assets/templatemo_573_eduwell/assets/images/service-icon-04.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';


const Karusel = () => {
    return (
        <div className='w-full sm:w-full md:mt-56 lg:-mt-44 xl:w-full xl:mt-20'>
            <div className='grid justify-center text-center'>
                <p className='text-[#7A7A7A] text-[13px] font-medium'> OUR SERVICES</p>
                <p className='flex gap-[4%] justify-center items-center text-[28px] font-bold'> Provided <span className='text-[#dc8cdb]'>Services</span></p>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <Swiper className='swipjon'>
                    <SwiperSlide>
                        <div className="w-[500px]">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="img ml-20" src={Image3} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[500px] px-2">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="img ml-16" src={Image4} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] px-2">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="img ml-16" src={Image5} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] px-2">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="img ml-16" src={Image6} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper>
                    <SwiperSlide>
                        <div className="w-[390px] px-2">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="img ml-16" src={Image3} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] px-2">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="img ml-16" src={Image4} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] px-2">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="img ml-16" src={Image5} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[390px] px-2">
                            <div className="caruselcard text-center">
                                <div>
                                    <img className="ml-16" src={Image6} alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-[#1D2833]"> Useful Tricks</p>
                                    <p className="text-base text-[gray] font-normal"> EduWell is the professional HTML5 template for your school or university websites.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Swiper>
        </div>
    )
}

export default Karusel