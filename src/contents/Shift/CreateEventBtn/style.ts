import styled from "styled-components";
import { eventH } from "../shift.util";

export const CreateEventBtnSTY = styled.button<{
  isOpaque?: boolean;
}>`
  min-height: ${eventH} px;
  opacity: ${(props) => (props.isOpaque ? "1" : "0")};
  background: ${({ theme }) => theme.color.N100};
  border: none;
  border-radius: 4px;
  flex-grow: 10;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  svg {
    color: ${({ theme }) => theme.color.N300};
  }
`;
