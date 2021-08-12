import { useEffect } from "react";
import { ListCards, Column, Row, ButtonTodas } from "./components";
import { SwitchButton, SwitchInput, SwitchLabel } from "./components/button/toogle";
//import { Toogle } from "./components/button/toogle";
import { TxtGeo, TxtTitle, TxtTodas } from "./components/text";
import { useOportunite } from "./hooks";
import { GlobalStyles } from "./themes";
const App: React.FC = ()=>{ 
    const { oportunites, getAll } = useOportunite();
    useEffect(() => {
        getAll()
    },[getAll]);
    return (
        <div>
            <Row alignItems='center' justifyContent ='center' margin='25px'>
                <Column>
                    <TxtTitle>
                        Oportunidades em destaque
                    </TxtTitle>
                </Column>
                <Column marginLeft='50px'>
                    <TxtGeo>
                        Geologalização Ativa
                    </TxtGeo>
                </Column>
                <Column>
                    <SwitchInput type="checkbox"></SwitchInput>
                    <SwitchLabel>
                        <SwitchButton>

                        </SwitchButton>    
                    </SwitchLabel>
                    
                </Column>
                
            </Row>
            <Row justifyContent ='center' >
                <ListCards itens={oportunites}>
                </ListCards>
            </Row>
            <Row justifyContent ='center' marginBottom='150px'>
                <ButtonTodas>
                    <TxtTodas>
                        Todas as Oportunidades
                    </TxtTodas>
                </ButtonTodas>
            </Row>
            <GlobalStyles/>
        </div>
    )
}

export default App;