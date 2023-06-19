import styled from "styled-components";
export const BodySTY = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  width: 100%;
`;

export const ItemSTY = styled.li`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.color.N700};
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  width: 100%;
  > .item-content-container {
    display: flex;
    align-items: center;
    gap: 20px;
    > .item-content {
      width: 70px;
    }
    > .option-container {
      display: flex;
      width: 72px;
      .option-item {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.color.N600};
      }
    }
  }
`;
