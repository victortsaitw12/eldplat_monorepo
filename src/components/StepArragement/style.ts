import styled from "styled-components";
export const BodySTY = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const ItemSTY = styled.li`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  list-style: none;
  width: 780px;
  .content {
    width: 60px;
  }
  .option-container {
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
      //Neutral/N600
      color: ${({ theme }) => theme.color.N600};
    }
  }
`;
