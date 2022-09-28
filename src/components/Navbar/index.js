import React, {useState} from 'react'
import { 
    Nav, 
    NavBarContainer, 
    NavbarLogo, 
    MobileIcon, 
    NavMenu, 
    NavBtn,
    NavBtnLink
} from './NavBarElements'
import { FaBars } from "react-icons/fa";
import { useEffect } from 'react';
import { handleScrollToTop } from '../../utils/scrollToTop';
import NavBarLink from './navBarLink';


const Navbar = ({ toggle }) => {
    const [ scrollNav, setScrollNav ] = useState(false)

    const handleScrollNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScrollNav)
        return () => {
            window.removeEventListener(`scroll`, handleScrollNav);
        };

    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavbarLogo onClick={handleScrollToTop} to="/">
                        ngaraJ
                    </NavbarLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavBarLink to="home" onClick={handleScrollToTop}>Home</NavBarLink>
                    
                        <NavBarLink to="about">About</NavBarLink>
                    
                        <NavBarLink to="manage">Manage</NavBarLink>
                    
                        <NavBarLink to="services">Services</NavBarLink>
                    
                        <NavBarLink to="none">Blog</NavBarLink>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default Navbar