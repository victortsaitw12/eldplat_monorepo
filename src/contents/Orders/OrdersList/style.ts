import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  a {
    text-decoration: none;
  }
  .collapse {
    &_title {
      border-radius: 10px 10px 0px 0px;
    }
    &_content {
      /* Pane */
      & > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 0px 0px 10px 10px;
        padding: 20px;
        .info {
          display: flex;
          flex-direction: row;
          gap: 20px;
          border-radius: 0px 0px 10px 10px;
          &__text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
            li {
              white-space: nowrap;

              span:first-child {
                flex: 1;
              }
              span:last-child {
                flex: 2;
              }
              gap: 10px;
            }
          }
          & > div {
            border: 1px solid ${({ theme }) => theme.color.N300};
            border-radius: 10px;
            padding: 10px 19px;
          }
        }
      }
    }
  }
`;
