import {
  BannerContainer,
  Container,
  ForgetPasswordSpan,
  InfosContainer,
  InfoSpan,
  Input,
  InputLabel,
  InputsContainer,
  InputWrapper,
  Link,
  PasswordInputContainer,
  PhraseContainer,
  ReloadIcon,
  Span,
  Subtitle,
  Title
} from './styles';

import DefaultButton from '../../components/Button';
import DefaultPasswordIcon from '../../components/ShowPasswordIcon';

import Logo from '../../assets/logo-nh3.png'

import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import { toast } from 'react-toastify';

import { useState } from 'react';

function Login() {
  const [showingPassword, setShowingPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const [validateEmail, setValidateEmail] = useState(undefined)
  const [validatePassowrd, setValidatePassword] = useState(undefined)

  const allSet = validateEmail && validatePassowrd

  const tooglePassword = () => setShowingPassword(prev => !prev)

  const handleChangeEmail = (e) => {
    const userEmailValue = e.target.value

    setUserEmail(userEmailValue)

    if (userEmailValue.length > 1) {
      setValidateEmail(true)
    } else {
      setValidateEmail(false)
    }
  }

  const handleChangePassword = (e) => {
    const userPasswordValue = e.target.value

    setUserPassword(userPasswordValue)

    if (userPasswordValue.length > 1) {
      setValidatePassword(true)

    } else {
      setValidatePassword(false)
    }
  }

  const validateLogin = () => {
    setLoading(true)

    if (userEmail === 'nicollas@gmail.com' && userPassword === '12345678') {
      setTimeout(() => {
        toast.success('Login realizado com sucesso!')
      }, 5000);
    } else {
      setTimeout(() => {
        toast.error('Email ou senha inválidos!')
        setLoading(false)
      }, 5000);
    }
  }

  return (
    <Container>
      <BannerContainer>
        <Link href='/'>
          <FaArrowLeft />
          Voltar
        </Link>

        <PhraseContainer>
          <Title>Bem-vindo de volta!</Title>

          <Subtitle>É sempre bom vê-lo(a) novamente!</Subtitle>
        </PhraseContainer>
      </BannerContainer>

      <InfosContainer>
        <img src={Logo} alt="" />

        <InfoSpan>Acesse sua conta</InfoSpan>

        <InputsContainer>
          <InputWrapper>
            <Input
              onChange={handleChangeEmail}
              placeholder=''
              id='email'
              value={userEmail}
            />
            <InputLabel htmlFor='email'>Email</InputLabel>
          </InputWrapper>

          <PasswordInputContainer>
            <InputWrapper>
              <Input
                onChange={handleChangePassword}
                placeholder=''
                id='password'
                type={showingPassword ? 'text' : 'password'}
                value={userPassword}
              />

              <DefaultPasswordIcon onClick={tooglePassword}>
                {showingPassword ? <FaEyeSlash /> : <FaEye />}
              </DefaultPasswordIcon>

              <InputLabel htmlFor='password'>Senha</InputLabel>
            </InputWrapper>
            <ForgetPasswordSpan>
              Esqueceu a senha?
              <a href="">
                Clique aqui!
              </a>
            </ForgetPasswordSpan>
          </PasswordInputContainer>
        </InputsContainer>

        <DefaultButton
          onClick={validateLogin}
          disabled={!allSet || loading}
          theme={!allSet || loading ? 'disabled' : ''}
        >
          {loading ? <ReloadIcon /> : 'Acessar conta'}
        </DefaultButton>

        <Span>
          Ainda não tem conta?
          <a href="/tela-de-cadastro-nh3">Criar conta</a>
        </Span>
      </InfosContainer>
    </Container>
  )
}

export default Login