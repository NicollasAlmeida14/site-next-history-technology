import DetectionImage from '../../assets/deteccao.png'
import FastResponseImage from '../../assets/resposta.png'
import MonitoringImage from '../../assets/monitoramento.png'
import Logo from '../../assets/logo-nh3.png'
import RefrigerationSystem from '../../assets/sistema-refrigeracao.png'
import Mission from '../../assets/missao.png'
import Vision from '../../assets/visao.png'
import Values from '../../assets/valor.png'
import LogoFooter from '../../assets/logo-footer.png'
import MeterBow from '../../assets/arco.png'

import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaCheck,
    FaCheckCircle
} from "react-icons/fa";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


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
    ImageBackground,
    SpanContainer,
    RefrigerationImage,
    MoreInfosSection,
    PlansWrapper,
    MoreInfosTitle,
    PlansContainer,
    PlanSubtitle,
    PlansCardContainer,
    SemiAnnualCard,
    SemiAnnualPlanSpan,
    SemiAnnualPlanPrice,
    PlanUl,
    SemiAnnualPlanLi,
    AnnualCard,
    PlansButton,
    PlanDescription,
    MetricsWrapper,
    MetricsContainer,
    PlansSpansContainer,
    AnnualPlanSpan,
    AnnualPlanPrice,
    AnnualPlanLi,
    DiscountSpan,
    MeterContainer,
    Meter,
    ActualLevelSpan,
    Ppm,
    MetricDescriptionContainer,
    MetricSpan,
    MetricDescription,
    SimulatorContainer,
    MetricButton,
    ImageContainer,
    MinLimitSpan,
    MaxLimitSpan
} from "./styles"

import DefaultHeader from "../../components/Header"

