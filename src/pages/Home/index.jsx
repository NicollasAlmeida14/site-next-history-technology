import DetectionImage from '../../assets/deteccao.png'
import FastResponseImage from '../../assets/resposta.png'
import MonitoringImage from '../../assets/monitoramento.png'
import Logo from '../../assets/logo-nh3.png'
import RefrigerationSystem from '../../assets/sistema-refrigeracao.png'
import Mission from '../../assets/missao.png'
import Vision from '../../assets/visao.png'
import Values from '../../assets/valor.png'

import {
    AboutUsDescriptionCard,
    AboutUsSection,
    BaseboardContainer,
    Container,
    EmailContainer,
    EmailInputContainer,
    Footer,
    Li,
    Link,
    LinksContainer,
    LogoContainer,
    Main,
    MainContentContainer,
    PoliciesContainer,
    PurposeImage,
    QuestionsContainer,
    ServiceContainer,
    ShortcutContainer,
    SocialMidiaLogo,
    SocialMidiasContainer,
    SoluctionCardDescription,
    SoluctionCardTitle,
    SoluctionImage,
    SoluctionsCard,
    SoluctionsCardsWrapper,
    SoluctionsSection,
    Span,
    SpanTitleFooter,
    Subtitle,
    Ul,
    Purpose,
    PurposeDescription,
    PurposesCard,
    PurposesSection,
    WhatIsItForCardDescription,
    WhatIsItForSection,
    ImageBackground
} from "./styles"

import DefaultHeader from "../../components/Header"

