import {
    Button,
    CardDescription,
    LossSpan,
    Container,
    Description,
    DescriptionsContainer,
    InfosContainer,
    InfosWrapper,
    InfoTd,
    Input,
    InputsContainer,
    InputsContent,
    LossCardContainer,
    LossCardContent,
    Main,
    Mask,
    Option,
    PrejudiceContainer,
    ResultContainer,
    Select,
    Span,
    SpanInput,
    StrikerInputsContent,
    Subtitle,
    SubtitleSpan,
    Table,
    TablesContainer,
    Td,
    Th,
    Tr,
    FineContainer,
    TotalLossSpan,
    LossReductionContainer,
    LossReductionContent,
    LossReductionWrapper,
    LossReductionDescription,
    TitleSpan,
    ReductionSpan,
    TotalReductionSpan
} from "./styles"

import DefaultHeader from "../../components/Header"

import { FaArrowRight } from "react-icons/fa";

import { useState } from "react"

import formatCurrency from "../../utils/formatCurrency";

function FinancialSimulator() {
    const [selectedValue, setSelectedValue] = useState('#')

    const [dailyBilling, setDailyBilling] = useState(0)

    const [strikesDay, setStrikesDay] = useState(0)

    const [quantityEmployee, setQuantityEmployee] = useState(0)

    const [activateSummary, setActivateSummary] = useState(false)

    const [activateMask, setActivateMask] = useState(false)

    const minFineBase = 443.97
    const recidivismFine = 44396.84
    const employeeFine = 104.31
    const monthlyBilling = dailyBilling * 30

    const loss = dailyBilling * strikesDay


    const employeeLoss = quantityEmployee * employeeFine
    const totalFine = employeeLoss + minFineBase + recidivismFine
    const fineImpacts = ((totalFine / monthlyBilling) * 100).toFixed(2)
    const totalLoss = loss + totalFine + employeeLoss
    const totalSaved = totalFine
    const maxFine = recidivismFine + employeeLoss

    const validateInfos = () => {
        if (selectedValue === '#' ||
            (dailyBilling === '' || dailyBilling <= 0) ||
            (quantityEmployee === '' || quantityEmployee <= 0) ||
            (selectedValue === 'yes' && (strikesDay === '' || strikesDay <= 0))
        ) {
            alert('preencha as informações corretamente')
        } else {
            setActivateSummary(true)
            setActivateMask(true)
        }
    }

    const hideAll = () => {
        setActivateMask(false)
        setActivateSummary(false)
    }

    return (
        <Container>
            <Mask
                theme={activateMask === true ? 'show' : ''}
                onClick={hideAll}
            ></Mask>

            <DefaultHeader />

            <Main>
                <DescriptionsContainer>
                    <h1>Simulador Financeiro NH3</h1>

                    <CardDescription>
                        <Description>
                            Um frigorífico deve ter sistemas de monitoramento de gás de acordo com a lei NR-15 e NR-36, e em caso de descumprimento, estará suscetível a multas e indenizações.
                        </Description>
                    </CardDescription>

                    <CardDescription>
                        <Description>
                            Calcule o prejuízo potencial em caso de vazamento de gás amônia no seu frigorífico e a recuperação com redução de riscos.
                        </Description>
                    </CardDescription>
                </DescriptionsContainer>

                <InfosContainer>
                    <InfosWrapper>
                        <InputsContainer>
                            <InputsContent>
                                <SpanInput>Faturamento diário</SpanInput>
                                <Input
                                    type="number"
                                    onChange={(e) => Number(setDailyBilling(e.target.value))}
                                />
                            </InputsContent>

                            <InputsContent>
                                <SpanInput>Quantidade de funcionários</SpanInput>

                                <Input
                                    type="number"
                                    onChange={(e) => Number(setQuantityEmployee(e.target.value))}
                                />
                            </InputsContent>
                        </InputsContainer>

                        <InputsContainer>
                            <InputsContent>
                                <SpanInput>Houve paralisação?</SpanInput>
                                <Select
                                    onChange={(e) => setSelectedValue(e.target.value)}
                                    defaultValue={'#'}
                                >
                                    <Option value={'#'} disabled>Escolha uma opção</Option>
                                    <Option value={'no'}>Não</Option>
                                    <Option value={'yes'}>Sim</Option>
                                </Select>
                            </InputsContent>

                            <StrikerInputsContent theme={selectedValue === 'yes' ? 'valid' : ''}>
                                <SpanInput>Tempo de paralisação (dias)</SpanInput>
                                <Input type="number"
                                    onChange={(e) => Number(setStrikesDay(e.target.value))}
                                />
                            </StrikerInputsContent>
                        </InputsContainer>

                        <Button onClick={validateInfos}>Calcular</Button>
                    </InfosWrapper>
                </InfosContainer>
            </Main>

            <ResultContainer theme={activateSummary === true ? 'visible' : ''}>
                <TablesContainer>
                    <Table>
                        <Tr>
                            <Th colSpan={2}>Faturamento Mensal</Th>
                        </Tr>

                        <Tr>
                            <InfoTd>Faturamento estimado</InfoTd>
                            <Td>{formatCurrency(monthlyBilling)}</Td>
                        </Tr>

                        <Tr>
                            <InfoTd>Impacto das multas</InfoTd>
                            <Td>{`${formatCurrency(fineImpacts)}%`}</Td>
                        </Tr>
                    </Table>

                    <Table>
                        <Tr>
                            <Th colSpan={2}>Multas</Th>
                        </Tr>

                        <Tr>
                            <InfoTd>Multa mínima</InfoTd>
                            <Td>{formatCurrency(minFineBase)}</Td>
                        </Tr>

                        <Tr>
                            <InfoTd>Multa máxima em caso de reincidência</InfoTd>
                            <Td>{formatCurrency(maxFine)}</Td>
                        </Tr>

                        <Tr>
                            <InfoTd>Multa por funcionário</InfoTd>
                            <Td>{formatCurrency(employeeFine)}</Td>
                        </Tr>
                    </Table>
                </TablesContainer>

                <PrejudiceContainer>
                    <Subtitle>Prejuízo estimado</Subtitle>

                    <LossCardContainer>
                        <LossCardContent>
                            <SubtitleSpan>Perda direta de faturamento:</SubtitleSpan>
                            <LossSpan>
                                {selectedValue === 'yes' ? formatCurrency(loss) : formatCurrency(0)}
                            </LossSpan>
                        </LossCardContent>

                        <LossCardContent>
                            <SubtitleSpan>Multa pelo total de funcionários:</SubtitleSpan>
                            <LossSpan>{formatCurrency(employeeLoss)}</LossSpan>
                        </LossCardContent>
                    </LossCardContainer>

                    <FineContainer>
                        <Span>
                            Em caso de reincidência
                            <i> <FaArrowRight /> </i>
                        </Span>

                        <div>
                            <SubtitleSpan>Total de multas:</SubtitleSpan>
                            <LossSpan>{formatCurrency(totalFine)}</LossSpan>
                        </div>
                    </FineContainer>

                    <TitleSpan>Perda total estimada:</TitleSpan>
                    <TotalLossSpan>{formatCurrency(totalLoss)}</TotalLossSpan>
                </PrejudiceContainer>

                <LossReductionContainer>
                    <Subtitle>Com nosso sistema...</Subtitle>

                    <LossReductionContent>
                        <LossReductionWrapper>
                            <SubtitleSpan>Simulação de redução de prejuízo</SubtitleSpan>

                            <LossReductionDescription>
                                Com nossa equipe, você terá uma melhoria de
                                <br />
                                <br />
                                <ReductionSpan>{`${formatCurrency(fineImpacts)}%`}</ReductionSpan>
                                <br />
                                <br />
                                em cima do seu faturamento mensal referente ao total de multas
                            </LossReductionDescription>
                        </LossReductionWrapper>

                        <LossReductionWrapper>
                            <SubtitleSpan>Eliminando a perda de:</SubtitleSpan>

                            <ReductionSpan>{formatCurrency(totalFine)}</ReductionSpan>

                            <LossReductionDescription>em multas!</LossReductionDescription>
                        </LossReductionWrapper>
                    </LossReductionContent>

                    <TitleSpan>Total Poupado:</TitleSpan>
                    <TotalReductionSpan>{formatCurrency(totalSaved)}</TotalReductionSpan>
                </LossReductionContainer>
            </ResultContainer>
        </Container>
    )
}

export default FinancialSimulator