function Home() {
    const anotherTab = (url) => {
        window.open(url, '_blank')
    }

    const { ref: refDetection, inView: inViewDetection } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refFastResponse, inView: inViewFastResponse } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refMonitoring, inView: inViewMonitoring } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refAboutUs, inView: inViewAboutUs } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refWhatIsItForImg, inView: inViewWhatIsItForImg } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refWhatIsItFor, inView: inViewWhatIsItFor } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refPlans, inView: inViewPlans } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refMetrics, inView: inViewMetrics } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refMission, inView: inViewMission } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refVision, inView: inViewVision } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refValues, inView: inViewValues } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <Container
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 1 }}
        >
            <DefaultHeader />

            <Main id='main'>
                <span>
                    Monitoramento de
                    <br />
                    vazamentos de gás amônia no
                    <br />
                    sistema de refrigeração de
                    <br />
                    frigoríficos
                </span>

                <a href="#purposes">
                    <button>Nossos propósitos</button>
                </a>
            </Main>

            <SoluctionsSection id='soluctions'>
                <h1>Nossas Soluções</h1>

                <SoluctionsCardsWrapper>
                    <SoluctionsCard
                        as={motion.div}
                        ref={refDetection}
                        initial={{ x: -100, opacity: 0 }}
                        animate={inViewDetection ? { x: 0, opacity: 1 } : {}}
                        transition={{ ease: 'easeIn', duration: 1 }}
                    >
                        <SoluctionImage src={DetectionImage} alt="Imagem de um escudo" />

                        <SoluctionCardTitle>Detecção Precisa</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Sensores Arduino de alta precisão
                            detectam vazamentos de amônia
                            instantaneamente.
                        </SoluctionCardDescription>
                    </SoluctionsCard>

                    <SoluctionsCard
                        as={motion.div}
                        ref={refFastResponse}
                        initial={{ y: -100, opacity: 0 }}
                        animate={inViewFastResponse ? { y: 0, opacity: 1 } : {}}
                        transition={{ ease: 'easeIn', duration: 1 }}
                    >
                        <SoluctionImage src={FastResponseImage} alt="Imagem de um raio" />

                        <SoluctionCardTitle>Resposta Rápida</SoluctionCardTitle>

                        <SoluctionCardDescription>
                            Dashboard web completo com
                            histórico e análises detalhadas dos
                            dados
                        </SoluctionCardDescription>
                    </SoluctionsCard>

                    <SoluctionsCard
                        as={motion.div}
                        ref={refMonitoring}
                        initial={{ x: 100, opacity: 0 }}
                        animate={inViewMonitoring ? { x: 0, opacity: 1 } : {}}
                        transition={{ ease: 'easeIn', duration: 1 }}
                    >
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

            <AboutUsSection id='about'>
                <img src={Logo} alt="Logo da Next History Technology" />

                <AboutUsDescriptionCard
                    as={motion.div}
                    ref={refAboutUs}
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={inViewAboutUs ? { scale: 1, opacity: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 1 }}
                >
                    <Subtitle>Quem Somos?</Subtitle>

                    <p>
                        A Next History Technology foi fundada em agosto de 2025, nossa empresa desenvolve soluções tecnológicas inovadoras em IoT, com foco na segurança industrial. Atuamos em frigoríficos de carne de grande porte, oferecendo sistemas de detecção de amônia que combinam sensores de gás ligados a arduinos de alta precisão com plataformas web intuitivas, garantindo monitoramento eficiente.
                    </p>
                </AboutUsDescriptionCard>
            </AboutUsSection>

            <WhatIsItForSection>
                <RefrigerationImage
                    src={RefrigerationSystem}
                    alt="Imagem de um sistema de refrigeração de um frigorífico"
                    as={motion.img}
                    ref={refWhatIsItForImg}
                    initial={{ x: -100, opacity: 0 }}
                    animate={inViewWhatIsItForImg ? { x: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 1 }}
                />

                <WhatIsItForCardDescription
                    as={motion.div}
                    ref={refWhatIsItFor}
                    initial={{ x: 100, opacity: 0 }}
                    animate={inViewWhatIsItFor ? { x: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 1 }}
                >

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

            <PurposesSection id='purposes'>
                <PurposesCard
                    as={motion.div}
                    ref={refMission}
                    initial={{ y: 100, opacity: 0 }}
                    animate={inViewMission ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 1 }}
                >
                    <ImageBackground>
                        <PurposeImage src={Mission} alt="Ícone de um tiro ao alvo" />
                    </ImageBackground>

                    <Purpose>Missão</Purpose>

                    <PurposeDescription>
                        Nosso compromisso é garantir segurança através de soluções tecnológicas que monitoram riscos e protegem o que realmente importa: vidas e bens.
                    </PurposeDescription>
                </PurposesCard>

                <PurposesCard id='vision-card'
                    as={motion.div}
                    ref={refVision}
                    initial={{ y: 100, opacity: 0 }}
                    animate={inViewVision ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 1.7 }}
                >
                    <ImageBackground>
                        <PurposeImage src={Vision} alt="Íconde de um olho" />
                    </ImageBackground>

                    <Purpose>Visão</Purpose>

                    <PurposeDescription>
                        Buscamos constantemente novas ideias, tecnologias e métodos para evoluir, oferecendo sempre o que há de mais moderno e eficiente no mercado.
                    </PurposeDescription>
                </PurposesCard>

                <PurposesCard
                    as={motion.div}
                    ref={refValues}
                    initial={{ y: 100, opacity: 0 }}
                    animate={inViewValues ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 2.4 }}
                >
                    <ImageBackground>
                        <PurposeImage src={Values} alt="Ícone de um diamante" />
                    </ImageBackground>

                    <Purpose>Valores</Purpose>

                    <PurposeDescription>
                        Valorizamos a honestidade, a dedicação e a atenção aos detalhes, construindo parcerias sólidas e entregando resultados com qualidade, comprometimento e profissionalismo.
                    </PurposeDescription>
                </PurposesCard>
            </PurposesSection>

            <MoreInfosSection id='more-infos'>
                <PlansWrapper
                    as={motion.div}
                    ref={refPlans}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inViewPlans ? { opacity: 1, y: 0 } : {}}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                >
                    <MoreInfosTitle>Conheça nossos planos</MoreInfosTitle>

                    <PlansContainer>
                        <PlanSubtitle>A partir de <span>R$ 75.000</span></PlanSubtitle>

                        <PlansCardContainer>
                            <SemiAnnualCard>
                                <PlansSpansContainer>
                                    <SemiAnnualPlanSpan>Plano Semestral</SemiAnnualPlanSpan>

                                    <SemiAnnualPlanPrice>
                                        R$ 1.250
                                        <span> /mês</span>
                                    </SemiAnnualPlanPrice>
                                </PlansSpansContainer>

                                <PlanUl>
                                    <SemiAnnualPlanLi>
                                        <FaCheck />
                                        Suporte 24/7
                                    </SemiAnnualPlanLi>

                                    <SemiAnnualPlanLi>
                                        <FaCheck />
                                        Instalação imediata
                                    </SemiAnnualPlanLi>

                                    <SemiAnnualPlanLi>
                                        <FaCheck />
                                        Atualizações mensais
                                    </SemiAnnualPlanLi>
                                </PlanUl>
                            </SemiAnnualCard>

                            <AnnualCard>
                                <PlansSpansContainer>
                                    <AnnualPlanSpan>Plano Anual</AnnualPlanSpan>

                                    <AnnualPlanPrice>
                                        R$ 1.062
                                        <span> /mês</span>
                                    </AnnualPlanPrice>

                                    <DiscountSpan>Economize 10%</DiscountSpan>
                                </PlansSpansContainer>

                                <PlanUl>
                                    <AnnualPlanLi>
                                        <FaCheck />
                                        Suporte 24/7
                                    </AnnualPlanLi>

                                    <AnnualPlanLi>
                                        <FaCheck />
                                        Instalação imediata
                                    </AnnualPlanLi>

                                    <AnnualPlanLi>
                                        <FaCheck />
                                        Tecnologia avançada
                                    </AnnualPlanLi>
                                </PlanUl>
                            </AnnualCard>
                        </PlansCardContainer>
                    </PlansContainer>

                    <PlansButton>Ver planos detalhados</PlansButton>

                    <PlanDescription>
                        Mais segurança, economia e tranquilidade para o seu frigorífico
                    </PlanDescription>
                </PlansWrapper>

                <MetricsWrapper
                    as={motion.div}
                    ref={refMetrics}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inViewMetrics ? { opacity: 1, y: 0 } : {}}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                >
                    <MoreInfosTitle>Métricas e Monitoramento</MoreInfosTitle>

                    <MetricsContainer>
                        <MeterContainer>
                            <ImageContainer>
                                <img src={MeterBow} alt="Arco de medição" />

                                <MinLimitSpan>0</MinLimitSpan>
                                <MaxLimitSpan>30+</MaxLimitSpan>
                            </ImageContainer>

                            <Meter>
                                <ActualLevelSpan>Nível atual:</ActualLevelSpan>

                                <Ppm>
                                    <span>14</span>
                                    ppm
                                </Ppm>
                            </Meter>
                        </MeterContainer>


                        <MetricDescriptionContainer>
                            <MetricSpan>Conformidade com NR-15</MetricSpan>

                            <MetricDescription>
                                <span> <FaCheckCircle /> </span>

                                Monitoramos os níveis de gás amônia 24/7. Acima de 20ppm (48h semanais), o ambiente está fora do padrão de segurança.
                            </MetricDescription>
                        </MetricDescriptionContainer>

                        <SimulatorContainer>
                            <MetricSpan>Simule diferentes cenários</MetricSpan>

                            <input type="range" min={0} max={50} />
                        </SimulatorContainer>

                        <MetricButton>Entenda nosso sistema</MetricButton>
                    </MetricsContainer>
                </MetricsWrapper>
            </MoreInfosSection>

            <Footer>
                <LogoContainer>
                    <span>Next History Technology</span>

                    <img src={LogoFooter} alt="Logo da Next History Technology na cor cinza" />
                </LogoContainer>

                <MainContentContainer>
                    <LinksContainer>
                        <ShortcutContainer>
                            <SpanTitleFooter>Atalhos</SpanTitleFooter>

                            <Ul>
                                <Li>
                                    <Link href='#main'>Home</Link>
                                </Li>

                                <Li>
                                    <Link href='#soluctions'>Soluções</Link>
                                </Li>

                                <Li>
                                    <Link href=''>Benefícios</Link>
                                </Li>

                                <Li>
                                    <Link href='#about'>História</Link>
                                </Li>

                                <Li>
                                    <Link href=''>Colaboradores</Link>
                                </Li>
                            </Ul>
                        </ShortcutContainer>

                        <QuestionsContainer>
                            <SpanTitleFooter>Dúvidas</SpanTitleFooter>

                            <Ul>
                                <Li>
                                    <Link href=''>Dúvidas Frequentes</Link>
                                </Li>

                                <Li>
                                    <Link href=''>Suporte ao cliente</Link>
                                </Li>
                            </Ul>
                        </QuestionsContainer>

                        <ServiceContainer>
                            <SpanTitleFooter>Atendimento</SpanTitleFooter>


                            <Ul>
                                <Li>(11) 95798-6462</Li>

                                <Li>Segunda a Sexta</Li>
                            </Ul>
                        </ServiceContainer>
                    </LinksContainer>

                    <EmailContainer>
                        <SpanContainer>
                            <SpanTitleFooter>Entre em contato pelo nosso E-mail</SpanTitleFooter>

                            <Span>Tire suas dúvidas ou entre em contato para fechar negócio.</Span>
                        </SpanContainer>

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
                        <SocialMidiaLogo>
                            <FaInstagram />
                        </SocialMidiaLogo>

                        <SocialMidiaLogo>
                            <FaLinkedin />
                        </SocialMidiaLogo>

                        <SocialMidiaLogo
                            onClick={() => anotherTab('https://github.com/NicollasAlmeida14')}
                        >
                            <FaGithub />
                        </SocialMidiaLogo>
                    </SocialMidiasContainer>
                </BaseboardContainer>
            </Footer>
        </Container >
    )
}

export default Home