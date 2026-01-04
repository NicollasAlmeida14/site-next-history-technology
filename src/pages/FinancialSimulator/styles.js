import styled, { keyframes } from "styled-components";

const arrowEffect = keyframes`
    0%, 100% {
        transform: translateX(10px);
    }

    50% {
        transform: translateX(0);
    }
`

const textEffect = keyframes`
    0%, 100% {
        scale: 1.5;
    }

    50% {
        scale: 1;
    }
`

export const Mask = styled.div`
    /* width: 100%;
    height: 100%;
    background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%);
    position: fixed;
    top: 0;
    z-index: 1000; */
`

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

export const StrikerInputsContent = styled.div`
    display: ${props => props.theme === 'valid' ? 'flex' : 'none'};
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

export const ResultContainer = styled.div`
    position: fixed;
    top: 25%;
    left: 25%;
    background-color: #ffffff;
    height: 60vh;
    width: 50vw;
    display: ${props => props.theme === 'visible' ? 'flex' : 'none' };
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    align-items: center;
    overflow-y: auto;
    gap: 2rem;
`

export const TablesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 1rem;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: solid 2px #a038f2;
`

export const Table = styled.table`
    border-collapse: collapse;
    text-align: center;
    vertical-align: middle;
`

export const Tr = styled.tr``

export const Th = styled.th`
    border: solid 1px #000000;
    padding: 0.7rem 0;
    background-color: #5A189A;
    color: #ffffff;
    font-size: 18px;
`

export const InfoTd = styled.td`
    border: solid 1px #000000;
    font-weight: bold;
    background-color: #a038f2;
    color: #ffffff;
    height: 50px;
    padding: 5px;
`

export const Td = styled.td`
    border: solid 1px #000000;
    width: 50%;
    font-size: 18px;
`

export const PrejudiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    border-bottom: solid 2px #a038f2;
    padding-bottom: 2rem;
`

export const Subtitle = styled.h2`
    color: #a038f2;
`

export const LossCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 2rem;
    margin-top: 1rem;
`

export const LossCardContent = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    align-items: center;
    border-radius: 15px;
    height: 150px;
    box-shadow: 0 4px 8px 3px rgba(160, 56, 242, 0.4);
    border: solid 2px #a038f2;
`

export const SubtitleSpan = styled.span`
    color: #5A189A;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const LossSpan = styled.span`
    font-size: 35px;
    font-weight: bold;
    color: #FF0000;
    text-shadow: 2px 2px 2px rgba(255, 0, 0, 0.25);
    text-align: center;
`

export const Span = styled.span`
    font-size: 22px;
    display: flex;
    align-items: center;
    gap: 1rem;

    i {
        animation: ${arrowEffect} infinite 2s ;
    }
`

export const FineContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
    }
`

export const TitleSpan = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: #5a189a;
`

export const TotalLossSpan = styled.span`
    font-size: 45px;
    font-weight: bold;
    color: #FF0000;
    text-shadow: 2px 2px 2px rgba(255, 0, 0, 0.25);
    text-align: center;
    animation: ${textEffect} infinite 2s ease-in-out;
`

export const LossReductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const LossReductionContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: 200px;
`

export const LossReductionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    height: 100%;
`

export const LossReductionDescription = styled.p`
    font-size: 18px;
`

export const ReductionSpan = styled.span`
    font-size: 35px;
    font-weight: bold;
    color: #00FF9C;
    text-shadow: 2px 2px 2px rgba(0, 255, 156, 0.5);
`

export const TotalReductionSpan = styled.span`
    font-size: 45px;
    font-weight: bold;
    color: #00FF9C;
    text-shadow: 2px 2px 2px rgba(0, 255, 156, 0.5);
    animation: ${textEffect} infinite 2s ease-in-out;
`