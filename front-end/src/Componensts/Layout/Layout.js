import { NavBrandStyled, Header, DivIconStyled, DivSectionHeader, MainStyledLayout, OffCanvasContainer, LayoutStyled, ModalStyled, ModalHeader, ModalTitle, ModalBody, ModalFormControl } from '../../styled/styled'
import { Container, Form, Navbar, Offcanvas } from "react-bootstrap";
import LogoSecond from '../../img/SecondBlack.png'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../services/logout'
import { FaCog, FaRegShareSquare } from "react-icons/fa";
import { CardComponentNavView } from './CardComponentNav';
import { toast } from 'react-toastify';
import { useState } from 'react';

export function Layout({ children }) {
    const singOutUser = async () => {
        await logoutUser()
        toast.success('Deslogado com sucesso!')
    }
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    return (
        <LayoutStyled>
             <ModalStyled show={showModal} onHide={handleCloseModal}>
                <ModalHeader closeButton>
                    <ModalTitle>
                        <FaCog />
                        <h1>Alterar Dados</h1>
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-1" controlId="FormName">
                            <Form.Label>Nome</Form.Label>
                            <ModalFormControl
                                required
                                value={'Fulano A'}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="FormEmail">
                            <Form.Label>Email</Form.Label>
                            <ModalFormControl
                                required
                                value={'fulano@fulano.com'}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="FormPhone">
                            <Form.Label>Telefone</Form.Label>
                            <ModalFormControl
                                required
                                value={'(31) 90000-0000'}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="FormFile">
                            <Form.Label>Foto</Form.Label>
                            <ModalFormControl
                                required
                                type='file'
                            />
                        </Form.Group>
                        <button className='mt-2'>Alterar</button>
                    </Form>
                </ModalBody>
            </ModalStyled>
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
                    <DivIconStyled onClick={handleShowModal}>
                        <div>
                            <FaCog />
                        </div>
                    </DivIconStyled>
                </DivSectionHeader>
            </Header>
            <MainStyledLayout>
                {children}
            </MainStyledLayout>
        </LayoutStyled>
    )
}
