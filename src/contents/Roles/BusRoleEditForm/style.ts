import styled from "styled-components";

export const BodySTY = styled.form`
  background: ${({ theme }) => theme.color.N0};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 20px;
  gap: 20px;
  border-radius: 10px;
  .role-form-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 100%;
    p {
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
      color: ${({ theme }) => theme.color.N700};
    }
  }
  .role-form-body {
    display: flex;
    align-items: flex-start;
    padding-top: 20px;
    gap: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.N300};
    width: 100%;
    .role-form-body-title {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    .role-form-body-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px;
      gap: 20px;
      .role-form-body-row {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;
        label {
          margin: 0;
        }
      }
    }
  }
`;
