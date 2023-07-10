import styled from "styled-components";
//
import { ButtonProps } from "../type";
//
interface Props extends ButtonProps {
  text: string | React.ReactNode;
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
  /* width: 160px; */
  padding: 4px 12px;
  color: ${({ theme }) => theme.color.N0};
  font-weight: ${({ theme }) => theme.fontWeight.Heading400};
  border: none;
  border-radius: 32px;
  font-size: 16px;
  gap: 8px;
  font-weight: 600;
  background: ${({ theme }) => theme.color.B400};
  transition: all 0.3s;
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
