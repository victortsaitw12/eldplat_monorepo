import styled from "styled-components";

export const BodySTY = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

export const IconSTY = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  overflow: hidden;
  color: ${({ theme }) => theme.color.B300};
`;
