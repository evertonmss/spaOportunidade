import styled from "styled-components";
import { layout, LayoutProps, flexbox, FlexboxProps, space, SpaceProps } from "styled-system";

type RowProps = LayoutProps & FlexboxProps & SpaceProps;

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    ${layout}
    ${space}
    ${flexbox}
`;
