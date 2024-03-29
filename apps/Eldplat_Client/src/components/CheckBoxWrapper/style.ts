import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .checkbox_content {
    display: flex;
    align-items: center;
    gap: 15px;
    label {
      margin-top: 0;
      margin-bottom: 0;
    }
    .checkbox_label {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.N700};
    }
  }
  .checkbox_description {
    margin-left: 31px;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.color.N700};
  }
  .checkbox_children {
    padding-left: 30px;
    &.hide {
      display: none;
    }
    > fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export { BodySTY };
