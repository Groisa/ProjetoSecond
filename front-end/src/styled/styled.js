import BgMobileHome from '../img/bgMobileHome.png'
import styled from 'styled-components'
import bgMobileHomeDesk from '../img/bgMobileHomeDesk.png'
import bgDesktop from '../img/bgDesktop.png'
import { Container, Navbar } from 'react-bootstrap'


export const DivIconStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
    cursor: pointer;
    p {
        padding: 0;
        margin: 0;
        flex-grow: 1;
    }
    div{
        font-size: 1.5rem;
        padding: 0;
        margin: 0;
    }
`
export const ContainerHome = styled.div`
    background-image: url(${BgMobileHome});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    @media(min-width: 572px) {
        background-image: url(${bgMobileHomeDesk});
    }
    @media(min-width: 972px) {
        background-image: url(${bgDesktop});
        width: 100vw;
        height: 100vh;
    }
`
export const MainsStyledHome = styled.main`
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 327px;
        height: 27px;
    }
    h1 {
        margin-top: 15px;
        font-size: 2rem;
        font-weight: 400;
    }
    span {
        width: 322px;
        height: 1px;
        color: #000;
        background-color:#000 ;
    }
    @media(min-width: 972px) {
        img {
            display: none;
        }
        h1 {
            font-size: 40px;
            margin-top: 10px;
        }
        span {
            width: 735px;
            height: 1px;
            color: #000;
            background-color:#000 ;
        }
    }
`
export const DivStyledName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h2 {
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
    }
    h5 {
        padding: 0;
        margin: 0;
        font-size: .9rem;
    }
`
export const DivSectionHeader = styled.div`
    display: flex;
    gap: 1rem;
`
export const HaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 70px;
        height: 70px;
        border-radius: 60px;
    }
    padding: 5px 10px;
    @media(min-width: 972px) {
        background-color: #fff;
        box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.25);
        justify-content: space-around;
    }
`
export const LogoSecondImgStyled = styled.img`
    display: none;
    @media(min-width: 972px){
        display: block;
        width: 514px !important;
        height: 42px !important;
        border-radius: 0 !important;
    }
`
export const CardComponentStyled = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 7.125rem;
    height: 6.4rem;
    background: rgba(1, 1, 78, 0.1);
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    p {
        padding-bottom: 10px;
    }
    div {
        width: 90.73px;
        height: 90.73px;
        background-color: #3D3434;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.6rem;
        padding-right: 1.4rem;
        img {
            width: 93.06px;
            height: 93.06px;
        }
        @media(min-width: 972px) {
        img {
            display: block;
        }
    }
    }
    
`
export const CardSectionStyled = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    padding-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 327px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media(min-width: 972px) {
        flex-wrap: nowrap;
        width: 692px;
        gap: 40px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
export const CardComponentStyledSecond = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 6.125rem;
    height: 5.4rem;
    background: rgba(1, 1, 78, 0.1);
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    text-align: center;
    p {
        padding-bottom: 20px;
    }
    div {
        width: 80.73px;
        height: 80.73px;
        background-color: #3D3434;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.6rem;
        img {
            width: 75px;
            height: 75px;
        }
        @media(min-width: 972px) {
        img {
            display: block;
           
        }
        
    }
    }
    
`
export const CardContainer = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`
export const DivSeparetorStyled = styled.div`
    width: 200px;
    height: 1px;
    margin-bottom: 20px;
    background-color: #000;
    @media(min-width: 972px) {
        width: 500px;
    }
`
export const NavBrandStyled = styled(Navbar.Brand)`
    img {
        width: 170px;
        height: 15px;
    }
`
export const Header = styled(Container)`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.25);
`
export const MainStyledLayout = styled.main`
    padding-top: 6rem;
`
export const OffCanvasContainer = styled.div`
    border: solid 1px;
    border-color: #000;
    border-radius: 20px;
    margin: 20px;
`
export const CardComponentNav = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    background: rgba(1, 1, 78, 0.1);
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    padding: 8px;
    img {
        width: 38px;
        height: 38px;
        margin-left: 30px;
    }
    p {
        margin: 0;
        padding: 0;
    }
`