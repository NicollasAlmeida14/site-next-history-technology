import styled from "styled-components";

export const Container = styled.div`
    background-color: #EBEBEB;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    align-items: center;
    padding: 1rem 1.7rem;
    z-index: 1000;
`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Link = styled.a`
    position: relative;
    color: #A038F2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    text-decoration: none;
    padding: 0.5rem;
    z-index: 0;
    font-weight: bold;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #A038F2;
        width: 0;
        height: 100%;
        border-radius: 15px;
        z-index: -1;
        transition: width ease-in-out .5s;
    }

    &:hover::after {
        width: 100%;
    }

    &:hover {
        color: #ffffff;
        transition: ease-in-out .5s;
    }
`

export const IconBackground = styled.div`
    background-color: rgb(86, 48, 216,0.4);
    padding: 0.5rem;
    border-radius: 10px;
    border: solid 2px #5630D8;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: #5630D8;
    font-weight: bold;
`

export const HeaderTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding-left: 2.2rem;
`

export const Title = styled.h1`
    font-size: 27px;

    span {
        color: #5630D8;
    }
`

export const Subtitle = styled.span`
    color: rgb(160, 56, 242,0.5);
    font-size: 16px;
`

export const Stamp = styled.div`
    display: flex;
    gap: 0.7rem;
    background-color: rgb(86, 48, 216,0.4);
    color: #5630D8;
    padding: 4px 8px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 12px;
    align-items: center;
    border: solid 1px #5630D8;
`

export const NormsSpan = styled.span`
    color: #000000;
`

export const ReferecesContainer = styled.div`
    padding: 6.5rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const ReferencesTitle = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    border-left: solid 5px #5630D8;
    padding-left: 0.3rem;
    border-top-left-radius: 3.5px;
    border-bottom-left-radius: 3.5px;
`

export const ReferencesCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const ReferencesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    background: ${props => props.theme === 'Insurance' ?
        'linear-gradient(50deg, #007a3f, #63E352)' :
        props.theme === 'Moderate' ?
            'linear-gradient(45deg, #ffb11f, #ffea00)' :
            props.theme === 'High' ?
                'linear-gradient(45deg, #ff914d, #ff9800)' :
                'linear-gradient(45deg, #ff3131, #f44336)'} ;
    box-shadow: ${props => props.theme == 'Insurance' ?
        '0px 2px 15px 2px #63E352' :
        props.theme == 'Moderate' ?
            '0px 2px 15px 2px #FFEA00' :
            props.theme == 'Hight' ?
                '0px 2px 15px 2px #FF9800' :
                '0px 2px 15px 2px #F44336'};
    padding: 1rem;
    width: 300px;
    border-radius: 15px;
`

export const StatusSpan = styled.span`
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: bold;
`

export const StatusImage = styled.img`
    width: 80px;
`

export const PpmSpan = styled.span`
    font-size: 1.8rem;
    color: #ffffff;
    font-weight: bold;
    width: 100%;
    border-bottom: solid 2px rgb(255, 255, 255, 0.3);
    padding-bottom: 0.3rem;
`

export const Description = styled.p`
    color: #ffffff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 14px;
`

export const LimitsContainer = styled.div`
    background-color: rgb(86, 48, 216, 0.4);
    border-radius: 15px;
    border: solid 2px #5630D8;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const LimitsTitle = styled.span`
    font-weight: bold;
    font-size: 1.15rem;
    color: #ffffff;
`

export const LimitsSubtitle = styled.span`
    color: rgba(255, 255, 255, 0.6);
`

export const Table = styled.table`
    margin-top: 1rem;
    border-collapse: collapse;
`

export const Tr = styled.tr``

export const Th = styled.th`
    border-bottom: solid 2px rgba(255, 255, 255, 0.4);
    padding-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
`

export const NormsTd = styled.td`
    border-bottom: solid 2px rgba(255, 255, 255, 0.4);
    padding: 0.7rem;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1rem;
`

export const Td = styled.td`
    border-bottom: solid 2px rgba(255, 255, 255, 0.4);
    padding: 0.7rem;
    color: #ffffff;
    text-align: center;
`