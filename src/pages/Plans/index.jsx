import {
    Button,
    Container,
    Form,
    Input,
    Li,
    Link,
    PlanDescription,
    PlanPrice,
    PlansCard,
    PlansContainer,
    PlanSubtitle,
    PlanTitle,
    Textarea,
    TextWrapper,
    Title,
    Ul
} from "./styles";

import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

function Plans() {

    return (
        <Container>
            <Link href="/">
                <FaArrowLeft />
                Voltar
            </Link>

            <Title>Planos Disponíveis</Title>

            <PlansContainer>
                <PlansCard>
                    <TextWrapper>
                        <PlanTitle>Plano Semestral</PlanTitle>

                        <PlanSubtitle>Ideal para quem quer começar agora!</PlanSubtitle>
                    </TextWrapper>

                    <PlanPrice>R$ 75.000,00</PlanPrice>

                    <PlanDescription>
                        Acesso completo ao monitoramento em tempo real de amônia, ideal para pequenas operações e testes iniciais.
                    </PlanDescription>

                    <Ul>
                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Monitoramento 24h
                        </Li>

                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Relatórios semanais
                        </Li>

                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Suporte técnico remoto
                        </Li>

                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Alertas automáticos de segurança
                        </Li>
                    </Ul>
                </PlansCard>

                <PlansCard>
                    <TextWrapper>
                        <PlanTitle>Plano Anual</PlanTitle>

                        <PlanSubtitle>Para quem busca estabilidade e economia!</PlanSubtitle>
                    </TextWrapper>

                    <PlanPrice>R$ 135.000,00</PlanPrice>

                    <PlanDescription>
                        Monitoramento contínuo, suporte técnico e relatórios detalhados. A escolha ideal para quem busca eficiência e custo-benefício.
                    </PlanDescription>

                    <Ul>
                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Desconto exclusivo de 10%
                        </Li>

                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Relatórios mensais e comparativos
                        </Li>

                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Atualizações automáticas do sistema
                        </Li>

                        <Li>
                            <FaCheckCircle style={{ color: '#63E352' }} />
                            Suporte técnico prioritário
                        </Li>
                    </Ul>
                </PlansCard>

                <Form>
                    <PlanTitle>Entre em contato</PlanTitle>

                    <Input
                        placeholder="Nome da empresa"
                        type="text"
                    />

                    <Input
                        placeholder="E-mail"
                        type="email"
                    />

                    <Input
                        placeholder="Assunto"
                        type="text"
                    />

                    <Textarea
                        placeholder="Escreva sua mensagem..."
                        rows={3}
                    />

                    <Button type="button">Enviar</Button>
                </Form>
            </PlansContainer>
        </Container>
    )
}

export default Plans