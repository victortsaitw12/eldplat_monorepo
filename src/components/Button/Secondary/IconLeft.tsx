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
      {props.children}
      <p className="text">{props.text}</p>
    </button>
  );
}

const StyledButton = styled(Button)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.N300};
  font-weight: ${({ theme }) => theme.fontWeight.Paragraph100};
  border: 1px solid ${({ theme }) => theme.color.N60};
  border-radius: 4px;
  gap: 2px;
  background: ${({ theme }) => theme.color.N0};
  transition: all 0.3s;

  p {
    line-height: 16px;
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
  }
`;

export default StyledButton;
