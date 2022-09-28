import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
import { 
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink, 
    SocialMediaContainer,
    SocialMediaWrapper,
    SocialCompanyLogo,
    NgaraRights,
    SocialIcons,
    SocialLink
} from './FooterElements'
import { handleScrollToTop } from '../../utils/scrollToTop';


const Footer = () => {
    return (
        // <IconContext.Provider value={{color: "#fff"}}>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About US</FooterLinkTitle>
                                    <FooterLink to="/signin">Sign In</FooterLink>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How It Works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Terms and Conditions</FooterLink>
                                    <FooterLink to="/signin">Sign Up</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>About US</FooterLinkTitle>
                                    <FooterLink to="/signin">Sign In</FooterLink>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How It Works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Terms and Conditions</FooterLink>
                                    <FooterLink to="/signin">Sign Up</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About US</FooterLinkTitle>
                                    <FooterLink to="/signin">Sign In</FooterLink>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How It Works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Terms and Conditions</FooterLink>
                                    <FooterLink to="/signin">Sign Up</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>About US</FooterLinkTitle>
                                    <FooterLink to="/signin">Sign In</FooterLink>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How It Works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Terms and Conditions</FooterLink>
                                    <FooterLink to="/signin">Sign Up</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrapper>

                <SocialMediaContainer>
                    <SocialMediaWrapper>
                        <SocialCompanyLogo onClick={handleScrollToTop}>
                            ngaraJ
                        </SocialCompanyLogo>
                        <NgaraRights>
                            ngaraJ &copy; {new Date().getfullYear} All Right Reserved.
                        </NgaraRights>
                        <SocialIcons>
                            <SocialLink href='/' _target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialLink>
                            <SocialLink href='/' _target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialLink>
                            <SocialLink href='/' _target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialLink>
                            <SocialLink href='/' _target="_blank" aria-label="Whatsapp">
                                <FaWhatsapp />
                            </SocialLink>
                            <SocialLink href='/' _target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMediaContainer>

            </FooterContainer>
        // </IconContext.Provider>
    )
}

export default Footer