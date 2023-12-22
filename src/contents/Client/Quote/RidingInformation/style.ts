import styled from "styled-components";
export const BodySTY = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  > .header-container {
    display: flex;
    flex-direction: row;
    padding: 0px;
    gap: 40px;
    > .header-item {
      flex: 1 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      > .header-title {
        font-weight: 700;
        font-size: 14px;
        color: ${({ theme }) => theme.color.N700};
      }

      .counter_input_label {
        color: ${({ theme }) => theme.color.N700};
        font-weight: 600;
        flex: none;
        min-width: 170px;
      }

      .counter_input_content {
        justify-content: flex-start;

        > svg {
          fill: ${({ theme }) => theme.color.N200};
        }
      }
    }
  }
  > .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
`;

export const CollapseCardSTY = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
