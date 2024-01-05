import styled from "styled-components";

export const DivSTY = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.N0};
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;
