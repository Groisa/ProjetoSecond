import { NavBrandStyled, Header, DivIconStyled, DivSectionHeader, MainStyledLayout, OffCanvasContainer } from '../../styled/styled'
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import LogoSecond from '../../img/SecondBlack.png'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../services/logout'
import { FaCog, FaRegShareSquare } from "react-icons/fa";
import { CardComponentNavView } from './CardComponentNav';
import { toast } from 'react-toastify';

export function Layout({ children }) {
    const singOutUser = async () => {
        await logoutUser()
        toast.success('Deslogado com sucesso!')
    }
    return (
        <>
            <Header>
                <Navbar expand={false}>
                    <Container className='p-0 m-0'>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="start"
                        >
                            <OffCanvasContainer>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">
                                        <img src={LogoSecond} width={223} height={18}/>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <CardComponentNavView/>
                                </Offcanvas.Body>
                            </OffCanvasContainer>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                <NavBrandStyled
                    as={Link}
                    to='/'>
                    <img src={LogoSecond} />
                </NavBrandStyled>
                <DivSectionHeader>
                    <DivIconStyled onClick={singOutUser}>
                        <div>
                            <FaRegShareSquare />
                        </div>
                    </DivIconStyled>
                    <DivIconStyled>
                        <div>
                            <FaCog />
                        </div>
                    </DivIconStyled>
                </DivSectionHeader>
            </Header>
            <MainStyledLayout>
                {children}
            </MainStyledLayout>
        </>
    )
}
