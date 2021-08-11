import { useEffect } from "react";
import { ListCards, Column, Row } from "./components";
import { Toogle } from "./components/button/toogle";
import { TxtGeo, TxtTitle } from "./components/text";
import { useOportunite } from "./hooks";
import { GlobalStyles, Theme } from "./themes";
const App: React.FC = ()=>{ 
    const { oportunites, getAll } = useOportunite();
    useEffect(() => {
        getAll()
    },[getAll]);
    return (
        <Theme>
            <Row>
                <TxtTitle>
                    Oportunidades em destaque
                </TxtTitle>
                <TxtGeo>
                    Geologalização Ativa
                </TxtGeo>
                <Toogle></Toogle>
            </Row>
            <Row>
                <Column width="600px" margin="0 auto">
                    <Row width="100%">
                        <GlobalStyles/>
                        <ListCards itens={oportunites}>
                        </ListCards>
                    </Row>
                </Column>
            </Row>
        </Theme>
    )
}

export default App;