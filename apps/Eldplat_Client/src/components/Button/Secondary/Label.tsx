import styled from "styled-components";
//
import { ButtonProps } from "../type";
//
interface Props extends ButtonProps {
  text: string;
}

function Button(props: Props) {
  return (
    <button className={props.className} {...props}>
      <p className="text">{props.text}</p>
    </button>
  );
}

const StyledButton = styled(Button)`
  cursor: pointer;

  border: 1px solid #b3bac5;
  border-radius: 4px;
  padding: 8px 16px;
  /* gap: 8px; */

  color: ${({ theme }) => theme.color.N700};
  background: ${({ theme }) => theme.color.N0};
  font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};

  transition: all 0.3s;

  > .text {
    /* line-height: 1.2; */
  }

  &:hover {
    color: ${({ theme }) => theme.color.N800};
  }
  /* &:focus {
    color: ${({ theme }) => theme.color.N500};
    background: ${({ theme }) => theme.color.N0};
    border: inset 1px solid ${({ theme }) => theme.color.N500};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.B200};
  } */
  &:active {
    color: ${({ theme }) => theme.color.N800};
    background: ${({ theme }) => theme.color.N100};
  }
  &:disabled {
    color: ${({ theme }) => theme.color.N500};
    background: ${({ theme }) => theme.color.N0};
    cursor: not-allowed;
  }
`;

export default StyledButton;
