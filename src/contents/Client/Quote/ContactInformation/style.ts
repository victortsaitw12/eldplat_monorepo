import styled from "styled-components";
export const BodySTY = styled.ul`
  box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
  border-radius: 10px;
  overflow: hidden;
`;

export const ContainerSTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
`;

export const ItemSTY = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;
  > .item-container {
    display: flex;
    flex: 1 0 0;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 21px;
    > .item-title {
      width: 80px;
      display: "flex";
      justify-content: "flex-start";
      align-items: "center";
      gap: 0;
    }
    > .item-input-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1 0 0;
      > input {
        width: auto;
      }
      .input-error {
        color: ${({ theme }) => theme.color.R400};
      }
    }
    > .double-input-container {
      display: flex;
      /* gap: 8px; */
      flex: 1 0 0;
      > .item-input-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1 0 0;
        > input {
          width: auto;
        }
        .input-error {
          color: ${({ theme }) => theme.color.R400};
        }
      }
    }
  }
`;

export const StyledCollapseTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  > button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 14px;
    color: ${({ theme }) => theme.color.N700};
  }
  > label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
