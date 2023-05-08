import styled from "styled-components";
import { ShiftSTY, BtnSTY } from "../style";

export const TimepickerSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        height: 32px;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.color.N400};
        &:focus {
          outline-color: ${({ theme }) => theme.color.N400};
        }
      }
    }
  }
`;
