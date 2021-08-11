import { Oportunite } from "../../interfaces";
import { Column } from "../layout";
import { CardDonate } from "./card";

type ListProps = {
    itens : Oportunite[];
}
export const ListCards: React.FC<ListProps> = ({ itens }) => {
    return (
        <Column>
        {itens.map((item,index) => {
            return(
                <CardDonate key={index} {...item}/>
            )
        })}
        </Column>
    );
}