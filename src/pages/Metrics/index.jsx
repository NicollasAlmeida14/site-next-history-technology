import {
    Container,
    Description,
    Header,
    HeaderTextsContainer,
    IconBackground,
    LimitsContainer,
    LimitsSubtitle,
    LimitsTitle,
    Link,
    LinkContainer,
    NormsSpan,
    NormsTd,
    PpmSpan,
    ReferecesContainer,
    ReferencesCard,
    ReferencesCardContainer,
    ReferencesTitle,
    Stamp,
    StatusImage,
    StatusSpan,
    Subtitle,
    Table,
    Td,
    TextsContainer,
    Th,
    Title,
    Tr,
    Wrapper
} from "./styles";

import Logo from '../../assets/logo-nh3.png'
import InsuranceLogo from '../../assets/seguro.png'
import WarningLogo from '../../assets/metrica-alerta.png'
import RedWarningLogo from '../../assets/metrica-risco.png'

import { FaArrowLeft, FaFileAlt } from "react-icons/fa";
import { LuGauge, LuShield } from "react-icons/lu";

function Metrics() {
    return (
        <Container>
            <Header>
                <LinkContainer>
                    <Link href="/">
                        <FaArrowLeft />
                        Voltar
                    </Link>

                    <IconBackground>
                        <LuGauge />
                    </IconBackground>
                </LinkContainer>

                <HeaderTextsContainer>
                    <Title>Métricas de <span>Monitoramento NH3</span></Title>

                    <Subtitle>
                        Garanta segurança e conformidade com as normas brasileiras
                    </Subtitle>
                </HeaderTextsContainer>


                <Stamp>
                    <LuShield style={{ fontSize: '1.55rem' }} />

                    <NormsSpan>NR 15 | NR 33 | NR 36</NormsSpan>
                </Stamp>
            </Header>

            <ReferecesContainer>
                <ReferencesTitle>Níveis de Referência</ReferencesTitle>

                <ReferencesCardContainer>
                    <ReferencesCard theme={'Insurance'}>
                        <StatusSpan>Seguro</StatusSpan>

                        <StatusImage src={InsuranceLogo} />

                        <PpmSpan>0 - 5 PPM</PpmSpan>

                        <Description>
                            De 0 até 5 PPM, o ambiente apresenta odor característico da amônia, mas o ambiente está "seguro".
                        </Description>
                    </ReferencesCard>

                    <ReferencesCard theme={'Moderate'}>
                        <StatusSpan>Risco Moderado</StatusSpan>

                        <StatusImage src={WarningLogo} />

                        <PpmSpan>6 - 25 PPM</PpmSpan>

                        <Description>
                            Com irritações "leves" (nos olhos e no trato respiratório).
                        </Description>
                    </ReferencesCard>

                    <ReferencesCard theme={'High'}>
                        <StatusSpan>Risco Alto</StatusSpan>

                        <StatusImage src={WarningLogo} />

                        <PpmSpan>26 - 50 PPM</PpmSpan>

                        <Description>
                            Com risco é "alto", causando efeitos ainda mais graves.
                        </Description>
                    </ReferencesCard>

                    <ReferencesCard>
                        <StatusSpan>Risco Crítico</StatusSpan>

                        <StatusImage src={RedWarningLogo} />

                        <PpmSpan>+50 PPM</PpmSpan>

                        <Description>
                            O risco é "extremo" causando sintomas como inchaço, conjuntivite e vômito. Onde a exposição prolongada a altas concentrações pode resultar em morte.
                        </Description>
                    </ReferencesCard>
                </ReferencesCardContainer>

                <LimitsContainer>
                    <Wrapper>
                        <IconBackground
                            style={{
                                width: '35px',
                                height: '35px',
                                fontSize: '1.5rem'
                            }}>
                            <FaFileAlt />
                        </IconBackground>

                        <TextsContainer>
                            <LimitsTitle>Limites Normativos</LimitsTitle>

                            <LimitsSubtitle>Referências NR 15, NR 33 e NR 36</LimitsSubtitle>
                        </TextsContainer>
                    </Wrapper>

                    <Table>
                        <Tr>
                            <Th>Norma Regulamentadora</Th>
                            <Th>O que estabelece?</Th>
                            <Th>Observações</Th>
                        </Tr>

                        <Tr>
                            <NormsTd>NR 15</NormsTd>

                            <Td>
                                Estabelece o limite de exposição a agentes quimicos em até 20
                                <br />
                                ppm para 48h semanais por jornada
                            </Td>

                            <Td>
                                Base legal para controle de exposição;
                                <br />
                                Serve de referência para alarmes de segurança.
                            </Td>
                        </Tr>

                        <Tr>
                            <NormsTd>NR 33</NormsTd>

                            <Td>
                                Exige avaliação contínua de ambientes confinados, ou seja,
                                <br />
                                monitoramento.
                            </Td>

                            <Td>Previne asfixia e explosões por acúmulo de gás;
                                <br />
                                Garante ventilação adequada e planos de emergência.
                            </Td>
                        </Tr>

                        <Tr>
                            <NormsTd>NR 36</NormsTd>

                            <Td>
                                Determina a instalação de sensores e alertas de segurança em
                                <br />
                                frigoríficos e câmaras frias.
                            </Td>

                            <Td>
                                Define ações automáticas em caso de vazamento;
                                <br />
                                Protege os trabalhadores e evita contaminação dos alimentos.
                            </Td>
                        </Tr>
                    </Table>
                </LimitsContainer>
            </ReferecesContainer>

        </Container>
    )
}

export default Metrics