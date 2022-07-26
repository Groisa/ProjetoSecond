
import Perg from '../img/Perf.jpg'
import { FaCog, FaRegShareSquare } from "react-icons/fa";
import LogoSecondBlack from '../img/SecondBlack.png'
import { CardComponentStyled, ContainerHome, DivIconStyled, DivSectionHeader, DivStyledName, HaderStyled, LogoSecondImgStyled, MainsStyledHome } from '../styled/styled';
import { ComponentCardView } from '../Componensts/ComponentCard';

export function HomeView() {
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
                <LogoSecondImgStyled src={LogoSecondBlack} alt='Logo SecondMind'/>
                <DivSectionHeader>
                    <DivIconStyled>
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
                </DivSectionHeader>
            </HaderStyled>
            <MainsStyledHome>
                <img src={LogoSecondBlack} alt='Logo SecondMind' />
                <h1>Sistema de Controle</h1>
                <span></span>
                <ComponentCardView />
            </MainsStyledHome>
        </ContainerHome>

    )
}
