import styled from "styled-components";
export const BodySTY = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
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
  > .item-content {
    width: 90px;
    font-weight: 600;
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
`;

export const CollapseCardSTY = styled.div`
  margin-bottom: 20px;
`;
