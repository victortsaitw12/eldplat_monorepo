import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  line-height: 1;
  letter-spacing: 1px;
  box-sizing: border-box;
}

html {
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  /* font-size: 62.5%; */
  font-size: 14px;
  overflow-x: hidden;
  /* Does NOT work on Safari */
  /* scroll-behavior: smooth; */
}

html, body {
  /* font-family: "Noto Sans",'Noto Sans TC', sans-serif; */
  font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryPalette.Neutral};
  /* Only works if there is nothing absolutely positioned in relation to body */
  overflow-x: hidden;
}
`;
