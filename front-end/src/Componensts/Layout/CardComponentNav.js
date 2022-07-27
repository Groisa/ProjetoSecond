import { CardComponentNav, DivIconStyled } from "../../styled/styled";
import MinhasHoras from '../../img/MinhasHoras.png'
import BurnDown from '../../img/BurnDown.png'
import CronogramaHoras from '../../img/CronogramaHoras.png'
import Projetos from '../../img/Projetos.png'
import Clientes from '../../img/Clientes.png'
import Users from '../../img/Users.png'
import { FaCog, FaHome, FaRegShareSquare } from "react-icons/fa";
import { logoutUser } from "../../services/logout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export function CardComponentNavView() {
    const navigate = useNavigate()
    const singOutUser = async () => {
        await logoutUser()
        toast.success('Deslogado com sucesso!')
    }
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <>
            <CardComponentNav>
                <img src={MinhasHoras} alt='Minhas Horas' />
                <p>Minhas Horas</p>
            </CardComponentNav>
            <CardComponentNav>
                <img src={BurnDown} alt='BurnDown' />
                <p>BurnDown</p>
            </CardComponentNav>
            <CardComponentNav>
                <img src={CronogramaHoras} alt='Controle de Horas' />
                <p>Controle de Horas</p>
            </CardComponentNav>
            <CardComponentNav>
                <img src={Projetos} alt='Projetos' />
                <p>Projetos</p>
            </CardComponentNav>
            <CardComponentNav>
                <img src={Users} alt='Usuários' />
                <p>Usuários</p>
            </CardComponentNav>
            <CardComponentNav>
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
                <DivIconStyled>
                    <div>
                        <FaCog />
                    </div>
                    <p>Configuração</p>
                </DivIconStyled>
            </CardComponentNav>
        </>
    )
}