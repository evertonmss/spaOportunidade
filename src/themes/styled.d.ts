import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  * {
    margin: 1px;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
`;