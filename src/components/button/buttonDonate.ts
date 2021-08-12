import styled from 'styled-components';

export const ButtonDonate = styled("button")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8px 16px;

    position: relative;
    width: 101px;
    right: 34px;

    /* color-brand-secondary */

    background: #21D170;
    border-radius: 5px;
`;
export const ButtonTodas = styled("button")`
    padding: 16px 24px;

    position: relative;
    left: 13.75%;
    right: 70.07%;
    top: 76.44%;
    bottom: 20.23%;

    /* color-brand-secondary */
    background: #ffffff;

    border: 1px solid #21D170;
    box-sizing: border-box;
    border-radius: 6px;
`;
declare module 'styled-components' {
    export interface Button {
        width: string;
        height: string;      
        colors: {
            main: string;
            secondary: string;
        };
    }
  }
  /**
  button-primary-small 

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;

    position: absolute;
    width: 64px;
    right: 24px;
    top: 66.42%;
    bottom: 22.75%;

    *   color-brand-secondary 
    background: #21D170;
    border-radius: 5px;


    position: static;
height: 19px;
left: 24px;
right: 24px;
top: 16px;

font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
 identical to box height 

display: flex;
align-items: center;
text-align: center;

/* color-brand-secondary 

color: #21D170;
  */