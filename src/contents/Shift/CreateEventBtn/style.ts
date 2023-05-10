import styled from "styled-components";

export const CreateEventBtnSTY = styled.button<{
  startDate?: Date;
}>`
  min-height: ${({ theme }) =>
    "calc(" + theme.fontSize.Heading200 + " + 4px * 2)"};
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
