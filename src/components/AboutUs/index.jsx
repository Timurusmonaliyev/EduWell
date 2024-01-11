import React from 'react'
import Navbar from '../Home/Navbar'
import Image from '../../Assets/templatemo_573_eduwell/assets/images/about-left-image.png'
import Image2 from '../../Assets/templatemo_573_eduwell/assets/images/service-icon-01.png'
import Image3 from '../../Assets/templatemo_573_eduwell/assets/images/service-icon-02.png'
import qovoq from '../../Assets/templatemo_573_eduwell/assets/images/our-courses-left-dec.png'
import qovoq2 from '../../Assets/templatemo_573_eduwell/assets/images/our-courses-right-dec.png'
import img from '../../Assets/templatemo_573_eduwell/assets/images/team-member-thumb-01.jpg'
import img3 from '../../Assets/templatemo_573_eduwell/assets/images/team-member-thumb-02.jpg'
import img2 from '../../Assets/templatemo_573_eduwell/assets/images/team-member-thumb-03.jpg'
import img4 from '../../Assets/templatemo_573_eduwell/assets/images/team-member-thumb-04.jpg'
import img5 from '../../Assets/templatemo_573_eduwell/assets/images/team-member-thumb-05.jpg'
import ImageAnimate from '../../Assets/templatemo_573_eduwell/assets/images/team-member-01.jpg'
import AboutBanner from './Banner'
import Carusel from './carusel'
import ContactFooter from './ContactFooter'





const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className='xl:pt-20 pb-20 grid text-center items-center justify-center xl:w-full'>
                <div className=''>
                    <p className='text-gray-500 font-medium'> More About Us</p>
                    <p className="text-6xl font-extrabold"> About Us</p>
                </div>
            </div>
            <div className='w-[80%] pt-10 ml-8 lg:ml-20 md:ml-20 md:py-10 lg:mt-10 xl:-mt-10 text-center xl:ml-32 items-center justify-center'>
                <hr />
            </div>

            <div className='w-full sm:grid px-2 items-center xl:mt-10 md:px-10 lg:flex lg:-mt-10 xl:px-28 xl:flex xl:gap-10'>
                <div className='w-full sm:grid pt-20 xl:w-[50%] xl:flex xl:gap-4'>
                    <div className=''>
                        <img src={Image} alt="" />
                    </div>
                </div>
                <div className='w-full xl:w-[50%] grid gap-3'>
                    <p className='text-sm font-normal text-[#7a7a7a]'> GET INFO</p>
                    <p className='text-[28px] font-extrabold text-[#111111]'> Read More <span className='text-[#dc8cdb]'> About Us</span></p>
                    <p className='font-sans text-[#7a7a7a] pt-6'> You are allowed 100% to download and use our templates from TemplateMo for your commercial or business websites. You are <span className="font-bold text-black"> not allowed</span> to redistribute this template ZIP file on any other website without a permission from us.</p>
                    <p className='font-sans text-[#7a7a7a] xl:pb-6'> There are some unethical people on this planet earth who copied our templates so easily without any permission from us and then reposted on their websites. Their Karma will hit them really hard. Yeah, that is right.</p>
                    <div className='grid xl:flex gap-6 lg:flex'>
                        <div className='shadow-lg px-6 grid gap-3 pb-10 pt-5'>
                            <div className='shadow-md w-20 h-16 rounded-xl flex justify-center items-center  -mt-10'>
                                <img className='w-12' src={Image2} alt="" />
                            </div>
                            <p className='text-[#141414] text-xl font-sans font-extrabold'> Best Strategy</p>
                            <p className='text-[#4a4a4a] font-serif'> Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.</p>
                        </div>
                        <div className='shadow-lg px-6 grid gap-3 pb-10 pt-5'>
                            <div className='shadow-md w-20 h-16 rounded-xl flex justify-center items-center -mt-10'>
                                <img className='w-12' src={Image3} alt="" />
                            </div>
                            <p className='text-[#141414] text-xl font-sans font-extrabold'> Creative Ideas</p>
                            <p className='text-[#4a4a4a] font-serif'> Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${qovoq2})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', height: '', backgroundSize: 'trasparent' }}>
                <div className='xl:pt-20 pb-20 grid text-center items-center justify-center xl:w-full' style={{ backgroundImage: `url(${qovoq})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat', height: '40vh', backgroundSize: 'trasparent' }}>
                    <div className='xl:mt-20 xl:pb-44'>
                        <p className='text-gray-500 text-[13px] pb-2 font-medium'> OUR TEAM</p>
                        <p className="text-3xl font-extrabold pb-10"> Our Team <span className='text-[#dc8cdb]'> Members</span></p>
                        <div className='flex gap-2 xl:gap-10 justify-center'>
                            <div>
                                <img className='rounded-full w-[30%] xl:w-full md:w-full lg:w-full' src={img} alt="" />
                                <p className='font-bold mt-2 text-sm xl:text-base text-[#141414]'> Ruby Foster</p>
                                <p className='text-[#dc8cdb] font-bold text-[14px]'> CEO-FOUNDER</p>
                            </div>
                            <div>
                                <img className='rounded-full w-[30%] xl:w-full lg:w-full md:w-full' src={img2} alt="" />
                                <p className='font-bold mt-2 text-sm xl:text-base text-[#141414]'> CEO-FOUNDER</p>
                                <p className='text-[#dc8cdb] font-bold text-[14px]'> CEO-FOUNDER</p>
                            </div>
                            <div>
                                <img className='rounded-full w-[30%] xl:w-full lg:w-full md:w-full' src={img3} alt="" />
                                <p className='font-bold mt-2 text-sm xl:text-base text-[#141414]'> Ruby Foster</p>
                                <p className='text-[#dc8cdb] font-bold text-[14px]'> CEO-FOUNDER</p>
                            </div>
                            <div>
                                <img className='rounded-full w-[30%] xl:w-full lg:w-full md:w-full' src={img4} alt="" />
                                <p className='font-bold mt-2 text-sm xl:text-base text-[#141414]'> Ruby Foster</p>
                                <p className='text-[#dc8cdb] font-bold text-[14px]'> CEO-FOUNDER</p>
                            </div>
                            <div>
                                <img className='rounded-full w-[30%] xl:w-full lg:w-full md:w-full' src={img5} alt="" />
                                <p className='font-bold mt-2 text-sm xl:text-base text-[#141414]'> Ruby Foster</p>
                                <p className='text-[#dc8cdb] font-bold text-[14px]'> CEO-FOUNDER</p>
                            </div>
                        </div>
                        <div className='w-[90%] xl:w-[1000px] lg:w-[800px] shadow-xl md:mt-10 grid xl:flex xl:justify-center lg:flex lg:justify-center lg:mt-10 text-left mx-10 md:flex'>
                            <div className='w-[140%] px-10 xl:w-[160%] md:w-full grid xl:py-10 lg:py-10 '>
                                <p className="text-[22px] font-extrabold">Ruby Foster</p>
                                <p className='w-[100%]'>Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan kogi freegan bicycle rights try-hard green juice probably.</p>
                                <div className='text-[#141414] font-bold'>
                                    <a> Facebook</a> <a className='border-l-2 pl-2'> Twitter</a> <a className='border-l-2 pl-2'> Linkedin</a>
                                </div>
                                <u className='text-[#dc8cdb]'>Contact Member</u>
                            </div>
                            <div className='md:w-[100%]'>
                                <img src={ImageAnimate} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[600px]'>
                <AboutBanner />
            </div>
            <div>
                <Carusel />
            </div>
            <div>
                <ContactFooter />
            </div>


        </div>
    )
}

export default AboutUs