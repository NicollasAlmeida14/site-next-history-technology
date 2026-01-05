import {
  BannerContainer,
  BannerSpan,
  Button,
  Container,
  DuoContainer,
  InfosContainer,
  Input,
  InputsContainer,
  InputSpan,
  InputWrapper,
  Link,
  RegisterSpan,
  Title
} from "./styles";

import { FaArrowLeft } from "react-icons/fa";

function Register() {
  return (
    <Container>
      <BannerContainer>
        <Link>
          <FaArrowLeft />
          Voltar
        </Link>

        <BannerSpan>Bem-vindo à tela de cadastro</BannerSpan>
      </BannerContainer>

      <InfosContainer>
        <Title>Cadastre-se</Title>

        <InputsContainer>
          <DuoContainer>
            <InputWrapper>
              <InputSpan>Email:</InputSpan>

              <Input />
            </InputWrapper>

            <InputWrapper>
              <InputSpan>Nome:</InputSpan>

              <Input />
            </InputWrapper>
          </DuoContainer>

          <DuoContainer>
            <InputWrapper>
              <InputSpan>Telefone:</InputSpan>

              <Input />
            </InputWrapper>

            <InputWrapper>
              <InputSpan>CPF:</InputSpan>

              <Input />
            </InputWrapper>
          </DuoContainer>

          <DuoContainer>
            <InputWrapper>
              <InputSpan>Senha:</InputSpan>

              <Input />
            </InputWrapper>

            <InputWrapper>
              <InputSpan>Confirmar senha:</InputSpan>

              <Input />
            </InputWrapper>
          </DuoContainer>

          <InputWrapper>
            <InputSpan>Código de ativação:</InputSpan>

            <Input />
          </InputWrapper>
        </InputsContainer>

        <Button>Cadastrar</Button>

        <RegisterSpan>
          Já é cadastrado?
          <a href="/tela-de-login-nh3">Acesse sua conta</a>
        </RegisterSpan>
      </InfosContainer>
    </Container >
  )
}

export default Register