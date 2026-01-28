import {
    Container,
    Description,
    Header,
    IconBackground,
    LimitsContainer,
    LimitsSubtitle,
    LimitsTitle,
    Link,
    NormsSpan,
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

import { FaArrowLeft, FaFileAlt } from "react-icons/fa";
import { LuGauge, LuShield } from "react-icons/lu";

function Metrics() {
    return (
        <Container>
            <Header>
                <Link>
                    <FaArrowLeft />
                    Voltar
                </Link>

                <Wrapper>
                    <IconBackground>
                        <LuGauge />
                    </IconBackground>

                    <TextsContainer>
                        <Title>Métricas de <span>Monitoramento NH3</span></Title>

                        <Subtitle>
                            Garanta segurança e conformidade com as normas brasileiras
                        </Subtitle>
                    </TextsContainer>
                </Wrapper>

                <Stamp>
                    <LuShield />

                    <NormsSpan>NR 15 | NR 33 | NR36</NormsSpan>
                </Stamp>
            </Header>

            <ReferecesContainer>
                <ReferencesTitle>Níveis de Referência</ReferencesTitle>

                <ReferencesCardContainer>
                    <ReferencesCard>
                        <StatusSpan>Seguro</StatusSpan>

                        <StatusImage src />

                        <PpmSpan>0 - 5 PPM</PpmSpan>

                        <Description>
                            De 0 até 5 PPM, o ambiente apresenta odor característico da amônia, mas o ambiente está "seguro".
                        </Description>
                    </ReferencesCard>

                    <ReferencesCard>
                        <StatusSpan>Risco Moderado</StatusSpan>

                        <StatusImage src />

                        <PpmSpan>6 - 25 PPM</PpmSpan>

                        <Description>
                            Com irritações "leves" (nos olhos e no trato respiratório).
                        </Description>
                    </ReferencesCard>

                    <ReferencesCard>
                        <StatusSpan>Risco Alto</StatusSpan>

                        <StatusImage src />

                        <PpmSpan>26 - 50 PPM</PpmSpan>

                        <Description>
                            Com risco é "alto", causando efeitos ainda mais graves.
                        </Description>
                    </ReferencesCard>

                    <ReferencesCard>
                        <StatusSpan>Risco Crítico</StatusSpan>

                        <StatusImage src />

                        <PpmSpan>+50 PPM</PpmSpan>

                        <Description>
                            O risco é "extremo" causando sintomas como inchaço, conjuntivite e vômito. Onde a exposição prolongada a altas concentrações pode resultar em morte.
                        </Description>
                    </ReferencesCard>
                </ReferencesCardContainer>

                <LimitsContainer>
                    <Wrapper>
                        <FaFileAlt />

                        <TextsContainer>
                            <LimitsTitle>Limites Normativos</LimitsTitle>

                            <LimitsSubtitle>Referências NR 15, NR 33 e NR 36</LimitsSubtitle>
                        </TextsContainer>

                        <Table>
                            <Tr>
                                <Th>Norma Regulamentadora</Th>
                                <Th>O que estabelece?</Th>
                                <Th>Observações</Th>
                            </Tr>

                            <Tr>
                                <Td>NR 15</Td>

                                <Td>
                                    Estabelece o limite de exposição a agentes quimicos em até 20 ppm para 48h semanais por jornada
                                </Td>

                                <Td>
                                    Base legal para controle de exposição;
                                    <br />
                                    Serve de referência para alarmes de segurança.
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>NR 33</Td>

                                <Td>
                                    Exige avaliação contínua de ambientes confinados, ou seja, monitoramento.
                                </Td>

                                <Td>Previne asfixia e explosões por acúmulo de gás;
                                    <br />
                                    Garante ventilação adequada e planos de emergência.
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>NR 36</Td>

                                <Td>
                                    Determina a instalação de sensores e alertas de segurança em frigoríficos e câmaras frias.
                                </Td>

                                <Td>
                                    Define ações automáticas em caso de vazamento;
                                    <br />
                                    Protege os trabalhadores e evita contaminação dos alimentos.
                                </Td>
                            </Tr>
                        </Table>
                    </Wrapper>
                </LimitsContainer>
            </ReferecesContainer>

        </Container>
    )
}

export default Metrics