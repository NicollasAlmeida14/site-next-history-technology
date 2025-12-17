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
    justify-content: space-evenly;
    height: 50vh;
    width: 400px;
`

export const SoluctionImage = styled.img``

export const SoluctionCardTitle = styled.span`
    font-size: 25px;
    font-weight: bold;
`

export const SoluctionCardDescription = styled.div`
    font-size: 18px;
    text-align: center;
`

export const AboutUsSection = styled.section``

export const AboutUsDescriptionCard = styled.div``

export const Subtitle = styled.h2``

export const WhatIsItForSection = styled.section``

export const ValuesSection = styled.section``

export const ValuesCard = styled.div``

export const Value = styled.span``

export const ValueDescription = styled.p``

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