import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 28px 0; */
  width: 1030px;
  margin: 28px auto;
  gap: 24px;
`;

export const StyledForm = styled.form`
  display: flex;
  padding: 20px;
  gap: 58px;
  background-color: ${({ theme }) => theme.color.N0};
  .form_item {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
