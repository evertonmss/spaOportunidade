import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps, flex, FlexProps } from "styled-system";

type CardProps = LayoutProps & SpaceProps & FlexProps;

export const CardArea = styled.div<CardProps>`
    position: static;
    width: 316px;
    height: 314px;
    top: 118px;
    ${layout}
    ${space}
`;
export const DescriptionBloc = styled.div`
    /* Auto Layout */

    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0px;

    position: static;
    width: 203px;
    height: 102px;
    ${flex}
`;
export const InfoBloc = styled.div`
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 87px;
    left: 24px;
    top: 68.33%;
    bottom: 24.66%;

`;
export const CardBackground = styled.div`
    /* card-background */


    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    /* color-white */

    background: #FFFFFF;
    border: 1px solid #E6EAF6;
    box-sizing: border-box;
    border-radius: 6px;
`;
export const TitleBloc = styled.div<CardProps>`
    /* Title */
    position: static;
    width: 134px;
    height: 14px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    ${flex}
`;
export const IconBloc = styled.div`
    position: static;
    left: 77.07%;
    right: 7.64%;
    top: 22.47%;
    bottom: 62.34%;
`;
export const LineTop = styled.div`
    position: static;
    left: 0.32%;
    right: 0.32%;
    top: 14.56%;
    bottom: 85.13%;

    /* color-white */

    background: #FFFFFF;
    border: 1px solid #E6EAF6;
    box-sizing: border-box;
`;
export const LineBot = styled.div`
/* Button Background */
    position: static;
    left: 0.32%;
    right: 0.32%;
    top: 84.81%;
    bottom: 14.87%;

    /* color-white */

    background: #FFFFFF;
    border: 1px solid #E6EAF6;
    box-sizing: border-box;
`;