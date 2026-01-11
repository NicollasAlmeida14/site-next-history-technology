import styled from "styled-components";

import Banner from '../../assets/banner.png'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 35vw 65vw;
    align-items: center;
`

export const BannerContainer = styled.div`
    background-image: url(${Banner});
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
`

export const Link = styled.a`
    position: relative;
    margin: 1.5rem 24rem 0 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem;
    width: fit-content;
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        z-index: -1;
        background-color: #ffffff;
        width: 0;
        border-radius: 15px;
        transition: width ease-in-out 0.3s;
    }

    &:hover::after {
        width: 100%;
    }

    &:hover {
        color: #a038f2;
        transition: ease-in-out 0.5s;
    }

    &:active {
        opacity: 0.5;
        transition: ease-in 0.2s;
    }
`

export const BannerSpan = styled.span`
    text-align: center;
    margin: auto 0;
    border-bottom: solid 5px #ffffff;
    border-top: solid 5px #ffffff;
    padding: 1rem 0;
    width: max-content;
    color: #ffffff;
    font-weight: bold;
    font-size: 50px;
`

export const InfosContainer = styled.div`
    background-color: #ebebeb;
    height: 100%;
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    img {
        width: 180px;
        position: absolute;
        top: 0;
        right: 0;
    }
`

export const Title = styled.h1`
    font-size: 50px;
    color: #5630D8;
    border-bottom: solid 5px #5630D8;
    padding-bottom: 0.7rem;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    align-items: center;
`

export const DuoContainer = styled.div`
    display: flex;
    gap: 2.5rem;
`

export const InputWrapper = styled.div`
    position: relative;
`

export const InputLabel = styled.label`
    font-size: 1.3rem;
    position: absolute;
    top: 15px;
    left: 5px;
    transition: all .5s;
    pointer-events: none;
    color: #5630D8;
`

export const Input = styled.input`
    border: none;
    background: none;
    outline: none;
    width: 250px;
    border-bottom: solid 2px rgba(86, 48, 216, 0.25);
    opacity: 100%;
    padding: 0.7rem 0.5rem;
    font-size: 1.1rem;

    &:focus ~ ${InputLabel},
    &:not(:placeholder-shown) ~ ${InputLabel}{
        top: -10px;
        left: 0;
        font-size: 1rem;
        color: #5a189a; 
        font-weight: 500;
    }

    &:focus ,
    &:not(:placeholder-shown) {
        border-bottom: solid 2px #5a189a;
    }
`

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

export const RegisterSpan = styled.span`
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
