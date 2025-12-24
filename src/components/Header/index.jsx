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


function DefaultHeader() {
    return (
        <Header>
            <LogoContainer>
                <img src={Logo} alt="Logo da Next History Technology" />

                <span>Next History Technology</span>
            </LogoContainer>

            <Nav>
                <Ul>
                    <Li>
                        <Link href="#main">Home</Link>
                    </Li>

                    <Li>
                        <Link href="#about">Sobre</Link>
                    </Li>

                    <Li>
                        <Link >Simulador Financeiro</Link>
                    </Li>

                    <Li>
                        <Link href="#more-infos">Contrate-nos</Link>
                    </Li>
                </Ul>
            </Nav>

            <ButtonsContainer>
                <LoginButton type="button">
                    Login
                </LoginButton>

                <RegisterButton type="button">
                    Cadastrar
                </RegisterButton>
            </ButtonsContainer>
        </Header>
    )
}

export default DefaultHeader