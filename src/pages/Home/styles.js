import styled from "styled-components";

import BackgroundMain from '../../assets/tela-inicial.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 7rem 0;
`

export const Main = styled.main`
    background-image: url(${BackgroundMain});
    background-size: cover;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 2rem 1rem 0 4rem;

    span {
        font-size: 70px;
        color: #ffffff;
        margin-top: 1rem;
        font-weight: bold;
    }

    button {
        width: 250px;
        margin-top: 3rem;
        color: #a038f2;
        background-color: #e2e2eb;
        font-weight: bold;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        padding: 15px 8px;
        font-size: 22px;
        transition: all ease 0.3s;

        &:hover {
            transform: translateY(-5px);
        }

        &:active {
            transform: translateY(0);
            opacity: 0.7;
        }
    }
`

export const SoluctionsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: #e2e2eb;
    height: 100vh;
    justify-content: space-evenly;

    h1 {
        font-size: 40px;
    }
`

export const SoluctionsCardsWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const SoluctionsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    width: 400px;
    position: relative;

    &::after {
        content: '';
        width: 0;
        height: 100%;
        background-color: #ffffff;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.5s ease-in-out;
        border-radius: 10px;
    }

    &:hover::after {
        width: 100%;
    }
`

export const SoluctionImage = styled.img`
    z-index: 1;
`

export const SoluctionCardTitle = styled.span`
    font-size: 25px;
    font-weight: bold;
    z-index: 1;
`

export const SoluctionCardDescription = styled.div`
    font-size: 18px;
    text-align: center;
    z-index: 1;
`

export const AboutUsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    align-items: center;
    padding: 1rem 2.5rem;

    img {
        height: 100%;
    }
`

export const AboutUsDescriptionCard = styled.div`
    border-radius: 15px;
    background-color: #e2e2eb;
    display: flex;
    flex-direction: column;
    height: 60%;
    padding: 1rem;
    gap: 5rem;

    p {
        text-align: justify;
        font-size: 22px;
    }
`

export const Subtitle = styled.h2`
    text-align: center;
    color: #a038f2;
    font-size: 40px;
    margin-top: 8px;
`

export const WhatIsItForSection = styled.section`
    height: 100vh;
    background-color: #5a189a;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 3rem;


    img {
        width: max-content;
        height: 500px;
        position: relative;
        border-radius: 15px;
    }
`

export const WhatIsItForCardDescription = styled.div`
    position: absolute;
    right: 170px;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 55%;
    align-items: center;
    justify-content: space-between;
    width: 680px;
    box-shadow: 4px 3px 5px 2px rgba(160, 56, 242, 1);

    span {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        font-size: 20px;
    }
`

export const PurposesSection = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    padding: 1rem 2rem;
`

export const PurposesCard = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 300px; */
`

export const ImageBackground = styled.div`
    background-color: #a038f2;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PurposeImage = styled.img`
    position: absolute;

`

export const Purpose = styled.span``

export const PurposeDescription = styled.p``

export const Footer = styled.footer``

export const LogoContainer = styled.div``

export const MainContentContainer = styled.div``

export const LinksContainer = styled.div``

export const ShortcutContainer = styled.nav``

export const SpanTitleFooter = styled.span``

export const Ul = styled.ul``

export const Li = styled.li``

export const Link = styled.a``

export const QuestionsContainer = styled.nav``

export const ServiceContainer = styled.nav``

export const EmailContainer = styled.div``

export const Span = styled.span``

export const EmailInputContainer = styled.div``

export const BaseboardContainer = styled.div``

export const PoliciesContainer = styled.span``

export const SocialMidiasContainer = styled.div``

export const SocialMidiaLogo = styled.img``