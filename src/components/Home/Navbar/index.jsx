import { AiOutlineDown } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import React, { useState } from 'react'
import Image from '../../../Assets/templatemo_573_eduwell/assets/images/header-bg.png'
import Image2 from '../../../Assets/templatemo_573_eduwell/assets/images/templatemo-eduwell.png'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  return (
    <div style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '15vh' }} className='flex w-full justify-between items-center px-10 sm:w-full md:px-20'>
      <div>
        <img src={Image2} alt="" />
      </div>
      <div className='md:flex hidden items-center justify-center text-white gap-1 sm:gap-1 md:gap-1 xl:gap-10 lg:gap-4 font-normal'>
        <NavLink to={'/'} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active1" : "gap-2 text-center"
        }><p className='text-base'> Home</p></NavLink>
        <NavLink to={'/'}> Services</NavLink>
        <NavLink  to={'/'}> Courses</NavLink>
        <div class="dropdown">
          <button class="dropbtn flex items-center">Pages<AiOutlineDown size={10} /></button>
          <div class="dropdown-content">
            <NavLink to={'/AboutUs'} class='border hover:translate-x-1 hover:bg-white' href="#">About Us</NavLink>
            <NavLink to={'/OurServices'} class='border hover:translate-x-1 hover:bg-white' href="#"> Our Services</NavLink>
            <NavLink to={'/ContactUs'} class='border hover:translate-x-1 hover:bg-white' href="#"> Contact Us</NavLink>
          </div>
        </div>
        <NavLink> Testimonials</NavLink>
        <NavLink to={'/'}> Contact Us</NavLink>
      </div>
      <div className='md:hidden flex justify-center'>
        <div className="p-5" onClick={() => {
          setOpen(!open)
          setMenu(!menu)
        }}>{menu ? <button><FaTimes color="white" fontSize={'30px'} /> </button> : <button onClick={() => { setMenu(false) }}><RiMenu2Fill color="white" fontSize={'30px'} /></button>}</div>
      </div>
      <div className={`w-96 ${open ? 'h-[400px]' : "h-0"} overflow-hidden bg-gray-200 text-gray-600 mt-[400px] absolute duration-300 transition-all grid gap-6`}>
        <div className='items-center grid justify-center text-center gap-6 text-gray-600  md:gap-2 md:hidden'>
          <NavLink to={'/'}> Home</NavLink>
          <NavLink> Services</NavLink>
          <NavLink> Courses</NavLink>
          <div class="dropdown">
            <p id="dropbtn">Pages</p>
            <div class="dropdown-content">
              <NavLink href="#">About Us</NavLink>
              <NavLink href="#"> Our Services</NavLink>
              <NavLink href="#"> Contact Us</NavLink>
            </div>
          </div>
          <NavLink> Testimonials</NavLink>
          <NavLink to={'/'}> Contact Us</NavLink>
        </div>
      </div>
    </div >
  )
}

export default Navbar