import {
  BannerContainer,
  BannerSpan,
  Button,
  Container,
  DuoContainer,
  InfosContainer,
  Input,
  InputsContainer,
  InputLabel,
  InputWrapper,
  Link,
  RegisterSpan,
  Title
} from "./styles";

import Logo from '../../assets/logo-nh3.png'

import { FaArrowLeft } from "react-icons/fa";

import { useState } from "react";

function Register() {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [admissionCode, setAdmissionCode] = useState('')

  return (
    <Container>
      <BannerContainer>
        <Link href="/">
          <FaArrowLeft />
          Voltar
        </Link>

        <BannerSpan>Bem-vindo à <br /> tela de cadastro</BannerSpan>
      </BannerContainer>

      <InfosContainer>
        <Title>Cadastre-se</Title>

        <img src={Logo} alt="" />

        <InputsContainer>
          <DuoContainer>
            <InputWrapper>
              <Input placeholder="" id="user-email" />
              <InputLabel htmlFor="user-email">Email</InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input placeholder="" id="user-name" />
              <InputLabel htmlFor="user-name">Nome</InputLabel>
            </InputWrapper>
          </DuoContainer>

          <DuoContainer>
            <InputWrapper>
              <Input placeholder="" id="user-phone" />
              <InputLabel htmlFor="user-phone">Telefone</InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input placeholder="" id="user-id" />
              <InputLabel htmlFor="user-id">CPF</InputLabel>
            </InputWrapper>
          </DuoContainer>

          <DuoContainer>
            <InputWrapper>
              <Input placeholder="" id="user-password" />
              <InputLabel htmlFor="user-password">Senha</InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input placeholder="" id="repeat-password" />
              <InputLabel htmlFor="repeat-password">Confirmar senha</InputLabel>
            </InputWrapper>
          </DuoContainer>

          <InputWrapper>
            <Input placeholder="" id="admission-code" />
            <InputLabel htmlFor="admission-code">Código de ativação</InputLabel>
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