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
.react-datepicker-popper {
  z-index:99;
      .react-datepicker {
        .react-datepicker__triangle {
          display:none;
        }
        .react-datepicker__navigation {
        }
        .react-datepicker__month-container {
          .react-datepicker__header {
            background: ${({ theme }) => theme.color.N0};
          }
          .react-datepicker__month {
            .react-datepicker__week {
              .react-datepicker__day {
                color: ${({ theme }) => theme.color.N700};
              }
              .react-datepicker__day--in-range{
                background: ${({ theme }) => theme.color.B100};
                border-radius: 0px 0px 0px 0px;
              }
              .react-datepicker__day--range-start {
                background: ${({ theme }) => theme.color.B400};
                color: ${({ theme }) => theme.color.N0};
                border-radius: 40px 5px 5px 40px;
              }
              .react-datepicker__day--range-end {
                background: ${({ theme }) => theme.color.B400};
                color: ${({ theme }) => theme.color.N0};
                border-radius: 5px 40px 40px 5px;
              }
              .react-datepicker__day--range-start.react-datepicker__day--range-end{
                border-radius: 40px 40px 40px 40px;
              }
            }
          }
        }
      }
    }
`;
