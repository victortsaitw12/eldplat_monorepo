import { SelectField, TextareaField } from "evergreen-ui";
import styled from "styled-components";

export const SelectFieldSTY = styled(SelectField)`
  select:disabled {
    background-color: rgb(237, 241, 242);
  }
`;
export const TextInputFieldSTY = styled.div`
  border-top: 1px solid rgb(237, 241, 242);
  border-bottom: 1px solid rgb(237, 241, 242);
  margin: 2rem 0;
  padding: 2rem 0;
`;
export const CheckBoxSTY = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;

  label {
    margin: 0;
  }
  .text {
    margin-left: 26px;
    letter-spacing: 0;
    font-weight: 300;
  }
`;

export const TextareaFieldSTY = styled(TextareaField)`
  margin-top: -8px;
`;
