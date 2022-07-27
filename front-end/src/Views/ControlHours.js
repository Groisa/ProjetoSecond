import GraficoMinhasHoras from '../img/GraficoMinhasHoras.png'
import { Layout } from "../Componensts/Layout/Layout";
import MinhasHoras from '../img/MinhasHoras.png'
import { ContainerStyled, DivSeparetorStyledPrimary, DataHoursTotal, TitleStyled, DataHours, ImgGrafic } from "../styled/styled";
export function ControlHoursViews() {
    return (
        <Layout>
            <ContainerStyled>
                <TitleStyled>
                    <img src={MinhasHoras} alt='tela de minhas horas' />
                    <h1>Minhas Horas</h1>
                </TitleStyled>
                <DivSeparetorStyledPrimary></DivSeparetorStyledPrimary>
                <DataHoursTotal>
                    <h2>Banco de Horas</h2>
                    <div></div>
                    <p>00:00</p>
                </DataHoursTotal>
                <div className="d-flex ">
                    <DataHours>
                        <h2>Hora Mês(Julho)</h2>
                        <div></div>
                        <p>00:00</p>
                    </DataHours>
                    <DataHours>
                        <h2>Hora Ano(2022)</h2>
                        <div></div>
                        <p>00:00</p>
                    </DataHours>
                </div>
                <DivSeparetorStyledPrimary className='mt-4'></DivSeparetorStyledPrimary>          
                <ImgGrafic src={GraficoMinhasHoras}/>
            </ContainerStyled>
        </Layout>
    )
}