import styled from "styled-components";


export const InfoContainer = styled.div`
    height: 600px;
    display: flex;
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        height: auto;
    }
    @media screen and (max-width: 480px) {
        height: auto;
    }
    @media screen and (min-width: 1280px) {
        height: 100vh;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* height: 860px; */
    /* height: 1000px; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    min-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        min-width: auto;
    }
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700; 
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-transform: uppercase;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606' )};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const SubTitle = styled.p`
    min-width: auto;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};
    /* @media screen and (max-width: 480px) {
        min-width: auto;
    } */

`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: ${({buttonStart}) => (buttonStart ? 'flex-start' : 'flex-end' )};
`;

export const ImgWrap = styled.div`
    min-width: auto;
    height: 100%;
    /* @media screen and (max-width: 480px) {
        min-width: auto;
    } */
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
`;
