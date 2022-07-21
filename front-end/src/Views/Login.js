import styled from 'styled-components'
import BGMobile from '../img/bgMobile.png'
import LogoSecond from '../img/LogoSecond.png'
import { useFormik } from "formik";
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { LoginAuth } from '../services/login';
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
export function LoginView() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                const userLoging = await LoginAuth(values)
                toast.success('Logado com sucesso!')
                navigate('/')
            } catch (error) {
                const errorMsg = error instanceof FirebaseError && (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED)
                    ? 'Login ou senha inválidos.'
                    : 'Falha ao fazer login. Tente novamente.'
                toast.error(errorMsg)
            }
        }
    })
    return (
        <MainStyled>
            <StyledSectionLogin>
                <img src={LogoSecond} alt='Logo SecondMind' width={280} />
                <h1>Seja Bem Vindo!</h1>
                <FormStyled onSubmit={formik.handleSubmit}>
                    <FormGroupInput>
                        <label>Email</label>
                        <input
                            placeholder='✉ Insira seu email'
                            type='email'
                            {...formik.getFieldProps('email')}
                        />
                    </FormGroupInput>
                    <FormGroupInput className='pb-3'>
                        <label>Senha</label>
                        <input
                            placeholder='🔒 Insira sua senha'
                            type='password'
                            {...formik.getFieldProps('password')}
                        />
                    </FormGroupInput>
                    <button type='submit'>Entrar</button>
                    <span>Esqueceu a senha?</span>
                </FormStyled>
            </StyledSectionLogin>
        </MainStyled>
    )
}
const FormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: .2rem;
    flex-direction: column;
    button {
        font-weight: 600;
        background-color: #01014E;
        color: #fff;
        border: none;
        width: 50%;
        padding: 5px;
        border-radius: 15px;
    }
    span {
        font-size: .8rem;
        padding: 10px;
    }
`
const FormGroupInput = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    padding-top: 1.2rem;
    input {
        text-align: center;
        width: 100%;
        background-color: transparent;
        border-color: #fff;
        border-radius: .95rem;
        padding: .2rem;
        color: #fff;
        ::placeholder {
            color: #fff;
            padding-left: 20px;
            text-align: start;
        }
    }
    label {
        margin-left: .8rem;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
    }
`
const MainStyled = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url(${BGMobile});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const StyledSectionLogin = styled.section`
    border-radius: 1.4rem ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3D3434;
    width: 19.5rem;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    h1 {
        font-weight: 700;
        padding-top: 1rem;
    } 
`