import styled from 'styled-components'
import BGMobile from '../img/bgMobile.png'
import LogoSecond from '../img/LogoSecond.png'
export function LoginView() {
    return (
        <MainStyled>
            <StyledSectionLogin>
                <img src={LogoSecond} alt='Logo SecondMind' width={280}/>
            </StyledSectionLogin>
        </MainStyled>
    )
}

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
    border-radius: 20px ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3D3434;
    width: 19.5rem;
`