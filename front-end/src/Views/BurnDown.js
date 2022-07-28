import { Layout } from "../Componensts/Layout/Layout";
import { ContainerStyled, DivSeparetorStyledPrimary, FormStyledBurnDown, ImgGraficBurnDown, ModalFormControlSelectBurnDown, ModalHeader, ModalStyled, ModalTitle, TitleStyled } from "../styled/styled";
import BurnDown from '../img/BurnDown.png'
import { Form } from "react-bootstrap";
import GraficoBurnDown from '../img/GraficoBurnDown.png'
export function BurnDownView() {
    return (
        <Layout>
            <ContainerStyled>
                <TitleStyled>
                    <img src={BurnDown} alt='tela de BurnDown' />
                    <h1>BurnDown</h1>
                </TitleStyled>
                <DivSeparetorStyledPrimary />
                <FormStyledBurnDown>
                    <Form.Group className="mb-1" controlId="FormProject">
                        <Form.Label>Projeto</Form.Label>
                        <ModalFormControlSelectBurnDown
                            required
                            aria-label="Default select example"
                            variant="white"
                        >
                            <option value="Projeto A">Projeto A</option>
                            <option value="Projeto B">Projeto B</option>
                            <option value="Projeto C">Projeto C</option>
                        </ModalFormControlSelectBurnDown>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="FormSprint">
                        <Form.Label>Sprint</Form.Label>
                        <ModalFormControlSelectBurnDown
                            required
                            aria-label="Default select example"
                            variant="white"
                        >
                            <option value="Sprint A">Sprint A</option>
                            <option value="Sprint B">Sprint B</option>
                            <option value="Sprint C">Sprint C</option>
                        </ModalFormControlSelectBurnDown>
                    </Form.Group>
                </FormStyledBurnDown>
                <DivSeparetorStyledPrimary className="mt-2" />
                <ImgGraficBurnDown src={GraficoBurnDown} />
            </ContainerStyled>
        </Layout>
    )
}