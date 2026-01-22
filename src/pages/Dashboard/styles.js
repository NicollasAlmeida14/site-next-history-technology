import styled from "styled-components";

import { FaArrowLeft } from "react-icons/fa";

export const ButtonIcon = styled(FaArrowLeft)`
    position: absolute;
    left: 15px;
    bottom: 11.25px;
`

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 20vw 60vw 20vw;
`

export const Aside = styled.aside`
    background: linear-gradient(50deg, #28155e, #5a47b8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.2rem 0.5rem;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    img {
        width: 150px;
    }

    span {
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        font-size: 1.3rem;
    }
`

export const Nav = styled.nav`
    height: 60%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const Ul = styled.ul``

export const Li = styled.li`
    list-style: none;
`

export const Link = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 1.2rem;
    cursor: pointer;
    transition: color ease 0.3s;

    &:hover {
        color:#fffafa;
    }

    &:active {
        opacity: 0.8;
    }
`

export const Button = styled.button`
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 15px;
    padding: 10px 5px;
    font-weight: bold;
    width: 200px;
    margin: 0 auto;
    font-size: 1.2rem;
    position: relative;
    cursor: pointer;
    transition: all ease-in-out 0.3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        color: #5a189a;
    }

    &:active {
        opacity: 0.6;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
`

export const MetricsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 0.8rem 0;
`

export const MetricCard = styled.div`
    background: ${props => props.theme === 'Insurance' ?
        'linear-gradient(50deg, #007a3f, #63E352)' :
        props.theme === 'Moderate' ?
            'linear-gradient(45deg, #ffb11f, #ffea00)' :
            props.theme === 'High' ?
                'linear-gradient(45deg, #ff914d, #ff9800)' :
                'linear-gradient(45deg, #ff3131, #f44336)'} ;
    display: flex;
    padding: 1.8rem 1.2rem;
    border-radius: 15px;
    gap: 0.8rem;
    align-items: center;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: translateY(-5px);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const CardImage = styled.img`
    width: 60px;
`

export const LevelSpan = styled.span`
    opacity: 0.9;
    color: #ffffff;
    font-size: 1.1rem;
`

export const PpmSpan = styled.span`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.25rem;
`

export const ColdRoomsContainer = styled.div`
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    height: 100%;
    border-radius: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`

export const WarningsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    padding: 0 0.5rem;
`

export const WarningTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
`

export const WarningTitle = styled.h1`
    color: #2c3e50;
`

export const WarningSubtitle = styled.h4`
    color: #7f8c8d;
    /* font-size: 1rem; */
`

export const WarningCard = styled.div`
    background: ${props => props.theme === 'Insurance' ?
        'linear-gradient(50deg, #007a3f, #63E352)' :
        props.theme === 'Moderate' ?
            'linear-gradient(45deg, #ffb11f, #ffea00)' :
            props.theme === 'High' ?
                'linear-gradient(45deg, #ff914d, #ff9800)' :
                'linear-gradient(45deg, #ff3131, #f44336)'} ;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 15px;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`

export const WarningSpan = styled.span`
    color: #ffffff;
    font-size: 1.1rem;
`

export const OccurencesSpan = styled.span`
    font-weight: bold;
    opacity: 0.9;
    color: #ffffff;
    font-size: 1.25rem;
`