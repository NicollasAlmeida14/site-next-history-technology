import styled from "styled-components";

import Banner from '../../assets/banner.png'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 45vw 55vw;
`

export const BannerContainer = styled.div`
    background-image: url(${Banner});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`

export const Link = styled.a`
    position: relative;
    margin: 1.5rem 35rem 0 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    z-index: 0;
    padding: 0.5rem;
    width: fit-content;

    &::after {
        content: '';
        position: absolute;
        height: 100%;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        width: 0;
        border-radius: 15px;
        z-index: -1;
        transition: width ease-in-out 0.3s;
    }

    &:hover::after {
        width: 100%;
    }

    &:hover {
        color: #a038f2;
        transition: ease-in-out 0.5s;
    }
`

export const PhraseContainer = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
`

export const Title = styled.h1`
    font-size: 50px;
    color: #ffffff;
    border-bottom: solid 5px #ffffff;
    padding-bottom: 0.7rem;
`

export const Subtitle = styled.h2`
    font-size: 25px;
    color: #ffffff;
`

export const InfosContainer = styled.div`
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;

    img {
        position: absolute;
        width: 180px;
        top: 0;
        right: 0;
    }
`

export const InfoSpan = styled.span`
    font-size: 45px;
    font-weight: bold;
    color: #5630D8;
    border-bottom: solid 5px #5630D8;
    padding-bottom: 0.7rem;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`

export const InputLabel = styled.label`
    position: absolute;
    left: 5px;
    top: 15px;
    font-size: 1.3rem;
    color: #5630D8;
    pointer-events: none;
    transition: all .5s;
`

export const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    width: 250px;
    border-bottom: solid 2px rgba(86, 48, 216, 0.25);
    padding: 0.7rem 0.5rem;
    font-size: 1.1rem;

    &:focus~${InputLabel},
    &:not(:placeholder-shown)~${InputLabel} {
        left: 0;
        top: -15px;
        font-size: 1rem;
        color: #5a189a;
        font-weight: 500;
    }

    &:focus,
    &:not(:placeholder-shown) {
        border-bottom: solid 2px #5a189a;
    }
`

export const ForgetPasswordSpan = styled.span``

export const Button = styled.button`
    border: none;
    border-radius: 15px;
    padding: 0.7rem 0.35rem;
    background-color: #5630D8;
    font-size: 1.5rem;
    width: 220px;
    color: #ffffff;
    box-shadow: 2px 2px 1px 0 #06004F;
    cursor: pointer;
    font-weight: bold;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: translateY(-5px);
    }

    &:active {
        transform: translateY(0);
        opacity: 0.7;
    }
`

export const Span = styled.span`
    font-size: 1.2rem;
    color: #5630D8;
    font-weight: bold;

    a {
        opacity: 0.5;
        transition: all ease-in-out 0.3s;

        &:hover {
            text-decoration: none;
            color: #5630D8;
            opacity: 0.8;
        }
    }
`