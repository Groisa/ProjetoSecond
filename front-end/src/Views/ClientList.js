import { Layout } from "../Componensts/Layout/Layout";
import { ButtonNewOur, ButtonsControledTable, ContainerStyled, DivSeparetorStyledPrimary, ModalBody, ModalFormControl, ModalHeader, ModalStyled, ModalTitle, StyledPin, TableStyled, TitleStyled } from "../styled/styled";
import Cliente from '../img/Clientes.png'
import { FaAngleDoubleDown, FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
export function ClientView() {
    const [showModalNewClient, setShowModalNewClient] = useState(false);
    const handleCloseModalNewClient = () => setShowModalNewClient(false);
    const handleShowModalNewClient = () => setShowModalNewClient(true);

    const [showModalClientData, setShowModalClientData] = useState(false);
    const handleCloseModalClientData = () => setShowModalClientData(false);
    const handleShowModalClientData = () => setShowModalClientData(true);

    const formik = useFormik({
        initialValues: {
            FormNameEmpresa: '',
            FormDateInitial: '',
            FormMotivation: '',
            FormAddress: '',
            FormPhone: '',
            FormFile: '',
            FormEmail: '',
            FormPassword: '',
        },
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <Layout>
            <ContainerStyled>
                <TitleStyled>
                    <img src={Cliente} alt='tela de minhas horas' />
                    <h1>Lista de Clientes</h1>
                </TitleStyled>
                <DivSeparetorStyledPrimary />
                <ButtonNewOur onClick={handleShowModalNewClient}>
                    <FaSearchPlus />
                    Novo Cliente
                </ButtonNewOur>
                <ModalStyled show={showModalNewClient} onHide={handleCloseModalNewClient}>
                    <ModalHeader closeButton>
                        <ModalTitle>
                            <FaSearchPlus />
                            <h1>Novo Cliente</h1>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-1" controlId="FormNameEmpresa">
                                <Form.Label>Nome</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o nome da empresa'
                                    {...formik.getFieldProps('FormNameEmpresa')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormDateInitial">
                                <Form.Label>Data do inicio da parceria</Form.Label>
                                <ModalFormControl
                                    required
                                    type='date'
                                    {...formik.getFieldProps('FormDateInitial')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormMotivation" >
                                <Form.Label>Motivação</Form.Label>
                                <ModalFormControl
                                    className='d-flex text-center '
                                    as="textarea"
                                    required
                                    placeholder='Insira a motivação da parceria'
                                    {...formik.getFieldProps('FormMotivation')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormAddress">
                                <Form.Label>Endereço</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o endereço'
                                    {...formik.getFieldProps('FormAddress')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormPhone">
                                <Form.Label>Telefone</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o telefone'
                                    {...formik.getFieldProps('FormPhone')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormFile">
                                <Form.Label>foto</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira a sua melhor foto'
                                    type='file'
                                    {...formik.getFieldProps('FormFile')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormEmail">
                                <Form.Label>Email</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o melhor email'
                                    {...formik.getFieldProps('FormEmail')}
                                    type='email'
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormPassword">
                                <Form.Label>Senha</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira uma senha'
                                    type='password'
                                    {...formik.getFieldProps('FormPassword')}
                                />
                            </Form.Group>
                            <button type='submit'>Cadastrar</button>
                        </Form>
                    </ModalBody>
                </ModalStyled>
                <DivSeparetorStyledPrimary />
                <TableStyled>
                    <thead>
                        <tr>
                            <th>Nome <FaAngleDoubleDown /> </th>
                            <th>Tempo <FaAngleDoubleDown /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalClientData}/> Empresa A</td>
                            <td>05/05/22</td>
                        </tr>
                    </tbody>
                </TableStyled>
                <ButtonsControledTable>
                    <button>Anterior</button>
                    <button>Proxima</button>
                </ButtonsControledTable>
                <ModalStyled show={showModalClientData} onHide={handleCloseModalClientData}>
                    <ModalHeader closeButton>
                        <ModalTitle>
                            <img src={Cliente} alt='tela de minhas horas' />
                            <h1>Lista de Clientes</h1>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-1" controlId="FormNameEmpresa">
                                <Form.Label>Nome</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o nome da empresa'
                                    value= {'Empresa A'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormDateInitial">
                                <Form.Label>Data do inicio da parceria</Form.Label>
                                <ModalFormControl
                                    required
                                    value={'05/05/22'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormMotivation" >
                                <Form.Label>Motivação</Form.Label>
                                <ModalFormControl
                                    className='d-flex text-center '
                                    as="textarea"
                                    required
                                    placeholder='Insira a motivação da parceria'
                                    value={'loren loren loren loren loren'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormAddress">
                                <Form.Label>Endereço</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o endereço'
                                    value={'Av Lugar Nenhum, Nº32, Crimeia'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormPhone">
                                <Form.Label>Telefone</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o telefone'
                                    value={'(00) 3199999-0000'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormEmail">
                                <Form.Label>Email</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o melhor email'
                                    type='email'
                                    value={'cliente@cliente.com.br'}
                                />
                            </Form.Group>
                        </Form>
                    </ModalBody>
                </ModalStyled>
            </ContainerStyled>
        </Layout>
    )

}