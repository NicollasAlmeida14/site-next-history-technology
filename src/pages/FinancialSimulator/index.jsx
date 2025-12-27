import DefaultHeader from "../../components/Header"
import {
    Button,
    CardDescription,
    Container,
    Description,
    DescriptionsContainer,
    InfosContainer,
    InfosWrapper,
    Input,
    InputsContainer,
    InputsContent,
    Main,
    Option,
    Select,
    SpanInput
} from "./styles"

function FinancialSimulator() {
    return (
        <Container>
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
                                <SpanInput>Informe seu faturamento diário</SpanInput>
                                <Input />
                            </InputsContent>

                            <InputsContent>
                                <SpanInput>Quantidade de funcionários</SpanInput>
                                <Input />
                            </InputsContent>
                        </InputsContainer>

                        <InputsContainer>
                            <InputsContent>
                                <SpanInput>Houve paralisação?</SpanInput>
                                <Select>
                                    <Option>Escolha uma opção</Option>
                                    <Option>Não</Option>
                                    <Option>Sim</Option>
                                </Select>
                            </InputsContent>

                            {/* <InputsContent>
                                <SpanInput>Quantos dias durou a paralisação?</SpanInput>
                                <Input />
                            </InputsContent> */}
                        </InputsContainer>

                        <Button>Calcular</Button>
                    </InfosWrapper>
                </InfosContainer>
            </Main>
        </Container>
    )
}

export default FinancialSimulator