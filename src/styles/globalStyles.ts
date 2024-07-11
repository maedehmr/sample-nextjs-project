import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Fira Code" !important;
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;
