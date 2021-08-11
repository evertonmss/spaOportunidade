import { Column, Row } from "../layout";
import { TxtDescription, TitleCard, TxtButton, TxtInstituion, TxtLocation, TxtInfo, TxtQuantite } from "../text";
import { ButtonDonate } from "../button";
import { CardArea, CardBackground, DescriptionBloc, InfoBloc, LineBot, LineTop, TitleBloc, IconBloc} from "../layout/cardLayout";
import { Oportunite } from "../../interfaces";
//url icons https://imgur.com/a/Dbf0VG2
//material https://i.imgur.com/xiAyN3f.png
//volutario https://i.imgur.com/At4JhCy.png
//contribution https://i.imgur.com/9fWviMv.png
export const CardDonate: React.FC<Oportunite> = ({ title, description,institution,quantite, location }) => {
    return (
        <CardArea>
            <CardBackground>
                <Column>
                    <Row align-items='center' height='30px'>
                        <TitleBloc flex='1' verticalAlign='center'> 
                            <TitleCard>
                                {title}
                            </TitleCard>
                        </TitleBloc>
                    </Row>
                    <LineTop />
                    <Row>
                        <DescriptionBloc>
                            <TxtDescription>
                                {description}
                            </TxtDescription>
                            <TxtInstituion>
                                {institution}
                            </TxtInstituion>
                        </DescriptionBloc>
                        <IconBloc>
                            <img src="https://i.imgur.com/xiAyN3f.png" alt="material" />
                        </IconBloc>
                    </Row>
                    <Row display="flex">
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
                                    Doar
                                </TxtButton>
                            </ButtonDonate>
                         </Column>
                    </Row>
                    <LineBot />
                    <Row>
                        <TxtLocation>{location}</TxtLocation>
                    </Row>
                </Column>
            </CardBackground>
        </CardArea>
    );
}