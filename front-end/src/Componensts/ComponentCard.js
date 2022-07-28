import { CardComponentStyled, CardComponentStyledSecond, CardContainer, CardSectionStyled, DivSeparetorStyled } from "../styled/styled";
import MinhasHoras from '../img/MinhasHoras.png'
import BurnDown from '../img/BurnDown.png'
import CronogramaHoras from '../img/CronogramaHoras.png'
import Projetos from '../img/Projetos.png'
import Clientes from '../img/Clientes.png'
import Users from '../img/Users.png'
import { Link } from 'react-router-dom'
export function ComponentCardView() {
    return (
        <CardContainer>
            <CardComponentStyled as={Link} to='/controle-minhas-horas'>
                <div>
                    <img src={MinhasHoras} alt='Icone da tela de Minhas Horas' />
                </div>
                <p>Minhas Horas</p>
            </CardComponentStyled>
            <DivSeparetorStyled></DivSeparetorStyled>
            <CardSectionStyled>
                <CardComponentStyledSecond>
                    <div>
                        <img src={BurnDown} alt='Icone da tela de BurnDown' />
                    </div>
                    <p>BurnDown</p>
                </CardComponentStyledSecond>
                <CardComponentStyledSecond as={Link} to='/newHour'>
                    <div>
                        <img src={CronogramaHoras} alt='Icone da tela de Controle de horas' />
                    </div>
                    <p>Controle de Horas</p>
                </CardComponentStyledSecond>
                <CardComponentStyledSecond as={Link} to='lista-de-projetos'>
                    <div>
                        <img src={Projetos} alt='Icone da tela de Projetos' />
                    </div>
                    <p>Projetos</p>
                </CardComponentStyledSecond>
                <CardComponentStyledSecond as={Link} to='/lista-de-clientes'>
                    <div>
                        <img src={Clientes} alt='Icone da tela de Clientes' />
                    </div>
                    <p>Clientes</p>
                </CardComponentStyledSecond>
                <CardComponentStyledSecond>
                    <div>
                        <img src={Users} alt='Icone da tela de Users' />
                    </div>
                    <p>Usuários</p>
                </CardComponentStyledSecond>
            </CardSectionStyled>
        </CardContainer>
    )
}