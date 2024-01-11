import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Carusel from './Carusel'
import Banner from './Banner'
import Carusel2 from './CaruselTest'
import ContactFooter from './ContactFooter'

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <Header />
            <Carusel />
            <Banner />
            <Carusel2 />
            <ContactFooter />
        </div>
    )
}

export default Home