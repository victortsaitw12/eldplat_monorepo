import styled from "styled-components";

export const BodySTY = styled.div`
  background-color: ${({ theme }) => theme.color.N300};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0;
  gap: 40px;
`;

export const StyledForm = styled.form`
  display: flex;
  padding: 20px;
  gap: 58px;
  background-color: ${({ theme }) => theme.color.N0};
`;
