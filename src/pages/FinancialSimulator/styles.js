import styled from "styled-components";

export const Container = styled.div`
    padding-top: 9rem;
`

export const Main = styled.main`
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h1 {
        color: #5A189A;
    }
`

export const DescriptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
`
export const CardDescription = styled.div`
    background-color: #F9F9F9;
    padding: 2.7rem 1rem;
    width: 70%;
    box-shadow: 4px 8px 4px 0 rgba(0,0,0,0.25);
    border-radius: 15px;
`

export const Description = styled.p`
    font-size: 18px;
    line-height: 1.5;
`

export const InfosContainer = styled.div`
    display: flex;
    align-items: center;
`

export const InfosWrapper = styled.div`
    box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
`

export const InputsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const SpanInput = styled.span`
    font-size: 15px;
    font-weight: bold;
`

export const Input = styled.input`
    width: 200px;
    border-radius: 5px;
    border: solid 2px #5A189A;
    padding: 3px 10px;
    font-size: 18px;
    outline-style: none;
`

export const Select = styled.select`
    width: 200px;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    background-color: #5A189A;
    font-weight: bold;
    font-size: 16px;
    padding: 5.5px 5px;
    outline-style: none;
`

export const Option = styled.option``

export const Button = styled.button`
    border: 2px solid #5a189a;
    cursor: pointer;
    color: #5a189a;
    background-color: #ffffff;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 5px;
    width: 180px;
    transition: all ease-in-out 0.3s;

    &:hover {
       background-color: #5a189a;
       color: #ffffff;
    }

    &:active {
        opacity: 0.8;
    }
`