import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { kingKade, theRock } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/Services'
import Sidebar from '../components/Sidebar'


function Home() {
    const [ isOpen, setIsOpen ] = useState(false)

    const handleToggleSideBar = () => {
        setIsOpen(!isOpen)
        console.log("open")
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={handleToggleSideBar}/>
            <Navbar toggle={handleToggleSideBar}/>
            <HeroSection />
            <InfoSection {...kingKade} />
            <InfoSection {...theRock} />
            <ServicesSection />
            <Footer />
        </>

    )
}

export default Home