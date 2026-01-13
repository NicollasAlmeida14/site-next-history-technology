import {
  BannerContainer,
  BannerSpan,
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

import DefaultButton from "../../components/Button";

import Logo from '../../assets/logo-nh3.png'

import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import { useState } from "react";
import DefaultPasswordIcon from "../../components/ShowPasswordIcon";

function Register() {
  const notNumber = /\D/g
  const notLetter = /[^a-z A-z]/

  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [admissionCode, setAdmissionCode] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false)

  const tooglePassword = () => setShowPassword(prev => !prev)

  const toogleRepeatedPassword = () => setShowRepeatedPassword(prev => !prev)

  const handleChangePhone = (e) => {
    setUserPhone(
      e.target.value.replace(notNumber, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
    )
  }

  const handleChangeId = (e) => {
    setUserId(
      e.target.value.replace(notNumber, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
    )
  }

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

        <img src={Logo} alt="Logo Next History Technology" />

        <InputsContainer>
          <DuoContainer>
            <InputWrapper>
              <Input placeholder="" id="user-email" type="email" />
              <InputLabel htmlFor="user-email">Email</InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input
                onChange={(e) => setUserName(e.target.value.replace(notLetter, ''))}
                placeholder=""
                id="user-name"
                type="text"
                value={userName}
              />
              <InputLabel htmlFor="user-name">Nome</InputLabel>
            </InputWrapper>
          </DuoContainer>

          <DuoContainer>
            <InputWrapper>
              <Input
                onChange={handleChangePhone}
                placeholder=""
                id="user-phone"
                type="text"
                value={userPhone}
                maxLength={15}
              />
              <InputLabel htmlFor="user-phone">Telefone</InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input
                onChange={handleChangeId}
                placeholder=""
                id="user-id"
                type="text"
                value={userId}
                maxLength={14}
              />
              <InputLabel htmlFor="user-id">CPF</InputLabel>
            </InputWrapper>
          </DuoContainer>

          <DuoContainer>
            <InputWrapper>
              <Input placeholder="" id="user-password" type={showPassword ? 'text' : 'password'} />

              <DefaultPasswordIcon onClick={tooglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </DefaultPasswordIcon>

              <InputLabel htmlFor="user-password">Senha</InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input placeholder="" id="repeat-password" type={showRepeatedPassword ? 'text' : 'password'} />
              
              <DefaultPasswordIcon onClick={toogleRepeatedPassword}>
                {showRepeatedPassword ? <FaEyeSlash /> : <FaEye />}
              </DefaultPasswordIcon>

              <InputLabel htmlFor="repeat-password">Confirmar senha</InputLabel>
            </InputWrapper>
          </DuoContainer>

          <InputWrapper>
            <Input placeholder="" id="admission-code" />
            <InputLabel htmlFor="admission-code">Código de ativação</InputLabel>
          </InputWrapper>
        </InputsContainer>

        <DefaultButton>Cadastrar</DefaultButton>

        <RegisterSpan>
          Já é cadastrado?
          <a href="/tela-de-login-nh3">Acesse sua conta</a>
        </RegisterSpan>
      </InfosContainer>
    </Container >
  )
}

export default Register