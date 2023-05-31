import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  gap: 8px;
  color: ${({ theme }) => theme.color.N700};
`;
