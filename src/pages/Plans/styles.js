import styled from "styled-components";

import PlanBackground from '../../assets/plano-de-fundo-planos.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    padding: 1rem;
`

export const Link = styled.a`
    position: relative;
    color: #5630d8;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    z-index: 0;
    text-decoration: none;
    align-self: flex-start;

    &::after {
        content: '';
        width: 0;
        height: 100%;
        background-color: #5630d8;
        border-radius: 15px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
        transition: ease-in-out .5s;
    }

    &:hover::after {
        width: 100%;
    }

    &:hover {
        color: #ffffff;
        transition: .5s ease-in-out;
    }
`

export const Title = styled.h1`
    font-size: 2.2rem;
    color: #5630d8;
`

export const PlansContainer = styled.div`
    display: flex;
    width: 100%;
    background-image: url(${PlanBackground});
    background-size: cover;
    margin-top: 1.5rem;
    min-height: 70vh;
    padding: 2rem 1rem;
    border-radius: 15px;
    justify-content: space-around;
`

export const PlansCard = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 15px;
    width: 400px;
    justify-content: space-around;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
`

export const PlanTitle = styled.h2`
    font-size: 1.7rem;
    color: #5630d8;
`

export const PlanSubtitle = styled.h3`
    font-size: 1rem;
    color: #52616B;
`

export const PlanPrice = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    color: #5630d8;
    border-bottom: solid 5px #5630d8;
    padding-bottom: 0.7rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const PlanDescription = styled.p`
    color: #52616B;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Li = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    color: #5630d8;
`

export const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 15px;
    width: 400px;
`

export const Input = styled.input`
    padding: 0.8rem 0.7rem;
    width: 100%;
    font-size: 1.2rem;
    outline-color: #5630d8;
    border-radius: 10px;
    border: solid 1px #52616B;
    
    &::placeholder {
        color: #5630d8;
        opacity: 0.7;
    }

    &:focus {
        border: solid 1px #5630d8;
    }
`

export const Textarea = styled.textarea`
    padding: 0.8rem 0.5rem;
    width: 100%;
    font-size: 1.2rem;
    outline-color: #5630d8;
    border-radius: 10px;
    border: solid 1px #52616B;
    
    &::placeholder {
        color: #5630d8;
        opacity: 0.7;
    }

    &:focus {
        border: solid 1px #5630d8;
    }
`

export const Button = styled.button`
    background-color: #5630d8;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 15px;
    width: 100%;
    padding: 0.8rem 0;
    cursor: pointer;

    &:hover {
        background-color: #4523b5;
        transition: .3s ease-in-out;
    }

    &:active {
        opacity: 0.7;
        transition: .3s ease;
    }
`