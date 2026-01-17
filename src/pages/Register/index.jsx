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
import DefaultPasswordIcon from "../../components/ShowPasswordIcon";

import Logo from '../../assets/logo-nh3.png'

import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const notNumber = /\D/g
  const notLetter = /[^a-z A-z]/

  const navigate = useNavigate()

  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [admissionCode, setAdmissionCode] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false)

  const [validateEmail, setValidateEmail] = useState(undefined)
  const [validateName, setValidateName] = useState(undefined)
  const [validatePhone, setValidatePhone] = useState(undefined)
  const [validateId, setValidateId] = useState(undefined)
  const [validatePassword, setValidatePassword] = useState(undefined)
  const [validateRepeatedPassword, setValidateRepeatedPassword] = useState(undefined)
  const [validateAdmissionCode, setValidateAdmissionCode] = useState(undefined)

  const allSet = validateName && validateEmail && validatePhone && validateId && validatePassword && validateRepeatedPassword && validateAdmissionCode

  const tooglePassword = () => setShowPassword(prev => !prev)

  const toogleRepeatedPassword = () => setShowRepeatedPassword(prev => !prev)

  const handleChangeName = (e) => {
    const formattedName = e.target.value.replace(notLetter, '')

    setUserName(formattedName)

    if (formattedName.length > 1) {
      setValidateName(true)
    } else {
      setValidateName(false)
    }

    console.log(formattedName.length)
  }

  const handleChangeEmail = (e) => {
    const userEmailValue = e.target.value

    setUserEmail(userEmailValue)

    if (userEmailValue.includes('@') &&
      (userEmailValue.endsWith('.com.br') ||
        userEmailValue.endsWith('.com'))) {
      setValidateEmail(true)
    } else {
      setValidateEmail(false)
    }
  }

  const handleChangePhone = (e) => {
    const formattedPhone = e.target.value.replace(notNumber, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')

    setUserPhone(formattedPhone)

    if (formattedPhone.length === 15) {
      setValidatePhone(true)
    } else {
      setValidatePhone(false)
    }
  }

  const handleChangeId = (e) => {
    const formattedId = e.target.value.replace(notNumber, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')

    setUserId(formattedId)

    if (formattedId.length === 14) {
      setValidateId(true)
    } else {
      setValidateId(false)
    }
  }

  const handleChangePassword = (e) => {
    const passwordValue = e.target.value

    setUserPassword(passwordValue)

    if (passwordValue.length >= 8) {
      setValidatePassword(true)
    } else {
      setValidatePassword(false)
    }
  }

  const handleChangeRepeatedPassword = (e) => {
    const repeatedPasswordValue = e.target.value

    setRepeatPassword(repeatedPasswordValue)

    if (repeatedPasswordValue === userPassword) {
      setValidateRepeatedPassword(true)
    } else {
      setValidateRepeatedPassword(false)
    }
  }

  const handleChangeAdmissionCode = (e) => {
    const admissionCodeValue = e.target.value

    setAdmissionCode(admissionCodeValue)

    if (admissionCodeValue.length === 5) {
      setValidateAdmissionCode(true)
    } else {
      setValidateAdmissionCode(false)
    }
  }

  const register = () => {
    toast.success('Usuário cadastrado com sucesso! Redirecionando para a tela de login...')

    setTimeout(() => {
      navigate('/tela-de-login-nh3')
    }, 2500);
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
              <Input
                onChange={handleChangeName}
                placeholder=""
                id="user-name"
                type="text"
                value={userName}
                theme={validateName === false ? 'invalid' : ''}
              />
              <InputLabel htmlFor="user-name">
                Nome
                <span theme={validateName === false ? 'invalid' : ''}>
                  (Informe um nome válido!)
                </span>
              </InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input
                onChange={handleChangeEmail}
                placeholder=""
                id="user-email"
                type="email"
                value={userEmail}
                theme={validateEmail === false ? 'invalid' : ''}
              />
              <InputLabel htmlFor="user-email">
                Email
                <span theme={validateEmail === false ? 'invalid' : ''}>
                  (Formato de e-mail inválido!)
                </span>
              </InputLabel>
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
                theme={validatePhone === false ? 'invalid' : ''}
              />
              <InputLabel htmlFor="user-phone">
                Telefone

                <span theme={validatePhone === false ? 'invalid' : ''}>
                  (Formato de telefone inválido!)
                </span>
              </InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input
                onChange={handleChangeId}
                placeholder=""
                id="user-id"
                type="text"
                value={userId}
                maxLength={14}
                theme={validateId === false ? 'invalid' : ''}
              />
              <InputLabel htmlFor="user-id">
                CPF
                <span theme={validateId === false ? 'invalid' : ''}>
                  (Formato de CPF inválido!)
                </span>
              </InputLabel>
            </InputWrapper>
          </DuoContainer>

          <DuoContainer>
            <InputWrapper>
              <Input
                onChange={handleChangePassword}
                placeholder=""
                id="user-password"
                type={showPassword ? 'text' : 'password'}
                value={userPassword}
                theme={validatePassword === false ? 'invalid' : ''}
              />
              <DefaultPasswordIcon onClick={tooglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </DefaultPasswordIcon>

              <InputLabel htmlFor="user-password">
                Senha
                <span theme={validatePassword === false ? 'invalid' : ''}>
                  (Deve ter 8 ou mais caracteres!)
                </span>
              </InputLabel>
            </InputWrapper>

            <InputWrapper>
              <Input
                onChange={handleChangeRepeatedPassword}
                placeholder=""
                id="repeat-password"
                type={showRepeatedPassword ? 'text' : 'password'}
                value={repeatPassword}
                theme={validateRepeatedPassword === false ? 'invalid' : ''}
              />

              <DefaultPasswordIcon onClick={toogleRepeatedPassword}>
                {showRepeatedPassword ? <FaEyeSlash /> : <FaEye />}
              </DefaultPasswordIcon>

              <InputLabel htmlFor="repeat-password">
                Confirmar senha
                <span theme={validateRepeatedPassword === false ? 'invalid' : ''}>
                  (As senhas precisam ser iguais)
                </span>
              </InputLabel>
            </InputWrapper>
          </DuoContainer>

          <InputWrapper>
            <Input
              onChange={handleChangeAdmissionCode}
              placeholder=""
              id="admission-code"
              value={admissionCode}
              theme={validateAdmissionCode === false ? 'invalid' : ''}
            />
            <InputLabel htmlFor="admission-code">
              Código de ativação
              <span theme={validateAdmissionCode === false ? 'invalid' : ''}>
                (Informe um código válido!)
              </span>
            </InputLabel>
          </InputWrapper>
        </InputsContainer>

        <DefaultButton
          theme={!allSet ? 'disabled' : ''}
          disabled={!allSet}
          onClick={register}
        >
          Cadastrar
        </DefaultButton>

        <RegisterSpan>
          Já é cadastrado?
          <a href="/tela-de-login-nh3">Acesse sua conta</a>
        </RegisterSpan>
      </InfosContainer>
    </Container >
  )
}

export default Register