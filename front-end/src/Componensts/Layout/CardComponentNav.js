import { CardComponentNav, DivIconStyled, ModalBody, ModalFormControl, ModalHeader, ModalStyled, ModalTitle } from "../../styled/styled";
import MinhasHoras from '../../img/MinhasHoras.png'
import BurnDown from '../../img/BurnDown.png'
import CronogramaHoras from '../../img/CronogramaHoras.png'
import Projetos from '../../img/Projetos.png'
import Clientes from '../../img/Clientes.png'
import Users from '../../img/Users.png'
import { FaCog, FaHome, FaRegShareSquare } from "react-icons/fa";
import { logoutUser } from "../../services/logout";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState } from "react";


export function CardComponentNavView() {
    const navigate = useNavigate()
    const singOutUser = async () => {
        await logoutUser()
        toast.success('Deslogado com sucesso!')
    }
    const handleNavigate = () => {
        navigate('/')
    }
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    return (
        <>
            <CardComponentNav as={Link} to='/controle-minhas-horas' >
                <img src={MinhasHoras} alt='Minhas Horas' />
                <p>Minhas Horas</p>
            </CardComponentNav>
            <CardComponentNav as={Link} to='/burnDown'>
                <img src={BurnDown} alt='BurnDown' />
                <p>BurnDown</p>
            </CardComponentNav>
            <CardComponentNav as={Link} to='/newHour'>
                <img src={CronogramaHoras} alt='Controle de Horas' />
                <p>Controle de Horas</p>
            </CardComponentNav>
            <CardComponentNav as={Link} to='/lista-de-projetos'>
                <img src={Projetos} alt='Projetos' />
                <p>Projetos</p>
            </CardComponentNav>
            <CardComponentNav as={Link} to='/lista-de-clientes'>
                <img src={Clientes} alt='Clientes' />
                <p>Clientes</p>
            </CardComponentNav>
            <CardComponentNav className='d-flex justify-content-center'>
                <DivIconStyled onClick={handleNavigate}>
                    <div>
                        <FaHome />
                    </div>
                    <p>Configuração</p>
                </DivIconStyled>
                <DivIconStyled onClick={singOutUser}>
                    <div>
                        <FaRegShareSquare />
                    </div>
                    <p>Sair</p>
                </DivIconStyled>
                <DivIconStyled onClick={handleShowModal}>
                    <div>
                        <FaCog />
                    </div>
                    <p>Configuração</p>
                </DivIconStyled>
            </CardComponentNav>
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
        </>
    )
}