
import Perg from '../img/Perf.jpg'
import { FaCog, FaRegShareSquare } from "react-icons/fa";
import LogoSecondBlack from '../img/SecondBlack.png'
import { ContainerHome, DivIconStyled, DivSectionHeader, DivStyledName, HaderStyled, LogoSecondImgStyled, MainsStyledHome, ModalBody, ModalFormControl, ModalHeader, ModalStyled, ModalTitle } from '../styled/styled';
import { ComponentCardView } from '../Componensts/Layout/ComponentCard';
import { logoutUser } from '../services/logout';
import { toast } from 'react-toastify'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
export function HomeView() {
    const singOutUser = async () => {
        await logoutUser()
        toast.success('Deslogado com sucesso!')
    }
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    return (
        <ContainerHome>
            <HaderStyled>
                <DivSectionHeader>
                    <img src={Perg} alt='imagem do usuário logado' />
                    <DivStyledName>
                        <h5>Bem Vindo!</h5>
                        <h2>Gabriel</h2>
                    </DivStyledName>
                </DivSectionHeader>
                <LogoSecondImgStyled src={LogoSecondBlack} alt='Logo SecondMind' />
                <DivSectionHeader>
                    <DivIconStyled onClick={singOutUser}>
                        <div>
                            <FaRegShareSquare />
                        </div>
                        <p>Sair</p>
                    </DivIconStyled>
                    <DivIconStyled>
                        <div>
                            <FaCog onClick={handleShowModal} />
                        </div>
                        <p>Configuração</p>
                    </DivIconStyled>
                </DivSectionHeader>
            </HaderStyled>
            <MainsStyledHome>
                <img src={LogoSecondBlack} alt='Logo SecondMind' />
                <h1>Sistema de Controle</h1>
                <span></span>
                <ComponentCardView />
            </MainsStyledHome>
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
        </ContainerHome>

    )
}
