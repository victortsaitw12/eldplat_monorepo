import styled from "styled-components";

export const DivSTY = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.N0};
  box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`;
