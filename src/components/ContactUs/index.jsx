import React from 'react'
import Navbar from '../Home/Navbar'
import ContactFooter from '../Home/ContactFooter'
import CountUp from 'react-countup';

const ContactUs = () => {
    return (
        <div className=''>
            <Navbar />

            <div className='xl:py-20 grid text-center items-center justify-center xl:w-full border-b px-10'>
                <div className=''>
                    <p className='text-gray-500 font-medium'> Say Hello EduWell</p>
                    <p className="text-6xl font-extrabold">Contact Us</p>
                </div>
            </div>
            <div className='w-full sm:grid py-20 items-center sm:gap-10 md:px-10 xl:px-28 xl:flex xl:py-32 xl:gap-32'>
                <div className='w-full xl:w-[50%]  grid gap-4'>
                    <p className='text-sm font-normal text-[#7a7a7a]'>MORE INFO</p>
                    <p className='text-[28px] font-extrabold text-[#111111]'> Read More <span className='text-[#dc8cdb]'> About Us</span></p>
                    <p className='font-sans text-[#7a7a7a] pt-6'> Trust fund nocore broklyn humblebrag mustache pork kitsch, bicycle rights hexagon schlitz keytar palo is santo drinking vinegar fam ramps.</p>
                    <p className='font-sans text-[#7a7a7a] pb-6'> Four dollar toast and edison bulb vinyl, listicle hashtag pug scenester typewrit er yuccie street artboard or whatever to fill place.</p>
                    <p className='text-[#4a4a4a] font-serif'> - Selfies you probably haven't heard of them.</p>
                    <p className='text-[#4a4a4a] font-serif'> - Tousled cold-pressed chicharrones yuccie.</p>
                    <p className='text-[#4a4a4a] font-serif'> - Pabst iPhone chartreuse shabby chic tumeric.</p>
                    <p className='text-[#4a4a4a] font-serif'> - Scenester normcore mumblecore snackwave.</p>
                </div>
                <div className='w-full sm:grid pt-20 xl:w-[50%] xl:flex xl:gap-4'>
                    <div className=''>
                        <div className='xl:w-[100%] shadow-md  xl:h-28 justify-center items-center grid px-10 rounded-2xl'>
                            <div className='w-24 text-center h-14 xl:ml-8 flex justify-center rounded-2xl -mt-14 shadow-lg text-2xl font-bold text-[#dc8cdb]'><CountUp end={124} duration={2} /></div>
                            <p className="text-2xl font-bold xl:-mt-10"> Finished Projects</p>
                        </div>
                        <div className='xl:w-[100%] shadow-md  xl:h-28 xl:mt-20 justify-center items-center grid px-10 rounded-2xl'>
                            <div className='w-24 text-center h-14 xl:ml-8 flex justify-center rounded-2xl -mt-14 shadow-lg text-2xl font-bold text-[#dc8cdb]'><CountUp end={11} duration={2} /></div>
                            <p className="text-2xl font-bold xl:-mt-10"> Finished Projects</p>
                        </div>
                    </div>
                    <div>
                        <div className='xl:w-[100%] shadow-md  xl:h-28 justify-center items-center grid px-10 rounded-2xl'>
                            <div className='w-24 text-center h-14 xl:ml-8 flex justify-center rounded-2xl -mt-14 shadow-lg text-2xl font-bold text-[#dc8cdb]'><CountUp end={87} duration={2} /></div>
                            <p className="text-2xl font-bold xl:-mt-10"> Finished Projects</p>
                        </div>
                        <div className='xl:w-[100%] shadow-md  xl:h-28 xl:my-20 justify-center items-center grid px-10 rounded-2xl'>
                            <div className='w-24 text-center h-14 xl:ml-8 flex justify-center rounded-2xl -mt-14 shadow-lg text-2xl font-bold text-[#dc8cdb]'><CountUp end={24} duration={2} /></div>
                            <p className="text-2xl font-bold xl:-mt-10"> Finished Projects</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactFooter />
        </div>
    )
}

export default ContactUs