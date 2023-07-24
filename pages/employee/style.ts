import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  height: calc(100% - 20px);
  margin: 10px;
  .list-style {
    padding: 24px;
    table {
      background-color: #ffffff;

      tbody {
        td {
          .data-row {
            .user_td {
              display: flex;
              gap: 12px;
              .user_icon {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-color: ${({ theme }) => theme.color.V100};
                justify-content: center;
              }

              .user_name {
                font-weight: 600;
                font-size: 14px;
                color: ${({ theme }) => theme.color.N900};
              }
            }
          }
        }
      }
    }
  }
`;
