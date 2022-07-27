import { Layout } from "../Componensts/Layout/Layout";
import { ButtonNewOur, ButtonsControledTable, ContainerStyled, DivSeparetorStyled, DivSeparetorStyledPrimary, ModalBody, ModalFormControl, ModalFormControlSelect, ModalHeader, ModalStyled, ModalTitle, SectionInputPesqDate, StyledPin, TableStyled, TitleStyled } from "../styled/styled";
import NewHour from '../img/CronogramaHoras.png'
import { FaSearchPlus, FaSistrix, FaAngleDoubleDown } from "react-icons/fa";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from 'formik'

export function NewHourView() {
    const [showModalData, setShowModalData] = useState(false);
    const handleCloseModalData = () => setShowModalData(false);
    const handleShowModalData = () => setShowModalData(true);

    const [showModalNewData, setShowModalNewData] = useState(false);
    const handleCloseModalNewData = () => setShowModalNewData(false);
    const handleShowModalNewData = () => setShowModalNewData(true);
    const formik = useFormik({
        initialValues: {
            FormNome: '',
            FormHoras: '',
            FormPontos: '0,00',
            FormProjeto: '',
            FormItem: '',
            FormObs: '',
            FormDate: '',
        },
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <Layout>
            <ContainerStyled>
                <TitleStyled>
                    <img src={NewHour} alt='tela de minhas horas' />
                    <h1>Controle de Horas</h1>
                </TitleStyled>
                <DivSeparetorStyledPrimary></DivSeparetorStyledPrimary>
                <ButtonNewOur onClick={handleShowModalNewData}>
                    <FaSearchPlus />
                    Novo Lançamento
                </ButtonNewOur>
                {/* Modal NewOur */}
                <ModalStyled show={showModalNewData} onHide={handleCloseModalNewData}>
                    <ModalHeader closeButton>
                        <ModalTitle>
                            <FaSearchPlus />
                            <h1>Novo Lançamento</h1>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form className='p-0 m-0' onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-1" controlId="FormNome">
                                <Form.Label>Nome</Form.Label>
                                <ModalFormControlSelect 
                                    required
                                    {...formik.getFieldProps('FormNome')}
                                    aria-label="Default select example"
                                    variant="white"
                                >
                                    <option value="Fulano A">Fulano A</option>
                                    <option value="Fulano B">Fulano B</option>
                                    <option value="Fulano C">Fulano C</option>
                                </ModalFormControlSelect>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-1" controlId="FormHoras">
                                        <Form.Label>Horas</Form.Label>
                                        <ModalFormControl
                                            required
                                            {...formik.getFieldProps('FormHoras')}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-1" controlId="FormPontos">
                                        <Form.Label>Pontos</Form.Label>
                                        <ModalFormControl
                                            {...formik.getFieldProps('FormPontos')}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-1" controlId="FormProjeto">
                                <Form.Label>Projeto</Form.Label>
                                <ModalFormControlSelect 
                                    required
                                    {...formik.getFieldProps('FormProjeto')}
                                    aria-label="Default select example"
                                    variant="white"
                                >
                                    <option value="Projeto A">Projeto A</option>
                                    <option value="Projeto B">Projeto B</option>
                                    <option value="Projeto C">Projeto C</option>
                                </ModalFormControlSelect>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormItem">
                                <Form.Label>Item do Projeto</Form.Label>
                                <ModalFormControlSelect 
                                    required
                                    {...formik.getFieldProps('FormItem')}
                                    aria-label="Default select example"
                                    variant="white"
                                >
                                    <option value="Manutenção A">Manutenção A</option>
                                    <option value="Manutenção B">Manutenção B</option>
                                    <option value="Manutenção C">Manutenção C</option>
                                </ModalFormControlSelect>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormObs" >
                                <Form.Label>Observação</Form.Label>
                                <ModalFormControl
                                    value={'Loren loren loren loren loren'}
                                    className='d-flex text-center '
                                    as="textarea"
                                    required
                                    {...formik.getFieldProps('FormObs')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormDate">
                                <Form.Label>Data</Form.Label>
                                <ModalFormControl
                                    required
                                    {...formik.getFieldProps('FormDate')}
                                    type='date'
                                />
                            </Form.Group>
                            <button type='submit'>Cadastrar</button>
                        </Form>
                    </ModalBody>
                </ModalStyled>
                <DivSeparetorStyledPrimary></DivSeparetorStyledPrimary>
                <SectionInputPesqDate>
                    <input value='00/00/00' />
                    <p>até</p>
                    <input value='00/00/00' />
                    <FaSistrix />
                </SectionInputPesqDate>
                <DivSeparetorStyled className="mt-2"></DivSeparetorStyled>
                <TableStyled>
                    <thead>
                        <tr>
                            <th>Usuário <FaAngleDoubleDown /> </th>
                            <th>Horas <FaAngleDoubleDown /></th>
                            <th>Pontos <FaAngleDoubleDown /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><StyledPin onClick={handleShowModalData} /> Fulano A</td>
                            <td>100hrs</td>
                            <td>100pts</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalData} /> Fulano A</td>
                            <td>100hrs</td>
                            <td>100pts</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalData} /> Fulano A</td>
                            <td>100hrs</td>
                            <td>100pts</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalData} /> Fulano A</td>
                            <td>100hrs</td>
                            <td>100pts</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalData} /> Fulano A</td>
                            <td>100hrs</td>
                            <td>100pts</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalData} /> Fulano A</td>
                            <td>100hrs</td>
                            <td>100pts</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleShowModalData} /> Fulano A</td>
                            <td>100hrs</td>
                            <td>100pts</td>
                        </tr>
                    </tbody>
                </TableStyled>
                <ButtonsControledTable>
                    <button>Anterior</button>
                    <button>Proxima</button>
                </ButtonsControledTable>
            </ContainerStyled>
            {/* <Modal Data*/}
            <ModalStyled show={showModalData} onHide={handleCloseModalData}>
                <ModalHeader closeButton>
                    <ModalTitle>
                        <img src={NewHour} alt='tela de minhas horas' />
                        <h1>Controle de Horas</h1>
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form className='p-0 m-0'>
                        <Form.Group className="mb-1" controlId="FormNome">
                            <Form.Label>Nome</Form.Label>
                            <ModalFormControl
                                value={'Fulano A'}
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-1" controlId="FormHoras">
                                    <Form.Label>Horas</Form.Label>
                                    <ModalFormControl
                                        value={'100hrs'}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-1" controlId="FormPontos">
                                    <Form.Label>Pontos</Form.Label>
                                    <ModalFormControl
                                        value={'100pts'}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-1" controlId="FormProjeto">
                            <Form.Label>Projeto</Form.Label>
                            <ModalFormControl
                                value={'Projeto A'}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="FormItem">
                            <Form.Label>Item do Projeto</Form.Label>
                            <ModalFormControl
                                value={'Manutenção A'}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="FormObs" >
                            <Form.Label>Observação</Form.Label>
                            <ModalFormControl
                                value={'Loren loren loren loren loren'}
                                className='d-flex text-center '
                                as="textarea"
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="FormDate">
                            <Form.Label>Data</Form.Label>
                            <ModalFormControl
                                type='date'
                            />
                        </Form.Group>
                    </Form>
                </ModalBody>
            </ModalStyled>
        </Layout>
    )
}