import {
    Aside,
    Button,
    ButtonIcon,
    CardImage,
    CardsContainer,
    ColdRoomsContainer,
    Container,
    LevelSpan,
    Li,
    Link,
    LogoContainer,
    MetricCard,
    MetricsContainer,
    Nav,
    OccurencesSpan,
    PpmSpan,
    Ul,
    WarningCard,
    WarningsContainer,
    WarningSpan,
    WarningSubtitle,
    WarningTitle,
    WarningTitleContainer
} from './styles'

import Logo from '../../assets/logo-nh3.png'
import InsuranceLogo from '../../assets/seguro.png'
import WarningLogo from '../../assets/metrica-alerta.png'
import RedWarningLogo from '../../assets/metrica-risco.png'

import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()

    return (
        <Container>
            <Aside>

                <LogoContainer>
                    <img src={Logo} alt="" />

                    <span>Bem vindo(a), alguém</span>
                </LogoContainer>

                <Nav>
                    <Ul>
                        <Li>
                            <Link>Visão Geral</Link>
                        </Li>
                    </Ul>
                </Nav>

                <Button onClick={() => navigate('/tela-de-login-nh3')}>
                    <ButtonIcon />
                    Sair
                </Button>
            </Aside>

            <CardsContainer>
                <MetricsContainer>
                    <MetricCard theme={'Insurance'}>
                        <CardImage src={InsuranceLogo} alt="" />

                        <div>
                            <LevelSpan>Seguro</LevelSpan>

                            <PpmSpan>PPM: 0 - 5</PpmSpan>
                        </div>
                    </MetricCard>

                    <MetricCard theme={'Moderate'}>
                        <CardImage src={WarningLogo} alt="" />

                        <div>
                            <LevelSpan>Moderado</LevelSpan>

                            <PpmSpan>PPM: 6 - 25</PpmSpan>
                        </div>
                    </MetricCard>

                    <MetricCard theme={'High'}>
                        <CardImage src={WarningLogo} alt="" />

                        <div>
                            <LevelSpan>Risco Alto</LevelSpan>

                            <PpmSpan>PPM: 26 - 50</PpmSpan>
                        </div>
                    </MetricCard>

                    <MetricCard>
                        <CardImage src={RedWarningLogo} alt="" />

                        <div>
                            <LevelSpan>Alerta Crítico</LevelSpan>

                            <PpmSpan>PPM: 50+</PpmSpan>
                        </div>
                    </MetricCard>
                </MetricsContainer>

                <ColdRoomsContainer></ColdRoomsContainer>
            </CardsContainer>

            <WarningsContainer>
                <WarningTitleContainer>
                    <WarningTitle>Alertas Totais</WarningTitle>

                    <WarningSubtitle>Monitoramento de Sensores em Tempo Real</WarningSubtitle>
                </WarningTitleContainer>

                <WarningCard theme={'Insurance'}>
                    <WarningSpan>Seguro</WarningSpan>

                    <OccurencesSpan>0 <span>ocorrências</span></OccurencesSpan>
                </WarningCard>

                <WarningCard theme={'Moderate'}>
                    <WarningSpan>Moderado</WarningSpan>

                    <OccurencesSpan>0 <span>ocorrências</span></OccurencesSpan>
                </WarningCard>

                <WarningCard theme={'High'}>
                    <WarningSpan>Risco Alto</WarningSpan>

                    <OccurencesSpan>0 <span>ocorrências</span></OccurencesSpan>
                </WarningCard>

                <WarningCard>
                    <WarningSpan>Alerta Crítico</WarningSpan>

                    <OccurencesSpan>0 <span>ocorrências</span></OccurencesSpan>
                </WarningCard>
            </WarningsContainer>
        </Container>
    )
}

export default Dashboard