import { Oportunite } from "../../interfaces";
import { Row } from "../layout";
//import { Column } from "../layout";
import { CardDonate } from "./card";

type ListProps = {
    itens : Oportunite[];
}
export const ListCards: React.FC<ListProps> = ({ itens }) => {
    return (
        <Row flexWrap='wrap' width='1200px'>
        {itens.map((item,index) => {
            return(
                <CardDonate key={index} {...item} />
            )
        })}
        </Row>
    );
}