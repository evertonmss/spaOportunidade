import { ThemeProvider } from "styled-components";

const fontSizes: any = [24, 18, 16, 15, 14, 12, 10, 9];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primaryC = '#21D170';
const secondaryC = '#8798AD';
const terciaryC = '#274264';

const theme = {
    fontSizes,
    fonts: {
        primary: 'Rubik',
    },
    colors: {
        primaryC,
        secondaryC,
        terciaryC,
    },
}

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};