import React from 'react'
import { Button } from '../ButtonElement'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements'

const InfoSection = ({
    lightBg, dark, primary, id, lightText, imgStart,
    topLine, headLine, img, alt, description, buttonLabel,
    darkText, buttonStart 
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap buttonStart={buttonStart}>
                                    <Button 
                                        to="home" 
                                        duration={500}
                                        spy={true}
                                        smooth={true}
                                        exact={true}
                                        offset={-80}
                                        primary={primary}
                                        dark={dark}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        
        </>
  )
}

export default InfoSection