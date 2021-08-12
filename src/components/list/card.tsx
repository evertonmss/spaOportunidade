import { Column, Row } from "../layout";
import { TxtDescription, TitleCard, TxtButton, TxtInstituion, TxtLocation, TxtInfo, TxtQuantite } from "../text";
import { ButtonDonate } from "../button";
import { CardArea, CardBackground, DescriptionBloc, InfoBloc, LineBot, LineTop, TitleBloc, IconBloc, Icon} from "../layout/cardLayout";
import { Oportunite } from "../../interfaces";
//url icons https://imgur.com/a/Dbf0VG2
//material https://i.imgur.com/xiAyN3f.png
//volutario https://i.imgur.com/At4JhCy.png
//contribution https://i.imgur.com/9fWviMv.png
export const CardDonate: React.FC<Oportunite> = ({ title, description,institution,quantite, location, txtButton, iconUrl }) => {
    return (
        <CardArea margin='16px'>
            <CardBackground>
                <Column>
                    <Row align-items='center' height='30px' justifyContent ='left'>
                        <TitleBloc marginLeft='24px' marginTop='5px'> 
                            <TitleCard>
                                {title}
                            </TitleCard>
                        </TitleBloc>
                    </Row>
                    <LineTop />
                    <Row>
                        <DescriptionBloc margin='10px'>
                            <TxtDescription>
                                {description}
                            </TxtDescription>
                            <TxtInstituion>
                                {institution}
                            </TxtInstituion>
                        </DescriptionBloc>
                        <IconBloc marginRight='24px' height='130px' width='80px'>
                            <Icon src={iconUrl} alt="Icone"></Icon>
                        </IconBloc>
                    </Row>
                    <Row >
                        <Column flex='1'>    
                            <InfoBloc>
                                <TxtQuantite>
                                    {quantite}
                                </TxtQuantite>
                                <TxtInfo>
                                    ítens disponíveis
                                </TxtInfo>
                            </InfoBloc>        
                         </Column>
                         <Column align-items='right' marginBottom='24px'>
                            <ButtonDonate>
                                <TxtButton>
                                    {txtButton}
                                </TxtButton>
                            </ButtonDonate>
                         </Column>
                    </Row>
                    <LineBot />
                    <Row alignItems='center'>
                        <Column marginLeft='24px' marginBottom='12px' marginTop='15px'>
                            <TxtLocation>{location}</TxtLocation>
                        </Column>
                        
                    </Row>
                </Column>
            </CardBackground>
        </CardArea>
    );
}