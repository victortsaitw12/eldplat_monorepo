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
  justify-content: center;
  border: none;
  padding: 8px 16px;
  border-radius: 32px;
  gap: 8px;
  color: ${({ theme }) => theme.color.N0};
  font-weight: ${({ theme }) => theme.fontWeight.Heading400};
  background: ${({ theme }) => theme.color.B400};
  transition: all 0.3s;
  > .text {
    line-height: normal;
  }
  &:hover {
    background: ${({ theme }) => theme.color.B500};
  }
  &:active {
    background: ${({ theme }) => theme.color.B500};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.B200};
  }
`;

export default StyledButton;
