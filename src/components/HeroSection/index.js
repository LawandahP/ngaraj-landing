import React, { useState } from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    HeroContent
} from './HeroElements'
import Video from '../../videos/robot.mp4'
import { Button } from '../ButtonElement'


function HeroSection() {
    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>Garage Management Made Easy</HeroH1>
            <HeroP>
                Partner With us Today and stand
                a chance to win 2 months free
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                    Get Started { hover? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection