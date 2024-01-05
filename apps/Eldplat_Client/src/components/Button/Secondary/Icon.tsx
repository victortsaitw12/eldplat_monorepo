import styled from "styled-components";
//
import { ButtonProps } from "../type";
//
function Button(props: ButtonProps) {
  return (
    <button className={props.className} {...props}>
      {props.children}
    </button>
  );
}

const StyledButton = styled(Button)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  color: ${({ theme }) => theme.color.N600};
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.N0};
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.N700};
    background: ${({ theme }) => theme.color.N50};
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
    color: ${({ theme }) => theme.color.N400};
  }
`;

export default StyledButton;
