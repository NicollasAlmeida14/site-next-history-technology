import {
    ButtonsContainer,
    Header,
    Li,
    Link,
    LoginButton,
    LogoContainer,
    Nav,
    RegisterButton,
    Ul
} from "./styles"

import Logo from '../../assets/logo-nh3.png'

import { useNavigate } from "react-router-dom"


function DefaultHeader() {
    const navigate = useNavigate()

    return (
        <Header>
            <LogoContainer>
                <img src={Logo} alt="Logo da Next History Technology" />

                <span>Next History Technology</span>
            </LogoContainer>

            <Nav>
                <Ul>
                    <Li>
                        <Link onClick={() => navigate('/')} href="#main">Home</Link>
                    </Li>

                    <Li>
                        <Link onClick={() => navigate('/')} href="#about">Sobre</Link>
                    </Li>

                    <Li>
                        <Link onClick={() => navigate('/simulador-financeiro-nh3')}>
                            Simulador Financeiro
                        </Link>
                    </Li>

                    <Li>
                        <Link onClick={() => navigate('/')} href="#more-infos">Contrate-nos</Link>
                    </Li>
                </Ul>
            </Nav>

            <ButtonsContainer>
                <LoginButton type="button" onClick={() => navigate('/login-nh3')}>
                    Login
                </LoginButton>

                <RegisterButton type="button" onClick={() => navigate('/cadastro-nh3')}>
                    Cadastrar
                </RegisterButton>
            </ButtonsContainer>
        </Header>
    )
}

export default DefaultHeader