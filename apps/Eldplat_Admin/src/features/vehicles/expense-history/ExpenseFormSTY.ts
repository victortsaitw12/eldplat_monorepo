import { TextInputField } from "evergreen-ui";
import styled from "styled-components";

export const TextInputFieldSTY = styled(TextInputField)`
  width: 50%;
`;

export const RadioContainerSTY = styled.div`
  padding: 20px 0 20px 0;
  margin-bottom: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .frequencyRadio {
    display: flex;

    .radio {
      width: 100%;

      .radioDescription {
        margin-left: 26px;
        letter-spacing: normal;
        font-weight: 300;
      }
    }
  }
`;
