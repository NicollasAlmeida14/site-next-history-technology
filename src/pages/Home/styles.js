import styled from "styled-components";

import BackgroundMain from '../../assets/tela-inicial.png'
import BackgrondFooter from '../../assets/plano-de-fundo-footer.jpeg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 7rem 0 0;
    overflow-x: hidden;
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
    justify-content: space-evenly;

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
`

export const RefrigerationImage = styled.img`
    width: max-content;
    height: 500px;
    position: relative;
    border-radius: 15px;
`

export const WhatIsItForCardDescription = styled.div`
    position: absolute;
    right: 170px;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 60%;
    align-items: center;
    justify-content: space-between;
    width: 680px;
    box-shadow: 4px 3px 5px 2px rgba(160, 56, 242, 1);

    span {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        line-height: 1.5;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
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
    padding: 1rem;

    #vision-card {
        border-right: solid 3px #a038f3;
        border-left: solid 3px #a038f3;
    }
`

export const PurposesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 450px;
    justify-content: space-around;
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

export const Purpose = styled.span`
    color: #a038f3;
    font-size: 35px;
    font-weight: bold;
`

export const PurposeDescription = styled.p`
    font-size: 23px;
    text-align: center;
    line-height: 1.5;
    width: 80%;
    overflow-wrap: break-word;
`

export const MoreInfosSection = styled.section`
    height: 110vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    background-color: #e2e2eb;
    padding-top: 3.5rem;
`

export const PlansWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    justify-content: space-between;
`

export const MoreInfosTitle = styled.h2`
    color: #a038f2;
    font-size: 35px;
`

export const PlansContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: min-content;
    gap: 2rem;
    align-items: center;
    background-color: rgba(160, 56, 242, 0.25);
    padding: 2rem 1rem 1rem;
    border-radius: 15px;
    width: 55%;
`

export const PlanSubtitle = styled.h3`
    width: 100%;
    text-align: start;    
    color: #ffffff;
    font-size: 25px;

    span {
        font-size: 30px;
        color: #a038f2;
        border-bottom: solid 2px #a038f2;
        padding-bottom: 5px;
    }
`

export const PlansCardContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const PlansSpansContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const SemiAnnualCard = styled.div`
    background-color: #ffffff;
    height: 250px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    width: 200px;
`

export const SemiAnnualPlanSpan = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #a038f2;
`

export const AnnualPlanSpan = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
`

export const SemiAnnualPlanPrice = styled.span`
    text-align: center;
    color: #5a189a;
    font-size: 25px;
    font-weight: bold;

    span {
        font-size: 15px;
    }
`

export const AnnualPlanPrice = styled.span`
    text-align: center;
    color: #ebebeb;
    font-size: 25px;
    font-weight: bold;

    span {
        font-size: 15px;
    }
`

export const PlanUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const SemiAnnualPlanLi = styled.li`
    color: #5a189a;
    font-size: 16px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
`

export const AnnualPlanLi = styled.li`
    color: #ffffff;
    font-size: 15px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
`

export const AnnualCard = styled.div`
    background-color: #a038f3;
    height: 250px;
    width: 185px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
`

export const DiscountSpan = styled.span`
    background-color: #8C00FF;
    color: #ffffff;
    padding: 5px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    border: solid 1px #ffffff;
`

export const PlansButton = styled.button`
    border: solid 2px #a038f3;
    background-color: #a038f3;
    width: 55%;
    cursor: pointer;
    padding: 12px 5px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 15px;
    transition: all ease 0.3s;

    &:hover {
        background-color: #ffffff;
        color: #a038f3;
    }

    &:active {
        opacity: 0.6;
    }
`

export const PlanDescription = styled.span`
    font-size: 18px;
    width: 55%;
    text-align: center;
    color: #8C00FF;
    margin-bottom: 10px;
`

export const MetricsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80%;
`

