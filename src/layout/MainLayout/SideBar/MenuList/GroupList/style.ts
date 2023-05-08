import styled from "styled-components";

const BodySTY = styled.div`
  width: 200px;
  padding: 0;
`;

const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  background: none;
  border: none;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.N0};
  width: 200px;
  height: 40px;
  padding: 8px 12px;
  gap: 8px;
`;

export { BodySTY, StyledButton };
