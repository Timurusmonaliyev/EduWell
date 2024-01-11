import { BsTwitter } from "react-icons/bs"; 
import { BsDribbble } from "react-icons/bs";
import { BiRss } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { HiPhone } from "react-icons/hi";
import React from 'react'
import style from './style.css'
import Image from '../../../Assets/templatemo_573_eduwell/assets/images/footer-left-dec.png'
import ImageFooter from '../../../Assets/templatemo_573_eduwell/assets/images/footer-bg.png'

const ContactFooter = () => {
    return (
        <div className="" style={{ backgroundImage: `url(${ImageFooter})`, backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', height: '120vh' }}>
            <div className='grid w-full px-6 justify-center m-auto sm:grid md:grid lg:flex xl:flex lg:px-10' style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'top left', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <div className='w-[100%] md:w-[100%] xl:w-[60%]'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7151.84524236698!2d-122.19494600413192!3d47.56605883252286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490695e625f8965%3A0xf99b055e76477def!2sNewcastle%20Beach%20Park%20Playground%2C%20Bellevue%2C%20WA%2098006%2C%20USA!5e0!3m2!1sen!2sth!4v1644335269264!5m2!1sen!2sth" width="100%" height="420px" frameborder="0" style={{ border: 0, borderRadius: '15px' }} allowfullscreen=""></iframe>
                    <div className='grid md:grid lg:flex lg:gap-2 xl:flex xl:gap-10 md:w-full xl:ml-20'>
                        <div className="">
                            <div className="contact-info shadow-md w-60 h-28 flex rounded-2xl items-center gap-4 md:w-full px-10">
                                <div className="main-button-gradient2">
                                    <HiPhone />
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-extrabold text-[#212529]">Phone</h4>
                                    <p className="font-extrabold text-[#dc8cdb]">010-020-0340</p>
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-1 ">
                            <div className="contact-info shadow-md w-60 h-28 flex rounded-2xl items-center gap-4 md:w-full px-10">
                                <div className="main-button-gradient2">
                                    <HiPhone />
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-extrabold text-[#212529]">Mobile</h4>
                                    <p className="font-extrabold text-[#dc8cdb]">010-020-0340</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] md:w-[100%] xl:w-[34%] xl:-ml-20 lg:-ml-10'>
                    <form id="contact" action="">
                        <div class="">
                            <div class="">
                                <div class="section-heading">
                                    <h6 className='text-[18px] text-gray-500'>Contact us</h6>
                                    <h4 className='text-[28px] text-[#141414] font-extrabold'>Say <em className='text-[#dc8cdb]'>Hello</em></h4>
                                    <p className="py-10">IF you need a working contact form by PHP script, please visit TemplateMo's contact page for more info.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <input type='text' placeholder="Full Name" autocomplete="on" required />
                                </fieldset>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                                </fieldset>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                </fieldset>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" class="main-gradient-button">Send Message</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4" >
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <GrFacebookOption /></p>
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <BsTwitter /></p>
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <FaLinkedinIn /></p>
                <p className="text-[#dc8cdb] text-base bg-white w-10 h-10 rounded-full hover:text-white hover:bg-[#dc8cdb] duration-500 cursor-pointer flex items-center justify-center"> <BiRss size={20}/></p>
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