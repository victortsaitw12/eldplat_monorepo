import styled from "styled-components";
export const BodySTY = styled.div`
  cursor: pointer;
  height: 200px;
  width: 200px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 10;
  transition: all 0.3s;
  :hover {
    transform: scale(1.2);
  }
`;
