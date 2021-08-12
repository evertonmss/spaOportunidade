import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps, flexbox, FlexboxProps } from "styled-system";

type CardProps = LayoutProps & SpaceProps & FlexboxProps;

export const CardArea = styled.div<CardProps>`
    position: static;
    width: 316px;
    height: 314px;
    ${layout}
    ${space}
    ${flexbox}
`;
export const TitleBloc = styled.div<CardProps>`
    /* Title */
    position: static;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    ${layout}
    ${space}
    ${flexbox}
`;
export const DescriptionBloc = styled.div<CardProps>`
    /* Auto Layout */

    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0px;

    position: static;
    ${layout}
    ${space}
    ${flexbox}
`;
export const InfoBloc = styled.div<CardProps>`
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    ${layout}
    ${space}
    ${flexbox}

`;
export const CardBackground = styled.div<CardProps>`
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
export const Chk = styled.span<CardProps>`
    ${layout}
    ${space}
    ${flexbox}
`;
export const Box = styled.div<CardProps>`
    ${layout}
    ${space}
    ${flexbox}
`;
export const Tog = styled.input<CardProps>`
    ${layout}
    ${space}
    ${flexbox}
`;
export const IconBloc = styled.div<CardProps>`
    position: static;
    ${layout}
    ${space}
    ${flexbox}
`;
export const Icon = styled.img`
    
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