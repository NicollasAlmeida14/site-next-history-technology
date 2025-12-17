import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1;
    padding: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 100px;
    }

    span {
        font-size: 25px;
        color: #5630d8;
        font-weight: bold;
    }
`

export const Nav = styled.nav`
    width: 100%;
    max-width: 800px;
`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;   
    justify-content: space-evenly;
`

export const Li = styled.li``

export const Link = styled.a`
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 4px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: #5a189a;
        transition: width ease-in-out 0.5s;
    }

    &:hover::after {
        width: 100%;
    }

    &:active {
        color: #5a189a;
        opacity: 0.8;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding-right: 2rem;
`

export const LoginButton = styled.button`
    border: none;
    cursor: pointer;
    color: #ffffff;
    background-color: #5630d8;
    border-radius: 50px;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 8px;
    width: 120px;
    transition: box-shadow ease-in-out 0.3s, opacity ease-in-out 0.3s;

    &:hover {
        box-shadow: 0px 0px 8px 2px #5630d8;
    }

    &:active {
        opacity: 0.8;
        box-shadow: none;
    }
`

export const RegisterButton = styled.button`
    border: 2px solid #5a189a;
    cursor: pointer;
    color: #5a189a;
    background-color: #ffffff;
    border-radius: 50px;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 8px;
    width: 120px;
    transition: box-shadow ease-in-out 0.3s, opacity ease-in-out 0.3s;

    &:hover {
        box-shadow: 0px 0px 8px 2px #5630d8;
    }

    &:active {
        opacity: 0.8;
        box-shadow: none;
    }
`