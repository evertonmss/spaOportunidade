import styled from 'styled-components';
export const ButtonDonate = styled("button")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;

    position: relative;
    width: 64px;
    right: 24px;

    /* color-brand-secondary */

    background: #21D170;
    border-radius: 5px;
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
   *  button-primary-small 

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
  */