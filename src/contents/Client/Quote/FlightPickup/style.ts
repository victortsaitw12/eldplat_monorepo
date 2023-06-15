import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  width: 1240px;
  height: 48px;
  gap: 0px;
  background-color: ${({ theme }) => theme.color.N0};
  border-radius: 10px;
`;

export const StyledButton = styled.button<{ isSelected: boolean }>`
  flex: 1;
  cursor: pointer;
  border: none;
  font-weight: 600;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.N0 : theme.color.N700};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.B400 : theme.color.N0};
  border-radius: 10px;
  font-size: 16px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 58px;
  background-color: ${({ theme }) => theme.color.N0};
  > .form-item {
    display: flex;
    align-items: center;
    gap: 20px;
    > .form-sub-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;

export const StyledCard = styled.div`
  width: 1240px;
  box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
  border-radius: 10px;
  overflow: hidden;
`;
