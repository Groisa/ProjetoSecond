import BgMobileHome from '../img/bgMobileHome.png'
import styled from 'styled-components'
import bgMobileHomeDesk from '../img/bgMobileHomeDesk.png'
import bgDesktop from '../img/bgDesktop.png'
import { Container, Form, Modal, Navbar } from 'react-bootstrap'
import { FaMapPin } from 'react-icons/fa'


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
    width: 330px;
    justify-content: center;
    align-items: center;
    gap: 17px;
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
    text-decoration: none;
    color: #000;
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
export const DivSeparetorStyledPrimary = styled.div`
    width: 322px;
    height: 1px;
    margin-bottom: 20px;
    background-color: #000;
    @media(min-width: 572px) {
        width: 522px;
    }
    @media(min-width: 972px) {
        width: 522px;
    }
`
export const NavBrandStyled = styled(Navbar.Brand)`
    img {
        width: 170px;
        height: 15px;
    }
    @media(min-width: 572px) {
        img {
            width: 370px;
            height: 30px; 
        }
    }
`
export const Header = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: 0 15px;
   @media(min-width: 572px){ 
     padding: 15px 30px;
   }
   font-size: 25px;
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
    text-decoration: none;
    color: #000;
    cursor: pointer;
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
export const LayoutStyled = styled.div`
    background-image: url(${BgMobileHome});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    @media(min-width: 572px) {
        background-image: url(${bgMobileHomeDesk});
    }
    @media(min-width: 972px) {
        background-image: url(${bgDesktop});
        width: 100%;
        height: 100%;
    }
`
export const TitleStyled = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    margin-top: 2.5rem;
    text-align: center;
    align-items: center;
    margin-bottom: 10px;
        img {
            width: 66px;
            height: 66px;
        }
        h1 {
            font-size: 25px;
            font-weight: 400;
            padding: 0;
            margin: 0;
        }
        @media(min-width: 572px) {
            h1 {
            font-size: 35px;
            font-weight: 400;
            padding: 0;
            margin: 0;
        }
        img {
            width: 76px;
            height: 76px;
        }
        }
`
export const ContainerStyled = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    padding-bottom: 30px;
   @media(min-width: 572px) {
    padding-bottom: 50px;
   }
`
export const DataHoursTotal = styled.div`
    width: 161px;
    height: 77px;
    padding-top: 2px;
    background: rgba(1, 1, 78, 0.1);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    div {
        width: 120px;
        height: 1px;
        background-color: #000;
    }
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 18px;
    }
    
`
export const DataHours = styled.div`
    width: 171px;
    height: 77px;
    padding-top: 2px;
    background: rgba(1, 1, 78, 0.1);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 5px;
    div {
        width: 120px;
        height: 1px;
        background-color: #000;
    }
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 18px;
    }
`
export const ImgGrafic = styled.img`
    width: 326px;
    height: 198px;
`
export const ButtonNewOur = styled.button`
    width: 286.1px;
    height: 43.62px;
    background: rgba(1, 1, 78, 0.1);
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    margin-bottom: 15px ;
    border: none;
    font-size: 20px;
    :hover {
        background: rgba(10, 20, 50, 0.1);
    }
`
export const SectionInputPesqDate = styled.section`
    input {
        width: 105px;
        height: 24px;
        border: solid 1px;
        border-color: #000;
        border-radius: 20px;
        font-size: 15px !important;
        display: flex;
        text-align: center;
    }
    display: flex;
    align-items: center;
    font-size: 25px;
    gap: 10px;
    justify-content: center;
    p {
        font-size: 25px;
        padding: 0;
        margin: 0;
    }
`
export const TableStyled = styled.table`
    background: rgba(1, 1, 78, 0.3);
    border-radius: 5px;
    border: 1px solid black;
    width: 319px;
    thead {
        justify-content: center;
        text-align: center;
        tr {
            th {
                color: #fff;
                text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.4);
                font-size: 20px;
            }
        }
    }
    tbody {
        justify-content: center;
        text-align: center;       
        tr {   
            td {
                color: #fff;
                text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.4);
                font-size: 18px;
            }
        }
    }
`
export const ButtonsControledTable = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
        background: rgba(1, 1, 78, 0.1);
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        border: none;
        width: 84px;
        height: 26px;
    }
    p{
        padding: 0;
        margin: 0;
    }

`
export const StyledPin = styled(FaMapPin)`
    cursor: pointer;
    :hover {
        color: #000;
    }
`
export const ModalTitle = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 25px;
        img {
            width: 66px;
            height: 66px;
        }
        h1 {
            font-size: 25px;
            font-weight: 400;
            padding: 0;
            margin: 0;
        }
        @media(min-width: 572px) {
            h1 {
            font-size: 35px;
            font-weight: 400;
            padding: 0;
            margin: 0;
        }
        font-size: 25px;
        img {
            width: 76px;
            height: 76px;
        }
        }
`
export const ModalStyled = styled(Modal)`
    color: #fff;
`
export const ModalHeader = styled(Modal.Header)`
    background-color: #3D3434;
`
export const ModalBody = styled(Modal.Body)`
    background-color: #3D3434;
    button {
        margin-top: 10px;
        width: 147px;
        height: 42px;
        background-color: #fff;
        color: #000;
        border-radius: 20px;
    }
`
export const ModalFormControl = styled(Form.Control)`
    width: 100%;
    background-color: transparent;
    border-radius: 20px;
    border-color: #fff;
    color: #fff;
    display: flex;
    ::placeholder {
        color: #fff;
    }
`
export const ModalFormControlSelect = styled(Form.Select)`
    width: 100%;
    background-color: transparent;
    border-radius: 20px;
    border-color: #fff;
    color: #fff;
    display: flex;
    option {
        background-color: #3D3434;
        width: 80%;
    }
`