import styled from "styled-components";

interface Props {
  active: boolean;
}

export const BodySTY = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: ${({ active, theme }) => (active ? theme.color.N700 : theme.color.N0)};
  font-size: 14px;
  padding: 8px 12px;
  background: ${({ active }) => (active ? "#e2edff" : "none")};
  &:hover {
    background-color: #e2edff;
    color: ${({ theme }) => theme.color.B400};
  }
`;