export const MetricsContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: min-content;
    padding: 0.5rem 1.5rem;
    border-radius: 15px;
    margin-top: 10px;
    box-shadow: 5px 3px 6px 0px rgba(0, 0, 0, 0.25);
`

export const MeterContainer = styled.div`
    position: relative;

    img {
        width: 250px;
    }
`

export const ImageContainer = styled.div`
    position: relative;
`

export const MinLimitSpan = styled.span`
    position: absolute;
    bottom: 15px;
    left: 62px;
    font-size: 12px;
    font-weight: 700;
`

export const MaxLimitSpan = styled.span`
    position: absolute;
    bottom: 15px;
    right: 50px;
    font-size: 12px;
    font-weight: 700;
`

export const Meter = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 35%;
    text-align: center;
    gap: 0.3rem;
`

export const ActualLevelSpan = styled.span`
    font-size: 15px;
`

export const Ppm = styled.span`
    font-size: 25px;
    font-weight: bold;
`

export const MetricDescriptionContainer = styled.div`
    width: 100%;
    background-color: rgba(160, 56, 242, 0.25);
    padding: 1rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const MetricSpan = styled.span`
    font-size: 20px;
    font-weight: 700;
`

export const MetricDescription = styled.span`
    display: flex;
    gap: 0.5rem;

    span {
        font-size: 15px;
        padding-top: 2px;
        color: #5a189a;
    }
`

export const SimulatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
        width: 400px;
        cursor: pointer;
        accent-color: #a038f2;
    }
`

export const MetricButton = styled.button`
    border: solid 2px #a038f3;
    background-color: transparent;
    width: 400px;
    cursor: pointer;
    padding: 12px 5px;
    color: #a038f3;
    font-weight: bold;
    font-size: 18px;
    border-radius: 15px;
    transition: all ease 0.3s;

    &:hover {
        background-color: #a038f3;
        color: #ffffff;
    }

    &:active {
        opacity: 0.6;
    }
`

export const Footer = styled.footer`
    height: 90vh;
    background-image: url(${BackgrondFooter});
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 1rem 2.5rem;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    img {
        width: 220px;;
    }

    span {
        font-size: 32px;
        font-weight: bold;
        color: #ffffff;
    }
`

export const MainContentContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 2.5rem;
`

export const ShortcutContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`

export const SpanTitleFooter = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Li = styled.li`
    list-style: none;
    font-size: 18px;
    color: #ffffff;
`

export const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
    position: relative;
    padding-bottom: 3px;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #ffffff;
        transition: width ease-in-out 0.5s;
    }

    &:hover::after {
        width: 100%;
    }

    &:active {
        opacity: 0.7;
    }
`

export const QuestionsContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`

export const ServiceContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
`

export const SpanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.2rem;
`

export const Span = styled.span`
    font-size: 16px;
    color: #ffffff;
`

export const EmailInputContainer = styled.div`
    display: flex;
    gap: 1rem;

    input {
        padding: 13px 8px;
        width: 250px;
        border: none;
        border-radius: 15px;
        font-size: 16px;
    }

    button {
        border: solid 1.5px #ffffff;
        cursor: pointer;
        border-radius: 15px;
        width: 90px;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        background: transparent;
        transition: background-color ease-in-out 0.3s,
            color ease-in-out 0.3s,
            opacity ease 0.3s
        ;

        &:hover {
            background-color: #ffffff;
            color: #5a189a;
        }

        &:active {
            opacity: 0.7;
        }
    }
`

export const BaseboardContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border-top: solid 2px #ffffff;
    padding-top: 1rem;
`

export const PoliciesContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const SocialMidiasContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const SocialMidiaLogo = styled.button`
    font-size: 30px;
    color: #ffffff;
    cursor: pointer;
    background: none;
    border: none;

    &:hover {
        transform: translateY(-4px);
        transition: ease-in-out 0.3s;
    }  
    
    &:active {
        opacity: 0.6;
        transform: translateY(0);
        transition: ease 0.3s;
    }
`