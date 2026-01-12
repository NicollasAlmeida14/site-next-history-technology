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
  PhraseContainer,
  Span,
  Subtitle,
  Title
} from './styles';

import DefaultButton from '../../components/Button';

import Logo from '../../assets/logo-nh3.png'

import { FaArrowLeft } from "react-icons/fa";

function Login() {
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

        <InfoSpan>Entrar</InfoSpan>

        <InputsContainer>
          <InputWrapper>
            <Input placeholder='' id='email' />
            <InputLabel htmlFor='email'>Email</InputLabel>
          </InputWrapper>

          <InputWrapper>
            <Input placeholder='' id='password' />
            <InputLabel htmlFor='password'>Senha</InputLabel>

            <ForgetPasswordSpan>
              Esqueceu a senha?
              <a href="">
                Clique aqui!
              </a>
            </ForgetPasswordSpan>
          </InputWrapper>
        </InputsContainer>

        <DefaultButton>Acessar conta</DefaultButton>

        <Span>
          Ainda não tem conta?
          <a href="/tela-de-cadastro-nh3">Criar conta</a>
        </Span>
      </InfosContainer>
    </Container>
  )
}

export default Login