import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps, flex, FlexProps } from "styled-system";

type ColumnProps = LayoutProps & SpaceProps & FlexProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${layout};
    ${space};
    ${flex};
`;
