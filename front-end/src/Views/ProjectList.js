import { Layout } from "../Componensts/Layout/Layout";
import { ButtonNewOur, ButtonsControledTable, ContainerStyled, DivSeparetorStyledPrimary, ModalBody, ModalFormControl, ModalFormControlSelect, ModalHeader, ModalStyled, ModalTitle, StyledPin, TableStyled, TitleStyled } from "../styled/styled";
import Projeto from '../img/Projetos.png'
import { FaAngleDoubleDown, FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
export function ProjectListView() {
    const [showModalNewProject, setshowModalNewProject] = useState(false);
    const handleCloseNewProject = () => setshowModalNewProject(false);
    const handleshowModalNewProject = () => setshowModalNewProject(true);

    const [showModalNewSprint, setshowModalNewSprint] = useState(false);
    const handleCloseNewSprint = () => setshowModalNewSprint(false);
    const handleshowModalNewSprint = () => setshowModalNewSprint(true);

    const [showModalDetails, setshowModalDetails] = useState(false);
    const handleCloseDetails = () => setshowModalDetails(false);
    const handleshowModalDetails = () => setshowModalDetails(true);

    const formikNewProject = useFormik({
        initialValues: {
            FormNomeProject: '',
            FormDateInitalProject: '',
            FormDateFinalProject: '',
            FormNameEmpresaProject: '',
            FormObsProject: '',
        },
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    const formikNewSprint = useFormik({
        initialValues: {
            FormNomeSprint: '',
            FormNameProjectSprint: '',
            FormObsSprint: '',
        },
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <Layout>
            <ContainerStyled>
                <TitleStyled>
                    <img src={Projeto} alt='tela de minhas horas' />
                    <h1>Controle de Horas</h1>
                </TitleStyled>
                <DivSeparetorStyledPrimary />
                <ButtonNewOur onClick={handleshowModalNewProject}>
                    <FaSearchPlus />
                    Novo Projeto
                </ButtonNewOur>
                <ModalStyled show={showModalNewProject} onHide={handleCloseNewProject}>
                    <ModalHeader closeButton>
                        <ModalTitle>
                            <FaSearchPlus />
                            <h1>Novo Projeto</h1>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form className='p-0 m-0' onSubmit={formikNewProject.handleSubmit}>
                            <Form.Group className="mb-1" controlId="FormNomeProject">
                                <Form.Label>Nome</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o nome do projeto'
                                    {...formikNewProject.getFieldProps('FormNomeProject')}
                                />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-1" controlId="FormDateInitalProject">
                                        <Form.Label>Horas</Form.Label>
                                        <ModalFormControl
                                            required
                                            type='date'
                                            {...formikNewProject.getFieldProps('FormDateInitalProject')}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-1" controlId="FormDateFinalProject">
                                        <Form.Label>Pontos</Form.Label>
                                        <ModalFormControl
                                            required
                                            type='date'
                                            {...formikNewProject.getFieldProps('FormDateFinalProject')}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-1" controlId="FormNameEmpresaProject">
                                <Form.Label>Empresa</Form.Label>
                                <ModalFormControlSelect
                                    required
                                    aria-label="Default select example"
                                    variant="white"
                                    {...formikNewProject.getFieldProps('FormNameEmpresaProject')}
                                >
                                    <option value="Empresa A">Empresa A</option>
                                    <option value="Empresa B">Empresa B</option>
                                    <option value="Empresa C">Empresa C</option>
                                </ModalFormControlSelect>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormObsProject" >
                                <Form.Label>Observação</Form.Label>
                                <ModalFormControl
                                    className='d-flex text-center '
                                    as="textarea"
                                    required
                                    placeholder='Insira uma breve descrição'
                                    {...formikNewProject.getFieldProps('FormObsProject')}
                                />
                            </Form.Group>
                            <button type='submit'>Cadastrar</button>
                        </Form>
                    </ModalBody>
                </ModalStyled>
                <ButtonNewOur onClick={handleshowModalNewSprint}>
                    <FaSearchPlus />
                    Novo Sprint
                </ButtonNewOur>
                {/* Modal Nova Sprint */}
                <ModalStyled show={showModalNewSprint} onHide={handleCloseNewSprint}>
                    <ModalHeader closeButton>
                        <ModalTitle>
                            <FaSearchPlus />
                            <h1>Nova Sprint</h1>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form className='p-0 m-0' onSubmit={formikNewSprint.handleSubmit}>
                            <Form.Group className="mb-1" controlId="FormNomeSprint">
                                <Form.Label>Nome</Form.Label>
                                <ModalFormControl
                                    required
                                    placeholder='Insira o nome da sprint'
                                    {...formikNewSprint.getFieldProps('FormNomeSprint')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormNameProjectSprint">
                                <Form.Label>Projeto</Form.Label>
                                <ModalFormControlSelect
                                    required
                                    aria-label="Default select example"
                                    variant="white"
                                    {...formikNewSprint.getFieldProps('FormNameProjectSprint')}
                                >
                                    <option value="Projeto A">Projeto A</option>
                                    <option value="Projeto B">Projeto B</option>
                                    <option value="Projeto C">Projeto C</option>
                                </ModalFormControlSelect>
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormObsSprint" >
                                <Form.Label>Observação</Form.Label>
                                <ModalFormControl
                                    className='d-flex text-center '
                                    as="textarea"
                                    required
                                    placeholder='Insira uma breve descrição'
                                    {...formikNewSprint.getFieldProps('FormObsSprint')}
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
                            <th>Início <FaAngleDoubleDown /></th>
                            <th>Término <FaAngleDoubleDown /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><StyledPin onClick={handleshowModalDetails} /> Projeto A</td>
                            <td>25/07/22</td>
                            <td>27/07/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleshowModalDetails} /> Projeto A</td>
                            <td>25/07/22</td>
                            <td>27/07/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleshowModalDetails} /> Projeto A</td>
                            <td>25/07/22</td>
                            <td>27/07/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleshowModalDetails} /> Projeto A</td>
                            <td>25/07/22</td>
                            <td>27/07/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleshowModalDetails} /> Projeto A</td>
                            <td>25/07/22</td>
                            <td>27/07/22</td>
                        </tr>
                        <tr>
                            <td><StyledPin onClick={handleshowModalDetails} /> Projeto A</td>
                            <td>25/07/22</td>
                            <td>27/07/22</td>
                        </tr>
                    </tbody>
                </TableStyled>
                <ButtonsControledTable>
                    <button>Anterior</button>
                    <button>Proxima</button>
                </ButtonsControledTable>
                {/* modal tabela */}
                <ModalStyled show={showModalDetails} onHide={handleCloseDetails}>
                    <ModalHeader closeButton>
                        <ModalTitle>
                            <img src={Projeto} alt='tela de minhas horas' />
                            <h1>Controle de Horas</h1>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form className='p-0 m-0'>
                            <Form.Group className="mb-1" controlId="FormNomeDetails">
                                <Form.Label>Nome</Form.Label>
                                <ModalFormControl
                                    required
                                    value={'Projeto A'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormNomeEmpresaDetails">
                                <Form.Label>Nome</Form.Label>
                                <ModalFormControl
                                    required
                                    value={'Empresa a'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormObsDetails" >
                                <Form.Label>Observação</Form.Label>
                                <ModalFormControl
                                    className='d-flex text-center '
                                    as="textarea"
                                    required
                                    value={'loren loren loren loren loren'}
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="FormNameProjectDetails">
                                <Form.Label>Sprint</Form.Label>
                                <ModalFormControlSelect
                                    required
                                    aria-label="Default select example"
                                    variant="white"
                                >
                                    <option value="Manutenção A">Manutenção A</option>
                                    <option value="Manutenção B">Manutenção B</option>
                                    <option value="Manutenção C">Manutenção C</option>
                                </ModalFormControlSelect>
                            </Form.Group>
                        </Form>
                    </ModalBody>
                </ModalStyled>
            </ContainerStyled>
        </Layout>
    )
}