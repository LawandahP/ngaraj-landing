import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const FooterContainer = styled.div`
    background-color: #101522;
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    /* height: 600px; */
    margin: 0 auto;

`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;        
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;        
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin: 16px;
    box-sizing: border-box;
    color: #fff;
    width: 160px;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(LinkRouter)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-in-out;

    }
`;

export const SocialMediaContainer = styled.section`
    width: 100%;
    /* max-width: 1000px; */
`;

export const SocialMediaWrapper = styled.div`
    padding: 0 0 24px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        
    }
`;

export const SocialCompanyLogo = styled(LinkScroll)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    text-decoration: none;
`;

export const NgaraRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;
