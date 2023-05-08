import styled from "styled-components";

export const CreateEventBtnSTY = styled.button<{
  startDate?: Date;
}>`
  opacity: ${(props) =>
    props.value === props.startDate?.valueOf() ? "1" : "0"};
  background: ${({ theme }) => theme.color.N100};
  border: none;
  border-radius: 4px;
  flex-grow: 10;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
`;
