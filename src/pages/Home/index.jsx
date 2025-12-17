import DefaultHeader from "../../components/Header"

function Home() {
    return (
        <Container>
            <DefaultHeader />

            <Main>
                <h1>
                    Monitoramento de
                    <br />
                    vazamentos de gás amônia no
                    <br />
                    sistema de refrigeração de
                    <br />
                    frigoríficos
                </h1>

                <button>Ver nossas missões</button>
            </Main>

            <SoluctionsSection>
                <h1>Nossas Soluções</h1>

                <SoluctionsCardsWrapper>
                    <SoluctionsCard>
                        <SoluctionImage src="" alt="" />

                        <SoluctionCardTitle>Detecção Precisa</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Sensores Arduino de alta precisão
                            detectam vazamentos de amônia
                            instantaneamente.
                        </SoluctionCardDescription>
                    </SoluctionsCard>

                    <SoluctionsCard>
                        <SoluctionImage src="" alt="" />

                        <SoluctionCardTitle>Resposta Rápida</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Dashboard web completo com
                            histórico e análises detalhadas dos
                            dados
                        </SoluctionCardDescription>
                    </SoluctionsCard>

                    <SoluctionsCard>
                        <SoluctionImage src="" alt="" />

                        <SoluctionCardTitle>Monitoramento 24/7</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Dashboard web completo com
                            histórico e análises detalhadas dos
                            dados.
                        </SoluctionCardDescription>
                    </SoluctionsCard>
                </SoluctionsCardsWrapper>
            </SoluctionsSection>
        </Container>
    )
}

export default Home