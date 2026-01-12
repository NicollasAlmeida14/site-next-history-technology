import styled from "styled-components"

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