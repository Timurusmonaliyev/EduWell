import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BiRss } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { HiPhone } from "react-icons/hi";
import React from 'react'
import Image from '../../../Assets/templatemo_573_eduwell/assets/images/footer-left-dec.png'
import ImageFooter from '../../../Assets/templatemo_573_eduwell/assets/images/footer-bg.png'
import Image2 from '../../../Assets/templatemo_573_eduwell/assets/images/video-thumb.jpg'

const ContactFooter = () => {
    return (
        <div className="" style={{ backgroundImage: `url(${ImageFooter})`, backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', height: '120vh' }}>
            <div className='grid w-full px-6 justify-center m-auto sm:grid md:grid lg:flex xl:flex lg:px-10' style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'top left', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <div className='w-[100%] md:w-[100%] xl:w-[32%] xl:ml-20 lg:ml-10'>
                    <form id="contact" action="">
                        <div class="">
                            <div class="">
                                <div class="section-heading">
                                    <h6 className='text-[18px] text-gray-500'> Our Office</h6>
                                    <h4 className='text-[28px] text-[#141414] font-extrabold'>Get Closer To  <em className='text-[#dc8cdb]'>EduWell</em></h4>
                                    <p className="py-10">Trust fund nocore broklyn humblebrag mustache pork kitsch, bicycle rights hexagon schlitz keytar palo is santo drinking vinegar fam ramps.</p>
                                    <p className='font-sans text-[#7a7a7a] pb-6'> Four dollar toast and edison bulb vinyl, listicle hashtag pug scenester typewrit er yuccie street artboard or whatever to fill place.</p>
                                    <div className="grid gap-4">
                                        <p className='text-[#4a4a4a] font-serif'> - Selfies you probably haven't heard of them.</p>
                                        <p className='text-[#4a4a4a] font-serif'> - Tousled cold-pressed chicharrones yuccie.</p>
                                        <p className='text-[#4a4a4a] font-serif'> - Pabst iPhone chartreuse shabby chic tumeric.</p>
                                        <p className='text-[#4a4a4a] font-serif'> - Scenester normcore mumblecore snackwave.</p>
                                    </div>
                                    <button className="main-button-gradient mt-10"> OUR SERVICES</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div className='w-[100%] md:w-[100%] xl:w-[70%]'>
                    <img src={Image2} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center gap-4" >
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <GrFacebookOption /></p>
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <BsTwitter /></p>
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <FaLinkedinIn /></p>
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <BiRss size={20} /></p>
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <BsDribbble /></p>
            </div>
            <div className="grid text-center my-10 text-white text-sm">
                <p>Copyright © 2022 EduWell Co., Ltd. All Rights Reserved.</p>
                <p>Design:  <a href="https://templatemo.com/" className="font-bold"> TemplateMoe</a></p>
            </div>
        </div>
    )
}

export default ContactFooter