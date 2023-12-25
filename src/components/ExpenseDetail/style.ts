import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.color.N700};
  padding: 20px 0;
  gap: 8px;
`;
