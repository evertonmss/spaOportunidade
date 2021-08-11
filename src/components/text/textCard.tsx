import { typography, TypographyProps } from 'styled-system';
import styled from "styled-components";

type TextProps = TypographyProps;
/**
 * Propriedades do Titulo do card:
    position: absolute;
    width: 134px;
    height: 13.91px;
    left: 24px;
    top: 15.9px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 * 
 * */
export const TitleCard = styled.p<TextProps>`
    font-family: 12px;
    color: #8798AD;
    position: static;
    width: 134px;
    height: 13.91px;
    left: 24px;
    top: 15.9px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    ${typography}   
`;

/**
 * Propriedades CSS da Descrição do Card
*/

export const TxtDescription = styled.p<TextProps>`
    position: static;
    left: 0%;
    right: 0%;
    top: calc(50% - 66px/2 - 18px);
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #274264;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;
`;
export const TxtButton = styled.p<TextProps>`
    /* Detalhes */


    position: static;
    width: 32px;
    height: 18px;
    left: 16px;
    top: calc(50% - 18px/2);

    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */


    /* color-white */

    color: #FFFFFF;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
`;
export const TxtInstituion = styled.p<TextProps>`
    /* Vehicles on track Copy 62 */

    position: static;
    left: 0.5px;

    /* font-size-sm */

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    /* identical to box height, or 143% */
    /* color-brand-secondary */

    color: #21D170;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 16px 0px;
`;
export const TxtLocation = styled.p<TextProps>`
    /* Vehicles on track Copy */
    position: static;
    width: 60px;
    left: 24px;
    top: 89.24%;
    bottom: 4.43%;

    /* font-size-sm */

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;

    /* color-neutral-light */

    color: #8798AD;
`;
export const TxtInfo = styled.p<TextProps>`
    position: static;
    width: 57px;
    height: 20px;
    left: 30px;
    top: 1px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 10px;
    /* or 111% */

    text-align: justify;
    letter-spacing: 0.225px;
    text-transform: uppercase;

    /* color-neutral-light */

    color: #8798AD;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
`;
export const TxtQuantite = styled.p<TextProps>`
    position: static;
    width: 22px;
    height: 22px;
    left: 0px;
    top: 0px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height, or 122% */


    /* color-neutral */

    color: #274264;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
`;