function Home() {
    return (
        <Container>
            <DefaultHeader />

            <Main>
                <span>
                    Monitoramento de
                    <br />
                    vazamentos de gás amônia no
                    <br />
                    sistema de refrigeração de
                    <br />
                    frigoríficos
                </span>

                <a href="">
                    <button>Ver nossas missões</button>
                </a>
            </Main>

            <SoluctionsSection>
                <h1>Nossas Soluções</h1>

                <SoluctionsCardsWrapper>
                    <SoluctionsCard>
                        <SoluctionImage src={DetectionImage} alt="Imagem de um escudo" />

                        <SoluctionCardTitle>Detecção Precisa</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Sensores Arduino de alta precisão
                            detectam vazamentos de amônia
                            instantaneamente.
                        </SoluctionCardDescription>
                    </SoluctionsCard>

                    <SoluctionsCard>
                        <SoluctionImage src={FastResponseImage} alt="Imagem de um raio" />

                        <SoluctionCardTitle>Resposta Rápida</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Dashboard web completo com
                            histórico e análises detalhadas dos
                            dados
                        </SoluctionCardDescription>
                    </SoluctionsCard>

                    <SoluctionsCard>
                        <SoluctionImage src={MonitoringImage} alt="Imagem de uma câmera" />

                        <SoluctionCardTitle>Monitoramento 24/7</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Dashboard web completo com
                            histórico e análises detalhadas dos
                            dados.
                        </SoluctionCardDescription>
                    </SoluctionsCard>
                </SoluctionsCardsWrapper>
            </SoluctionsSection>

            <AboutUsSection>
                <img src={Logo} alt="Logo da Next History Technology" />

                <AboutUsDescriptionCard>
                    <Subtitle>Quem Somos?</Subtitle>

                    <p>
                        A Next History Technology foi fundada em agosto de 2025, nossa empresa desenvolve soluções tecnológicas inovadoras em IoT, com foco na segurança industrial. Atuamos em frigoríficos de carne de grande porte, oferecendo sistemas de detecção de amônia que combinam sensores de gás ligados a arduinos de alta precisão com plataformas web intuitivas, garantindo monitoramento eficiente.
                    </p>
                </AboutUsDescriptionCard>
            </AboutUsSection>

            <WhatIsItForSection>
                <img src={RefrigerationSystem} alt="Imagem de um sistema de refrigeração de um frigorífico" />

                <WhatIsItForCardDescription>

                    <Subtitle>Pra que Serve?</Subtitle>

                    <span>
                        Monitoramento de Vazamentos de gás amônia
                        no Sistema de Refrigeração em Frigoríficos.
                    </span>

                    <ul>
                        <li>Garantir que o frigorifico atenda a lei NR - 36</li>
                        <li>Evitar a paralização das operações</li>
                        <li>Em caso de vazamento a empresa é avisada</li>
                        <li>Evitar processos para empresa</li>
                    </ul>

                </WhatIsItForCardDescription>
            </WhatIsItForSection>

            <PurposesSection>
                <PurposesCard>
                    <ImageBackground>
                        <PurposeImage src={Mission} alt="Image de um tiro ao alvo" />
                    </ImageBackground>

                    <Purpose>Missão</Purpose>

                    <PurposeDescription></PurposeDescription>
                </PurposesCard>

                <PurposesCard>
                    <ImageBackground>
                        <PurposeImage src="" alt="" />
                    </ImageBackground>

                    <Purpose>Missão</Purpose>

                    <PurposeDescription></PurposeDescription>
                </PurposesCard>

                <PurposesCard>
                    <ImageBackground>
                        <PurposeImage src="" alt="" />
                    </ImageBackground>

                    <Purpose>Missão</Purpose>

                    <PurposeDescription></PurposeDescription>
                </PurposesCard>
            </PurposesSection>

            {/* <PurposesSection>
                <PurposesCard>
                <ImageBackground>
                    <PurposeImage src="" alt="" />
                    </ImageBackground>

                    <Purpose>Missão</Purpose>

                    <PurposeDescription></PurposeDescription>
                </PurposesCard>

                <PurposesCard>
                <ImageBackground>
                    <PurposeImage src="" alt="" />
                    </ImageBackground>

                    <Purpose>Missão</Purpose>

                    <PurposeDescription></PurposeDescription>
                </PurposesCard>

                <PurposesCard>
                <ImageBackground>
                    <PurposeImage src="" alt="" />
                    </ImageBackground>

                    <Purpose>Missão</Purpose>

                    <PurposeDescription></PurposeDescription>
                </PurposesCard>
            </PurposesSection> */}

            <Footer>
                <LogoContainer>
                    <span>Nest History Technology</span>

                    <img src="" alt="" />
                </LogoContainer>

                <MainContentContainer>
                    <LinksContainer>
                        <ShortcutContainer>
                            <SpanTitleFooter>Atalhos</SpanTitleFooter>

                            <Ul>
                                <Li>
                                    <Link>Home</Link>
                                </Li>

                                <Li>
                                    <Link>Soluções</Link>
                                </Li>

                                <Li>
                                    <Link>Benefícios</Link>
                                </Li>

                                <Li>
                                    <Link>História</Link>
                                </Li>

                                <Li>
                                    <Link>Colaboradores</Link>
                                </Li>
                            </Ul>
                        </ShortcutContainer>

                        <QuestionsContainer>
                            <Ul>
                                <Li>
                                    <Link>Dúvidas Frequentes</Link>
                                </Li>

                                <Li>
                                    <Link>Suporte ao cliente</Link>
                                </Li>
                            </Ul>
                        </QuestionsContainer>

                        <ServiceContainer>
                            <Ul>
                                <Li>
                                    <Link>(11) 95798-6462</Link>
                                </Li>

                                <Li>
                                    <Link>Segunda a Sexta</Link>
                                </Li>
                            </Ul>
                        </ServiceContainer>
                    </LinksContainer>

                    <EmailContainer>
                        <SpanTitleFooter>Entre em contato pelo nosso E-mail</SpanTitleFooter>

                        <Span>Tire suas dúvidas ou entre em contato para fechar negócio.</Span>

                        <EmailInputContainer>
                            <input type="email" placeholder="empresaria@nhtech.com" />
                            <button>E-mail</button>
                        </EmailInputContainer>
                    </EmailContainer>
                </MainContentContainer>

                <BaseboardContainer>
                    <Span>2025© Todos os direitos reservados</Span>

                    <PoliciesContainer>
                        <Span>Política de Privacidade</Span>

                        <Span>Termos e Condições</Span>

                        <Span>Política de Cookies</Span>
                    </PoliciesContainer>

                    <SocialMidiasContainer>
                        <SocialMidiaLogo />

                        <SocialMidiaLogo />

                        <SocialMidiaLogo />
                    </SocialMidiasContainer>
                </BaseboardContainer>
            </Footer>
        </Container>
    )
}

export default Home